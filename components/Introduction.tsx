import Image from "next/image";

import ActionButton from "./ui/ActionButton";
import SectionHeading from "./ui/SectionHeading";
import Marquee from "./ui/Marquee";
import BgLines from "./backgrounds/BgLines";
import { KEY_FEATURES, PROFILES } from "@/constants";

const Introduction = () => {
  const profileItems = PROFILES.map(({ role, image }) => (
    <div
      key={image}
      className="flex shrink-0 items-center gap-2 rounded-md bg-white/10 p-2"
    >
      <Image
        src={image}
        alt={role}
        width={32}
        height={32}
        className="rounded-full"
      />
      <p className="text-xs font-semibold whitespace-nowrap">{role}</p>
    </div>
  ));

  return (
    <section className="bg-[url(/images/introduction.avif)]">
      <div className="wrapper relative flex flex-col items-center gap-8 py-24">
        <BgLines className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full opacity-60" />
        <p className="section-subtitle">Introducing Prepwise</p>
        <SectionHeading
          as="h2"
          className="mb-8 text-white"
          text="From PDF to Understanding"
          highlight="AI Teaching System"
        />

        <div className="bg-gray-10 grid grid-cols-1 rounded-2xl border border-white/20 text-white lg:grid-cols-2">
          <div className="bg-gray-40 relative isolate flex flex-col gap-8 overflow-hidden rounded-tl-2xl p-10 max-sm:rounded-tr-2xl md:rounded-bl-2xl md:p-16">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-lg border-[0.5px] border-[#333] bg-[#1a1a1a] px-4 py-2 shadow-[inset_0_4px_4px_rgba(255,255,255,0.05),inset_0_-4px_4px_rgba(255,255,255,0.03)]">
                Get Ahead
              </span>
              <p className="text-xl font-semibold md:text-4xl">
                Turn any PDF into a personal tutor that actually helps you
                learn.
              </p>
              <ActionButton
                href="sign-in"
                label="Sign in for free"
                className="w-fit"
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-lg md:text-xl">
                Trusted by students and researchers across every field of
                study.
              </p>

              <div className="flex flex-col gap-2 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <Marquee direction="right">{profileItems}</Marquee>
                <Marquee direction="left">{profileItems}</Marquee>
              </div>
            </div>

            <div className="glow-circle -z-10 h-200 w-200 bg-black blur-lg" />
            <div className="bg-gray-20 glow-circle -z-20 h-225 w-225 blur-xs" />
            <div className="bg-primary/40 glow-circle -z-30 h-300 w-300 blur-3xl" />
            <div className="bg-primary glow-circle -z-40 h-220 w-225 blur-2xl" />
          </div>

          <div className="flex flex-col justify-center gap-4 px-8 py-20 md:gap-12">
            {KEY_FEATURES.map(({ label, text, icon }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="bg-gray-30 flex-center relative aspect-square h-24 rounded-lg md:h-32">
                  <div className="bg-primary to-background abs-center h-12 w-12 rounded-full bg-linear-to-b opacity-80 blur-sm" />
                  <Image
                    src={icon}
                    alt=""
                    width={32}
                    height={32}
                    className="z-10"
                  />
                </div>
                <div className="flex h-full flex-col justify-evenly font-medium">
                  <span className="text-md text-gray-20">{label}</span>
                  <p className="text-sm md:text-[20px]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
