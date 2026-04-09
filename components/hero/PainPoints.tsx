import Image from "next/image";

import SectionHeading from "@/components/ui/SectionHeading";
import { PAIN_POINTS } from "@/constants";

const PainPoints = () => {
  return (
    <div className="my-16 flex flex-col items-center gap-8 md:px-24">
      <p className="section-subtitle">Is this you?</p>

      <SectionHeading
        className="text-black md:mb-12"
        text="Does Your Experience with AI Feel More"
        highlight="Frustrating Than Futuristic?"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {PAIN_POINTS.map(({ id, text, icon }) => (
          <div
            key={id}
            className="flex flex-col items-center gap-2 text-center"
          >
            <Image
              src={icon}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <p className="max-w-80 text-lg font-medium">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PainPoints;
