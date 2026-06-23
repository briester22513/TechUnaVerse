import nodemailer from "nodemailer";

let _transporter: nodemailer.Transporter | null = null;

export function getMailer() {
  if (!_transporter) {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      throw new Error("GMAIL_USER or GMAIL_APP_PASSWORD not set");
    }
    _transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  }
  return _transporter;
}

export async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  await getMailer().sendMail({
    from: `TechUnaVerse <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
  });
}
