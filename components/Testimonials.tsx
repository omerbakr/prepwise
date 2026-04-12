import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Marquee from "@/components/ui/Marquee";
import { TESTIMONIALS } from "@/constants";

const Testimonials = () => {
  return (
    <section className="relative bg-white bg-[url(/images/grid-floor.svg)] bg-bottom bg-no-repeat pb-32 sm:bg-size-[100%_auto]">
      <div className="via-75 white-gradient-to-bottom" />

      <div className="wrapper flex flex-col items-center gap-4 py-24">
        <p className="section-subtitle">Testimonials</p>
        <SectionHeading
          text="Our Students Don't Just Learn,"
          highlight="They Achieve."
          className="max-w-xl"
        />

        <Marquee className="mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          {TESTIMONIALS.map(({ name, image, role, beforeText, afterText }) => (
            <TestimonialCard
              key={name}
              name={name}
              image={image}
              role={role}
              beforeText={beforeText}
              afterText={afterText}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
