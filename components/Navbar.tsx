"use client";

import { useState } from "react";
import Link from "next/link";

import { NAV_LINKS } from "@/constants";
import ActionButton from "@/components/ui/ActionButton";

import MobileMenuButton from "@/components/navbar/MobileMenuButton";
import MobileMenu from "@/components/navbar/MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <MobileMenu isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />

      <header className="fixed left-1/2 z-50 h-20 w-full max-w-3xl -translate-x-1/2 px-4">
        <nav
          aria-label="Main navigation"
          className="shadow-soft-card mt-6 flex h-16 items-center justify-between rounded-xl border border-black/20 bg-white px-1"
        >
          <Link
            href="/"
            className="font-roboto ml-2 border-black/10 pr-4 text-lg font-bold text-black italic sm:border-r"
            aria-label="Homepage"
          >
            Prepwise
          </Link>

          <ul className="flex gap-6 text-sm font-medium max-sm:hidden">
            {NAV_LINKS.map(({ href, name }) => (
              <li key={href}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>

          <ActionButton
            href="/sign-in"
            label="Sign in for free"
            className="max-sm:hidden"
          />

          <MobileMenuButton
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen((p) => !p)}
          />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
