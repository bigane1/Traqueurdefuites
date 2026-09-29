import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { EMAIL, SITE_NAME } from "@/lib/contact";
import { isDatabaseConfigured, prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { prenom, nom, tel, ville, service, message } = body;

    if (!prenom || !nom || !tel || !message) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }

    if (isDatabaseConfigured()) {
      try {
        await prisma.contactLead.create({
          data: {
            firstName: String(prenom),
            lastName: String(nom),
            phone: String(tel),
            city: ville ? String(ville) : null,
            service: service ? String(service) : null,
            message: String(message),
          },
        });
      } catch (e) {
        console.error("[/api/contact] prisma", e);
      }
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    if (!smtpUser || !smtpPass) {
      console.error("[/api/contact] SMTP non configuré");
      return NextResponse.json(
        { error: "Envoi email non configuré sur le serveur." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color:#0a1628;">Nouvelle demande — ${SITE_NAME}</h2>
        <p><strong>${prenom} ${nom}</strong> — ${tel}</p>
        <p>Ville : ${ville || "—"}</p>
        <p>Service : ${service || "—"}</p>
        <p style="white-space:pre-wrap;">${message}</p>
      </div>`;

    await transporter.sendMail({
      from: { name: `${SITE_NAME} — Formulaire`, address: smtpUser },
      to: process.env.SMTP_TO || smtpUser,
      replyTo: EMAIL,
      subject: `[${SITE_NAME}] ${prenom} ${nom} — ${service || "intervention"}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[/api/contact]", err);
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}
