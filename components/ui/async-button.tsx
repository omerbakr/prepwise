"use client";

import { ComponentProps, ReactNode, useState } from "react";
import { toast } from "sonner";

import { Button } from "./button";
import { Spinner } from "./spinner";

type AsyncButtonProps = Omit<ComponentProps<typeof Button>, "onClick"> & {
  onAction: () => Promise<void>;
  icon?: ReactNode;
  successMessage?: string;
  errorFallback?: string;
};

const AsyncButton = ({
  onAction,
  icon,
  successMessage,
  errorFallback = "Something went wrong",
  children,
  disabled,
  ...props
}: AsyncButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await onAction();
      if (successMessage) toast.success(successMessage);
    } catch (error) {
      const message = error instanceof Error ? error.message : errorFallback;
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      {...props}
      disabled={disabled || isLoading}
      onClick={handleClick}
    >
      {isLoading ? <Spinner /> : icon}
      {children}
    </Button>
  );
};

export { AsyncButton };
