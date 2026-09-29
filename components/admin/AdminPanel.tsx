"use client";

import { useEffect, useState } from "react";
import type { BlogPost, SiteContent } from "@/lib/site-content";

export default function AdminPanel() {
  const [auth, setAuth] = useState<"checking" | "guest" | "ok">("checking");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState<SiteContent | null>(null);
  const [tab, setTab] = useState<"general" | "blog">("general");
  const [msg, setMsg] = useState("");

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
      body: JSON.stringify({ password }),
    });
    if (!res.ok) {
      setMsg("Mot de passe incorrect.");
      return;
    }
    setMsg("");
    await load();
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

  if (auth === "checking") return <p className="p-8">Chargement…</p>;

  if (auth === "guest") {
    return (
      <main className="min-h-screen flex items-center justify-center p-4 bg-slate-100">
        <div className="bg-white p-6 rounded-2xl border w-full max-w-sm space-y-4">
          <h1 className="text-xl font-bold">Espace Traqueur de Fuites</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Mot de passe"
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

  const updateBlog = (index: number, patch: Partial<BlogPost>) => {
    const blog = [...content.blog];
    blog[index] = { ...blog[index], ...patch };
    setContent({ ...content, blog });
  };

  return (
    <main className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">Administration</h1>
          <button
            type="button"
            onClick={() => void save()}
            className="bg-violet-700 text-white px-5 py-2 rounded-lg font-semibold"
          >
            Enregistrer
          </button>
        </div>
        {msg && <p className="mb-4 text-sm text-emerald-700">{msg}</p>}

        <div className="flex gap-2 mb-6">
          {(["general", "blog"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                tab === t ? "bg-violet-800 text-white" : "bg-white border"
              }`}
            >
              {t === "general" ? "Accueil & contact" : "Blog"}
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
              Téléphone affiché
              <input
                className="w-full border rounded-lg mt-1 px-3 py-2"
                value={content.phoneDisplay}
                onChange={(e) => setContent({ ...content, phoneDisplay: e.target.value })}
              />
            </label>
            <label className="block text-sm">
              URL image hero
              <input
                className="w-full border rounded-lg mt-1 px-3 py-2"
                value={content.heroImage}
                onChange={(e) => setContent({ ...content, heroImage: e.target.value })}
              />
            </label>
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
                  onChange={(e) => updateBlog(i, { title: e.target.value })}
                />
                <textarea
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                  rows={2}
                  value={post.excerpt}
                  onChange={(e) => updateBlog(i, { excerpt: e.target.value })}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
