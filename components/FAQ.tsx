"use client";

import { useState } from "react";

import SectionHeading from "@/components/ui/SectionHeading";
import ActionButton from "@/components/ui/ActionButton";
import { FAQS } from "@/constants";
import { cn } from "@/lib/utils";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white">
      <div className="wrapper flex flex-col items-center gap-4 py-24">
        <p className="section-subtitle">FAQs</p>
        <SectionHeading
          text="Everything You Need"
          highlight="to Know."
          className="max-w-xl"
        />

        <ul className="w-full max-w-2xl divide-y divide-gray-200">
          {FAQS.map(({ question, answer }, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-medium"
                >
                  <span>{question}</span>
                  <span
                    aria-hidden
                    className={cn(
                      "text-primary text-2xl leading-none transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  >
                    +
                  </span>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] pb-5 opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <p className="text-gray-15 overflow-hidden">{answer}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-gray-15 w-2xs text-center text-lg md:text-xl">
            Still got questions? Reach out, we’re here to help
          </p>
          <ActionButton href="/" label="Reach out to us" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
