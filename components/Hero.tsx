import Image from "next/image";

import ActionButton from "./ActionButton";
import Countdown from "./hero/Countdown";
import PromptBox from "./hero/PromptBox";
import SectionHeading from "./ui/SectionHeading";
import { PAIN_POINTS } from "@/constants";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden">
      <Image
        src="/images/background.avif"
        alt=""
        fill
        priority
        aria-hidden
        className="pointer-events-none -z-50 max-h-screen w-screen"
      />
      <Image
        src="/images/hero-grid.svg"
        alt=""
        width={1600}
        height={1600}
        aria-hidden
        className="pointer-events-none absolute -top-30 left-1/2 -translate-x-1/2 max-sm:hidden"
      />

      <div className="to-background pointer-events-none absolute inset-0 h-screen bg-linear-to-b from-transparent via-transparent via-90%" />

      <div className="glow top-[18%] left-[8%] h-[30%] w-[10%] -rotate-45" />
      <div className="glow top-0 left-[32%] h-[72%] w-[12%] -rotate-30" />

      <div className="glow top-0 right-[32%] h-[72%] w-[12%] rotate-30" />
      <div className="glow top-[18%] right-[8%] h-[30%] w-[10%] rotate-45" />

      <div className="wrapper mt-48 flex flex-col items-center gap-4">
        <Countdown />

        <SectionHeading
          as="h1"
          className="text-white"
          text="Upload Your PDF and Learn with an AI Tutor &"
          highlight="Like never before."
        />

        <PromptBox />

        <ActionButton label="Sign in for free" href="/sign-in" />

        <div className="relative my-16 h-full max-h-155 w-full max-w-300 rounded-2xl border border-white/30 p-2 shadow-2xl">
          {/* TODO: Replace with actual app screenshot */}
          <Image
            src="/images/temporary.jpg"
            alt="App dashboard preview"
            width={1200}
            height={600}
            className="h-full w-full rounded-[inherit] shadow-2xl"
          />
        </div>

        <div className="my-16 flex flex-col items-center gap-8 md:px-24">
          <p className="font-roboto text-gray-20 text-2xl">Is this you?</p>

          <SectionHeading
            className="text-black"
            text="Does Your Experience with AI Feel More"
            highlight="Frustrating Than Futuristic?"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PAIN_POINTS.map(({ id, text, icon }) => (
              <div
                key={id}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Image src={icon} alt="" width={32} height={32} />
                <p className="max-w-80 text-lg font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
