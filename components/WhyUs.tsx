import Image from "next/image";

import SectionHeading from "./ui/SectionHeading";
import { STATS } from "@/constants";

const WhyUs = () => {
  return (
    <section className="border-gray-10/30 border-b border-dashed bg-white">
      <div className="wrapper flex flex-col items-center gap-4 px-12 py-24">
        <p className="section-subtitle">Why choose us?</p>
        <SectionHeading
          as="h2"
          text="The Results Speak for"
          highlight="Themselves"
          className="max-w-100"
        />

        <div className="bg-background grid w-full grid-cols-1 rounded-2xl p-8 lg:grid-cols-3">
          {STATS.map(({ label, text, icon }) => (
            <div
              key={label}
              className="border-gray-10/30 flex flex-col items-center gap-3 border-b border-dashed p-8 text-center last:border-b-0 lg:border-r lg:nth-[3n]:border-r-0 lg:nth-last-[-n+3]:border-b-0"
            >
              <Image src={icon} alt="" width={32} height={32} />
              <span className="text-lg font-semibold md:text-xl">{label}</span>
              <p className="text-gray-10 text-sm md:text-base lg:text-lg">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
