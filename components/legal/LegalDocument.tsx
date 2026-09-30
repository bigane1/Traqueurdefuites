import type { LegalPageContent } from "@/lib/site-content";

export default function LegalDocument({ doc }: { doc: LegalPageContent }) {
  return (
    <article className="prose prose-slate max-w-3xl">
      <h1>{doc.title}</h1>
      <p className="lead">{doc.intro}</p>
      {doc.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{s.body}</p>
        </section>
      ))}
    </article>
  );
}
