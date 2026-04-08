"use client";

import { useEffect, useState } from "react";
import { AudioLines, File, Mic, Plus, X } from "lucide-react";

import { PROMPT_PHRASES } from "@/constants";

const PromptBox = () => {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = PROMPT_PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      timeout = setTimeout(
        () => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);

          if (charIndex + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1400);
          }
        },
        55 + Math.random() * 40,
      );
    } else {
      timeout = setTimeout(
        () => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);

          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setPhraseIndex((i) => (i + 1) % PROMPT_PHRASES.length);
          }
        },
        25 + Math.random() * 20,
      );
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <div className="bg-gray-10/95 flex h-fit w-full max-w-150 flex-col justify-between gap-4 rounded-2xl border border-white/30 p-4.5 text-white">
      <div className="relative flex w-50 items-center gap-1 rounded-lg border border-white/30 p-1">
        <span className="bg-primary flex-center h-9 w-9 rounded-sm p-2.5">
          <File />
        </span>

        <div className="flex flex-col text-sm">
          <p className="font-roboto font-medium">study.pdf</p>
          <span className="font-inter-light opacity-60">PDF</span>
        </div>
        <span className="bg-primary flex-center absolute top-1 right-1 h-4 w-4 rounded-full p-0.5">
          <X />
        </span>
      </div>

      <div className="flex h-5 items-center justify-between">
        <div className="flex items-center gap-2">
          <Plus strokeWidth={1} />

          <p className="flex min-h-[22px] items-center">
            {displayed}
            <span className="animate-blink ml-px inline-block h-[1em] w-[2px] bg-white/70 align-text-bottom" />
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Mic strokeWidth={1} size={22} />
          <span className="rounded-full bg-black/30 p-2">
            <AudioLines strokeWidth={1} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PromptBox;
