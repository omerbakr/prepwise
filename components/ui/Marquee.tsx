import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  direction?: "left" | "right";
  className?: string;
};

const Marquee = ({
  children,
  direction = "right",
  className,
}: MarqueeProps) => {
  return (
    <div className={cn("w-dvw max-w-6xl overflow-hidden", className)}>
      <div
        className={cn(
          "flex gap-2 motion-reduce:animate-none",
          direction === "left"
            ? "animate-scroll-x-reverse"
            : "animate-scroll-x",
        )}
      >
        <div className="flex shrink-0 gap-2">{children}</div>
        <div className="flex shrink-0 gap-2" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
