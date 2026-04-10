import { Check } from "lucide-react";
import ActionButton from "../ui/ActionButton";

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
    <div className="border-gray-10/40 w-full rounded-2xl border text-white">
      <div className="to-bg-gray-30 border-gray-10/20 from-bg-gray-40 m-0.5 flex flex-col gap-4 rounded-[inherit] border bg-linear-to-b p-6">
        <span className="bg-gray-30 border-gray-20 w-fit rounded-lg border-[0.5px] px-4 py-2 shadow-[inset_0_4px_4px_rgba(255,255,255,0.05),inset_0_-4px_4px_rgba(255,255,255,0.03)]">
          {tier}
        </span>
        <span className="text-5xl font-semibold">{price}</span>
        <p className="text-gray-10">{description}</p>
      </div>
      <div className="flex flex-col gap-4 p-4 text-sm">
        <p className="text-gray-10 font-medium">WHAT&apos;S INCLUDED</p>
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
