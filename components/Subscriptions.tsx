import SectionHeading from "@/components/ui/SectionHeading";
import BgLines from "@/components/backgrounds/BgLines";
import SubscriptionCard from "@/components/subscription/SubscriptionCard";
import { SUBSCRIPTION_PLANS } from "@/constants";

const Subscriptions = () => {
  return (
    <section className="bg-[url(/images/dark-bg.avif)]">
      <div className="wrapper relative flex flex-col items-center gap-8 py-24">
        <BgLines className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full opacity-60" />
        <div className="flex flex-col items-center gap-1">
          <p className="section-subtitle">Our Subscriptions</p>
          <SectionHeading
            text="Choose Your Path to"
            highlight="Mastery"
            className="max-w-100 text-white"
          />
        </div>

        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
          {SUBSCRIPTION_PLANS.map(({ tier, price, description, features }) => (
            <SubscriptionCard
              key={tier}
              tier={tier}
              price={price}
              description={description}
              features={features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
