"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import { AsyncButton } from "@/components/ui/async-button";
import { authClient } from "@/lib/auth-client";

const COOLDOWN_SECONDS = 30;

const ResendVerificationButton = ({ email }: { email?: string }) => {
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown === 0) return;
    const id = setInterval(() => setCooldown((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [cooldown]);

  return (
    <AsyncButton
      type="button"
      variant="outline"
      disabled={!email || cooldown > 0}
      successMessage="Verification email sent"
      errorFallback="Failed to send verification email"
      onAction={async () => {
        if (!email) {
          toast.error("Missing email address");
          return;
        }
        const { error } = await authClient.sendVerificationEmail({
          email,
          callbackURL: "/dashboard",
        });
        if (error)
          throw new Error(error.message || "Failed to send verification email");
        setCooldown(COOLDOWN_SECONDS);
      }}
    >
      {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend verification email"}
    </AsyncButton>
  );
};

export default ResendVerificationButton;
