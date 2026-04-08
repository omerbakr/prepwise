import Image from "next/image";
import Link from "next/link";

interface ActionButtonProps {
  href: string;
  label: string;
  icon?: string;
  className?: string;
}

const ActionButton = ({
  href,
  label,
  icon = "/icons/arrow-right.svg",
  className = "",
}: ActionButtonProps) => {
  return (
    <Link
      href={href}
      className={`bg-primary flex items-center gap-2 rounded-lg p-1 ${className}`}
    >
      <span className="text-md ml-2 font-medium text-white">{label}</span>
      <div className="flex-center ml-4 h-9 w-9 rounded-md bg-white">
        <Image src={icon} alt="" width={16} height={16} className="h-4 w-4" />
      </div>
    </Link>
  );
};

export default ActionButton;
