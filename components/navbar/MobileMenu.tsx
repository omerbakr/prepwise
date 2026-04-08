import Link from "next/link";

import { NAV_LINKS } from "@/constants";
import ActionButton from "@/components/ui/ActionButton";

interface MobileMenuProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const MobileMenu = ({ isOpen, onOpenChange }: MobileMenuProps) => {
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 h-screen bg-black/40 backdrop-blur-2xl transition-all duration-300 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={() => onOpenChange(false)}
    >
      <div className="col-center h-full gap-8">
        <ul className="flex flex-col gap-4 text-xl font-medium text-white">
          {NAV_LINKS.map(({ href, name }) => (
            <li key={href}>
              <Link href={href} onClick={() => onOpenChange(false)}>
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <ActionButton href="/sign-in" label="Sign in for free" />
      </div>
    </div>
  );
};

export default MobileMenu;
