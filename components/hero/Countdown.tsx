"use client";

import { useEffect, useState } from "react";
import { getTimeLeft } from "@/lib/utils";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;
  return (
    <div className="mb-4 flex max-w-fit items-center rounded-sm bg-white p-0.5 md:max-w-72">
      <div className="font-roboto rounded-xs bg-black px-1 py-0.5 text-xs font-semibold text-white md:font-bold">
        Limited time offer ends in
      </div>
      {/* TODO: Fix hydration mismatch properly */}
      <p
        suppressHydrationWarning
        className="mx-auto px-0.5 text-xs tracking-wider text-black tabular-nums md:text-sm"
      >
        {days} : {String(hours).padStart(2, "0")} :{" "}
        {String(minutes).padStart(2, "0")} : {String(seconds).padStart(2, "0")}
      </p>
    </div>
  );
};

export default Countdown;
