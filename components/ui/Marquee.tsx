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
    <div className={cn("group overflow-hidden", className)}>
      <div
        className={cn(
          "flex gap-2 motion-reduce:animate-none",
          direction === "left" ? "animate-scroll-x-reverse" : "animate-scroll-x",
        )}
      >
        {children}

        <div aria-hidden="true" className="flex gap-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
