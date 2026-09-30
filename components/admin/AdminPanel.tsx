"use client";

import { useEffect, useState } from "react";
import type { LegalPageContent, SiteContent } from "@/lib/site-content";

type Tab = "general" | "brand" | "mutualisation" | "legal" | "blog";

export default function AdminPanel() {
  const [auth, setAuth] = useState<"checking" | "guest" | "ok">("checking");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState<SiteContent | null>(null);
  const [tab, setTab] = useState<Tab>("general");
  const [msg, setMsg] = useState("");
  const [legalKey, setLegalKey] = useState<"mentions" | "cgu" | "cgv">("mentions");

  const load = async () => {
    const res = await fetch("/api/admin/content");
    if (!res.ok) {
      setAuth("guest");
      return;
    }
    setContent(await res.json());
    setAuth("ok");
  };

  useEffect(() => {
    void load();
  }, []);

  const login = async () => {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      setMsg("Identifiants incorrects.");
      return;
    }
    setMsg("");
    await load();
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuth("guest");
    setContent(null);
  };

  const save = async () => {
    if (!content) return;
    setMsg("");
    const res = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });
    if (!res.ok) {
      const d = (await res.json().catch(() => ({}))) as { error?: string };
      setMsg(d.error ?? "Erreur enregistrement");
      return;
    }
    setMsg("Enregistré.");
  };

  const updateLegal = (patch: Partial<LegalPageContent>) => {
    if (!content) return;
    setContent({
      ...content,
      legal: {
        ...content.legal,
        [legalKey]: { ...content.legal[legalKey], ...patch },
      },
    });
  };

  const updateLegalSection = (index: number, field: "heading" | "body", value: string) => {
    if (!content) return;
    const sections = [...content.legal[legalKey].sections];
    sections[index] = { ...sections[index], [field]: value };
    updateLegal({ sections });
  };

  if (auth === "checking") return <p className="p-8">Chargement…</p>;

  if (auth === "guest") {
    return (
      <main className="min-h-screen flex items-center justify-center p-4 bg-slate-100">
        <div className="bg-white p-6 rounded-2xl border w-full max-w-sm space-y-4">
          <h1 className="text-xl font-bold">Administration Traqueur de Fuites</h1>
          <p className="text-sm text-slate-500">E-mail et mot de passe fournis par votre prestataire.</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="E-mail"
            autoComplete="username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Mot de passe"
            autoComplete="current-password"
          />
          {msg && <p className="text-sm text-red-600">{msg}</p>}
          <button
            type="button"
            onClick={() => void login()}
            className="w-full bg-violet-700 text-white py-2 rounded-lg font-semibold"
          >
            Connexion
          </button>
        </div>
      </main>
    );
  }

  if (!content) return null;

  const tabs: { id: Tab; label: string }[] = [
    { id: "general", label: "Accueil & contact" },
    { id: "brand", label: "Logo & images" },
    { id: "mutualisation", label: "Mutualisation" },
    { id: "legal", label: "CGU / CGV / légal" },
    { id: "blog", label: "Blog" },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">Administration</h1>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => void logout()}
              className="border px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Déconnexion
            </button>
            <button
              type="button"
              onClick={() => void save()}
              className="bg-violet-700 text-white px-5 py-2 rounded-lg font-semibold"
            >
              Enregistrer
            </button>
          </div>
        </div>
        {msg && (
          <p className={`mb-4 text-sm ${msg === "Enregistré." ? "text-emerald-700" : "text-red-600"}`}>
            {msg}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                tab === t.id ? "bg-violet-800 text-white" : "bg-white border"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "general" && (
          <div className="bg-white rounded-2xl border p-6 space-y-4">
            <label className="block text-sm">
              Titre hero
              <input
                className="w-full border rounded-lg mt-1 px-3 py-2"
                value={content.heroTitle}
                onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
              />
            </label>
            <label className="block text-sm">
              Sous-titre hero
              <textarea
                className="w-full border rounded-lg mt-1 px-3 py-2"
                rows={3}
                value={content.heroLead}
                onChange={(e) => setContent({ ...content, heroLead: e.target.value })}
              />
            </label>
            <label className="block text-sm">
              Bandeau (eyebrow)
              <input
                className="w-full border rounded-lg mt-1 px-3 py-2"
                value={content.heroEyebrow}
                onChange={(e) => setContent({ ...content, heroEyebrow: e.target.value })}
              />
            </label>
            <label className="block text-sm">
              Téléphone affiché
              <input
                className="w-full border rounded-lg mt-1 px-3 py-2"
                value={content.phoneDisplay}
                onChange={(e) => setContent({ ...content, phoneDisplay: e.target.value })}
              />
            </label>
            <label className="block text-sm">
              E-mail affiché
              <input
                className="w-full border rounded-lg mt-1 px-3 py-2"
                value={content.email}
                onChange={(e) => setContent({ ...content, email: e.target.value })}
              />
            </label>
            <label className="block text-sm">
              Adresse
              <input
                className="w-full border rounded-lg mt-1 px-3 py-2"
                value={content.address}
                onChange={(e) => setContent({ ...content, address: e.target.value })}
              />
            </label>
          </div>
        )}

        {tab === "brand" && (
          <div className="bg-white rounded-2xl border p-6 space-y-4">
            <p className="text-sm text-slate-600">
              Logo : chemin dans le site (ex. /brand/logo-blanc.png) ou URL complète. Pour un nouveau
              fichier, ajoutez-le dans le dossier public puis indiquez le chemin ici.
            </p>
            <label className="block text-sm">
              URL logo
              <input
                className="w-full border rounded-lg mt-1 px-3 py-2"
                value={content.logoSrc}
                onChange={(e) => setContent({ ...content, logoSrc: e.target.value })}
              />
            </label>
            <label className="block text-sm">
              Texte alternatif logo
              <input
                className="w-full border rounded-lg mt-1 px-3 py-2"
                value={content.logoAlt}
                onChange={(e) => setContent({ ...content, logoAlt: e.target.value })}
              />
            </label>
            <label className="block text-sm">
              URL image hero (accueils)
              <input
                className="w-full border rounded-lg mt-1 px-3 py-2"
                value={content.heroImage}
                onChange={(e) => setContent({ ...content, heroImage: e.target.value })}
              />
            </label>
            <label className="block text-sm">
              Légende image hero
              <input
                className="w-full border rounded-lg mt-1 px-3 py-2"
                value={content.heroImageAlt}
                onChange={(e) => setContent({ ...content, heroImageAlt: e.target.value })}
              />
            </label>
          </div>
        )}

        {tab === "mutualisation" && (
          <div className="bg-white rounded-2xl border p-6 space-y-4">
            <label className="block text-sm">
              Titre (partie 1)
              <input
                className="w-full border rounded-lg mt-1 px-3 py-2"
                value={content.mutualisation.heroTitle}
                onChange={(e) =>
                  setContent({
                    ...content,
                    mutualisation: { ...content.mutualisation, heroTitle: e.target.value },
                  })
                }
              />
            </label>
            <label className="block text-sm">
              Titre (partie accent)
              <input
                className="w-full border rounded-lg mt-1 px-3 py-2"
                value={content.mutualisation.heroHighlight}
                onChange={(e) =>
                  setContent({
                    ...content,
                    mutualisation: { ...content.mutualisation, heroHighlight: e.target.value },
                  })
                }
              />
            </label>
            <label className="block text-sm">
              Introduction
              <textarea
                className="w-full border rounded-lg mt-1 px-3 py-2"
                rows={3}
                value={content.mutualisation.intro}
                onChange={(e) =>
                  setContent({
                    ...content,
                    mutualisation: { ...content.mutualisation, intro: e.target.value },
                  })
                }
              />
            </label>
            <label className="block text-sm">
              Encart prix de groupe
              <input
                className="w-full border rounded-lg mt-1 px-3 py-2"
                value={content.mutualisation.callout}
                onChange={(e) =>
                  setContent({
                    ...content,
                    mutualisation: { ...content.mutualisation, callout: e.target.value },
                  })
                }
              />
            </label>
            {content.mutualisation.benefits.map((b, i) => (
              <label key={i} className="block text-sm">
                Avantage {i + 1}
                <input
                  className="w-full border rounded-lg mt-1 px-3 py-2"
                  value={b}
                  onChange={(e) => {
                    const benefits = [...content.mutualisation.benefits];
                    benefits[i] = e.target.value;
                    setContent({
                      ...content,
                      mutualisation: { ...content.mutualisation, benefits },
                    });
                  }}
                />
              </label>
            ))}
            <label className="block text-sm">
              Texte d&apos;appel à l&apos;action
              <textarea
                className="w-full border rounded-lg mt-1 px-3 py-2"
                rows={2}
                value={content.mutualisation.ctaText}
                onChange={(e) =>
                  setContent({
                    ...content,
                    mutualisation: { ...content.mutualisation, ctaText: e.target.value },
                  })
                }
              />
            </label>
          </div>
        )}

        {tab === "legal" && (
          <div className="bg-white rounded-2xl border p-6 space-y-4">
            <div className="flex gap-2">
              {(["mentions", "cgu", "cgv"] as const).map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setLegalKey(k)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${
                    legalKey === k ? "bg-slate-800 text-white" : "border"
                  }`}
                >
                  {k === "mentions" ? "Mentions" : k.toUpperCase()}
                </button>
              ))}
            </div>
            <label className="block text-sm">
              Titre page
              <input
                className="w-full border rounded-lg mt-1 px-3 py-2"
                value={content.legal[legalKey].title}
                onChange={(e) => updateLegal({ title: e.target.value })}
              />
            </label>
            <label className="block text-sm">
              Introduction
              <textarea
                className="w-full border rounded-lg mt-1 px-3 py-2"
                rows={2}
                value={content.legal[legalKey].intro}
                onChange={(e) => updateLegal({ intro: e.target.value })}
              />
            </label>
            {content.legal[legalKey].sections.map((s, i) => (
              <div key={i} className="border rounded-xl p-4 space-y-2">
                <p className="text-xs text-slate-500">Section {i + 1}</p>
                <input
                  className="w-full border rounded-lg px-3 py-2 font-semibold"
                  value={s.heading}
                  onChange={(e) => updateLegalSection(i, "heading", e.target.value)}
                />
                <textarea
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                  rows={4}
                  value={s.body}
                  onChange={(e) => updateLegalSection(i, "body", e.target.value)}
                />
              </div>
            ))}
          </div>
        )}

        {tab === "blog" && (
          <div className="space-y-6">
            {content.blog.map((post, i) => (
              <div key={post.slug} className="bg-white rounded-2xl border p-6 space-y-3">
                <p className="text-xs text-slate-500">Article {i + 1}</p>
                <input
                  className="w-full border rounded-lg px-3 py-2 font-semibold"
                  value={post.title}
                  onChange={(e) => {
                    const blog = [...content.blog];
                    blog[i] = { ...blog[i], title: e.target.value };
                    setContent({ ...content, blog });
                  }}
                />
                <textarea
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                  rows={2}
                  value={post.excerpt}
                  onChange={(e) => {
                    const blog = [...content.blog];
                    blog[i] = { ...blog[i], excerpt: e.target.value };
                    setContent({ ...content, blog });
                  }}
                />
                <input
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                  placeholder="URL image"
                  value={post.image}
                  onChange={(e) => {
                    const blog = [...content.blog];
                    blog[i] = { ...blog[i], image: e.target.value };
                    setContent({ ...content, blog });
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
