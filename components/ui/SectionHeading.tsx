"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface SectionHeadingProps {
  text: string;
  highlight?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

const SectionHeading = ({
  text,
  highlight,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const split = SplitText.create(headingRef.current, { type: "words" });

    gsap.from(split.words, {
      opacity: 0,
      y: 50,
      stagger: 0.05,
      ease: "power1.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <Tag
      ref={headingRef}
      className={cn(
        "max-w-3xl text-center text-2xl font-semibold sm:text-4xl md:leading-12 lg:text-5xl",
        className,
      )}
    >
      {text} {highlight && <span className="text-primary">{highlight}</span>}
    </Tag>
  );
};

export default SectionHeading;
