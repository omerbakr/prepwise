import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  image: string;
  role: string;
  beforeText: string;
  afterText: string;
};

const TestimonialCard = ({
  name,
  image,
  role,
  beforeText,
  afterText,
}: TestimonialCardProps) => {
  return (
    <div className="bg-background border-gray-10/20 mx-2 flex w-sm flex-col gap-2 rounded-2xl border p-4 shadow-xs">
      <div className="border-gray-10 flex w-full items-start justify-between border-b border-dashed pb-6">
        <div className="flex gap-2">
          <Image
            src={image}
            alt=""
            width={64}
            height={64}
            className="rounded-md"
          />

          <div className="flex flex-col">
            <p className="text-xl font-medium">{name}</p>
            <p className="font-roboto text-gray-15">{role}</p>
          </div>
        </div>
        <Image src="/icons/quote.svg" alt="" width={20} height={20} />
      </div>

      <div className="border-gray-15 h-32 border-b border-dashed pb-6 font-medium">
        <span className="text-sm uppercase">Before</span>
        <p className="text-gray-15">&ldquo;{beforeText}&rdquo;</p>
      </div>
      <div className="bg-gray-40 mt-4 flex h-32 flex-col gap-2 rounded-xl p-4 font-medium shadow-md">
        <span className="text-gray-10 text-sm uppercase">After</span>
        <p className="text-sm text-white">&ldquo;{afterText}&rdquo;</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
