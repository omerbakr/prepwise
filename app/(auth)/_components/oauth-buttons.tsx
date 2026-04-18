"use client";

import { AsyncButton } from "@/components/ui/async-button";
import {
  SUPPORTED_OAUTH_PROVIDER_DETAILS,
  SUPPORTED_OAUTH_PROVIDERS,
} from "./oauth-providers";
import { authClient } from "@/lib/auth-client";

export const SocialOAuthButtons = () => {
  return SUPPORTED_OAUTH_PROVIDERS.map((provider) => {
    const { Icon, name } = SUPPORTED_OAUTH_PROVIDER_DETAILS[provider];

    return (
      <AsyncButton
        key={provider}
        type="button"
        variant="outline"
        icon={<Icon />}
        errorFallback="Failed to sign in"
        onAction={async () => {
          const { error } = await authClient.signIn.social({
            provider,
            callbackURL: "/dashboard",
          });
          if (error) throw new Error(error.message || "Failed to sign in");
        }}
      >
        Continue with {name}
      </AsyncButton>
    );
  });
};
