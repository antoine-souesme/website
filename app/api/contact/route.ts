import { Resend } from 'resend';

export const runtime = 'nodejs';

type ContactPayload = {
    name?: unknown;
    email?: unknown;
    message?: unknown;
};

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL;
const contactFromEmail = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev';

const resend = resendApiKey ? new Resend(resendApiKey) : null;

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
    value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');

export async function POST(request: Request) {
    if (!resend || !contactToEmail) {
        return Response.json(
            {
                error: 'Configuration email manquante.',
            },
            { status: 500 },
        );
    }

    let payload: ContactPayload;

    try {
        payload = await request.json();
    } catch {
        return Response.json(
            {
                error: 'Corps de requête invalide.',
            },
            { status: 400 },
        );
    }

    const name = typeof payload.name === 'string' ? payload.name.trim() : '';
    const email = typeof payload.email === 'string' ? payload.email.trim() : '';
    const message = typeof payload.message === 'string' ? payload.message.trim() : '';

    if (!name || !email || !message) {
        return Response.json(
            {
                error: 'Tous les champs sont requis.',
            },
            { status: 400 },
        );
    }

    if (name.length > 120 || message.length > 5000 || !isValidEmail(email)) {
        return Response.json(
            {
                error: 'Données de formulaire invalides.',
            },
            { status: 400 },
        );
    }

    const textBody = `Nouveau message de contact\n\nNom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const htmlBody = `
      <h2>Nouveau message de contact</h2>
      <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replaceAll('\n', '<br />')}</p>
    `;

    const { data, error } = await resend.emails.send({
        from: contactFromEmail,
        to: [contactToEmail],
        replyTo: email,
        subject: `Nouveau message de contact - ${name}`,
        text: textBody,
        html: htmlBody,
    });

    if (error) {
        return Response.json(
            {
                error: "Impossible d'envoyer l'email.",
            },
            { status: error.statusCode || 500 },
        );
    }

    return Response.json({ ok: true, id: data?.id });
}
