"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  SUPPORTED_OAUTH_PROVIDER_DETAILS,
  SUPPORTED_OAUTH_PROVIDERS,
} from "./oauth-providers";
import { authClient } from "@/lib/auth-client";

export const SocialOAuthButtons = () => {
  const [isLoading, setIsLoading] = useState(false);

  return SUPPORTED_OAUTH_PROVIDERS.map((provider) => {
    const Icon = SUPPORTED_OAUTH_PROVIDER_DETAILS[provider].Icon;

    return (
      <Button
        key={provider}
        type="button"
        variant="outline"
        disabled={isLoading}
        onClick={async () => {
          setIsLoading(true);
          await authClient.signIn.social(
            { provider, callbackURL: "/dashboard" },
            {
              onError: (error) => {
                setIsLoading(false);
                toast.error(error.error.message || "Failed to sign in");
              },
            },
          );
        }}
      >
        {isLoading ? <Spinner /> : <Icon />}
        Continue with {SUPPORTED_OAUTH_PROVIDER_DETAILS[provider].name}
      </Button>
    );
  });
};
