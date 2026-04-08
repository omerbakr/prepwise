import { TARGET_DATE } from "@/constants";

export const cn = (...classes: (string | false | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export const getTimeLeft = () => {
  const diff = TARGET_DATE.getTime() - Date.now();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};
