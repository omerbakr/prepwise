import { ServerClient } from "postmark";

interface EmailProps {
  to: string;
  subject: string;
  html: string;
  text: string;
}

const postmarkServerToken = process.env.POSTMARK_SERVER_TOKEN;
const postmarkFromEmail = process.env.POSTMARK_FROM_EMAIL;

if (!postmarkServerToken || !postmarkFromEmail) {
  throw new Error(
    "Missing Postmark credentials: set POSTMARK_SERVER_TOKEN and POSTMARK_FROM_EMAIL",
  );
}

const postmarkClient = new ServerClient(postmarkServerToken);

export const sendEmail = ({ to, subject, html, text }: EmailProps) => {
  return postmarkClient.sendEmail({
    From: postmarkFromEmail,
    To: to,
    Subject: subject,
    HtmlBody: html,
    TextBody: text,
  });
};

export const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
