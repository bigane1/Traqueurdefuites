"use client";

import { useState } from "react";

import { SERVICE_NAV } from "@/lib/navigation";

const services = [
  ...SERVICE_NAV.map((s) => s.label),
  "Autre urgence",
];

export default function InterventionForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setError(data.error ?? "Envoi impossible.");
      setStatus("err");
      return;
    }
    setStatus("ok");
    e.currentTarget.reset();
  }

  const field =
    "w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 bg-white";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-slate-600">Prénom *</label>
          <input name="prenom" required className={field} />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">Nom *</label>
          <input name="nom" required className={field} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-slate-600">Téléphone *</label>
          <input name="tel" type="tel" required className={field} />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">Ville</label>
          <input name="ville" className={field} placeholder="Ex. Tours" />
        </div>
      </div>
      <div>
        <label className="text-xs font-semibold text-slate-600">Type de besoin</label>
        <select name="service" className={field}>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-xs font-semibold text-slate-600">Message *</label>
        <textarea name="message" required rows={4} className={field} />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {status === "ok" && (
        <p className="text-sm text-emerald-700 font-medium">
          Demande envoyée — nous vous recontactons rapidement.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto font-bold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3.5 rounded-xl shadow-md transition disabled:opacity-60"
      >
        {status === "loading" ? "Envoi…" : "Envoyer la demande"}
      </button>
    </form>
  );
}
