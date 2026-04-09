import { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  direction?: "left" | "right";
  className?: string;
};

const Marquee = ({
  children,
  direction = "right",
  className = "",
}: MarqueeProps) => {
  return (
    <div className={`group overflow-hidden ${className}`}>
      <div
        className={`flex gap-2 ${direction === "left" ? "animate-scroll-x-reverse" : "animate-scroll-x"} motion-reduce:animate-none`}
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
