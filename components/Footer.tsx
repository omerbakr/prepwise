import Link from "next/link";

import {
  FOOTER_ADDRESS,
  FOOTER_CONTACTS,
  FOOTER_LEGAL_LINKS,
  FOOTER_LINKS,
  FOOTER_PHONE,
  SOCIAL_LINKS,
} from "@/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="wrapper pt-20 pb-8">
      <div className="grid gap-12 md:grid-cols-3 md:gap-8">
        <div className="flex flex-col gap-8">
          <Link
            href="/"
            className="font-roboto text-3xl font-bold italic"
            aria-label="Homepage"
          >
            Prepwise
          </Link>
          <p className="text-gray-15 max-w-xs">
            Study with AI that actually gets your PDFs — and you.
          </p>
          <ul className="mt-auto flex gap-3">
            {SOCIAL_LINKS.map(({ name, href, path }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex-center text-foreground size-9 rounded-md bg-black/5 transition hover:bg-black/10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="font-roboto text-lg font-semibold">Links</h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map(({ href, name }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-gray-15 hover:text-foreground transition"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {FOOTER_CONTACTS.map(({ email, caption }) => (
            <div key={email} className="flex flex-col gap-1">
              <a
                href={`mailto:${email}`}
                className="font-roboto text-lg font-semibold"
              >
                {email}
              </a>
              <p className="text-gray-15">{caption}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="font-roboto text-lg font-semibold">Legal</h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LEGAL_LINKS.map(({ href, name }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-gray-15 hover:text-foreground transition"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <a
              href={`tel:${FOOTER_PHONE.number.replace(/[^+\d]/g, "")}`}
              className="font-roboto text-lg font-semibold"
            >
              {FOOTER_PHONE.number}
            </a>
            {FOOTER_PHONE.hours.map((line) => (
              <p key={line} className="text-gray-15">
                {line}
              </p>
            ))}
          </div>
          <address className="text-gray-15 flex flex-col not-italic">
            {FOOTER_ADDRESS.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </div>
      </div>

      <div className="text-gray-15 mt-16 flex items-center justify-between border-t border-black/10 pt-6 text-sm">
        <p>&copy; {year} Prepwise.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
