import Image from "next/image";

import ActionButton from "./ActionButton";
import Countdown from "./hero/Countdown";
import PromptBox from "./hero/PromptBox";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden">
      <Image
        src="/images/background.avif"
        alt=""
        fill
        priority
        className="-z-50 max-h-screen w-screen"
      />
      <Image
        src="/images/hero-grid.svg"
        alt=""
        width={1600}
        height={1600}
        className="absolute -top-30 left-1/2 -translate-x-1/2"
      />

      <div className="absolute inset-0 h-screen bg-linear-to-b from-transparent via-transparent via-90% to-white" />

      <div className="glow top-[18%] left-[8%] h-[30%] w-[10%] -rotate-45" />
      <div className="glow top-0 left-[28%] h-[72%] w-[12%] -rotate-30" />
      <div className="glow top-0 right-[28%] h-[72%] w-[12%] rotate-30" />
      <div className="glow top-[18%] right-[8%] h-[30%] w-[10%] rotate-45" />

      <div className="wrapper mt-48 flex flex-col items-center gap-4">
        <Countdown />

        <h1 className="font-inter-tight text-center text-2xl font-semibold text-white md:text-[45px] md:leading-12">
          Upload Your PDF and Learn <br /> with an AI Tutor &{" "}
          <span className="text-primary">Like never before.</span>
        </h1>

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
      </div>
    </section>
  );
};

export default Hero;
