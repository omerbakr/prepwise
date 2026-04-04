import { cn } from "@/lib/utils";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenuButton = ({ isOpen, onToggle }: MobileMenuButtonProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      className="flex-center mr-2 h-8 w-8 flex-col gap-1 sm:hidden"
    >
      <span
        className={cn(
          "bg-primary h-0.5 w-7 origin-left transition-all duration-200 ease-in-out",
          isOpen && "-translate-y-1 rotate-30",
        )}
      />
      <span
        className={cn(
          "bg-primary h-0.5 w-7 origin-left transition-all duration-200 ease-in-out",
          isOpen && "translate-y-1 -rotate-30",
        )}
      />
    </button>
  );
};

export default MobileMenuButton;
