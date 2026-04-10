import { Check } from "lucide-react";

import ActionButton from "@/components/ui/ActionButton";

interface SubscriptionCardProps {
  tier: string;
  price: string;
  description: string;
  features: readonly string[];
}

const SubscriptionCard = ({
  tier,
  price,
  description,
  features,
}: SubscriptionCardProps) => {
  return (
    <div className="border-gray-10/40 flex w-full flex-col rounded-2xl border text-white">
      <div className="to-gray-30 border-gray-10/20 from-gray-40 m-0.5 flex flex-1 flex-col gap-4 rounded-[inherit] border bg-linear-to-b p-6">
        <span className="badge-inset">{tier}</span>
        <span className="text-3xl font-semibold md:text-5xl">{price}</span>
        <p className="text-gray-10">{description}</p>
      </div>
      <div className="flex flex-col gap-4 p-4 text-sm">
        <p className="text-gray-10 font-medium uppercase">
          What&apos;s Included
        </p>
        <ul className="flex flex-col gap-4 px-1">
          {features.map((feat) => (
            <li key={feat} className="flex items-center gap-2">
              <Check
                className="rounded-full bg-white p-1 text-black"
                size={20}
              />
              {feat}
            </li>
          ))}
        </ul>

        <ActionButton
          href="/sign-in"
          label={`Enroll now for ${price}`}
          className="mt-4 justify-between"
        />
      </div>
    </div>
  );
};

export default SubscriptionCard;
