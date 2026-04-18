import type { Metadata } from "next";
import Link from "next/link";

import { FieldDescription } from "@/components/ui/field";
import ResendVerificationButton from "./resend-verification-button";

export const metadata: Metadata = {
  title: "Verify your email | Prepwise",
};

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const { email } = await searchParams;

  return (
    <div className="flex flex-col gap-4 text-center">
      <h2 className="text-lg font-semibold">Check your email</h2>
      <FieldDescription>
        {email ? (
          <>
            We&apos;ve sent a verification link to <strong>{email}</strong>.
            Click the link to activate your account.
          </>
        ) : (
          <>
            We&apos;ve sent a verification link to your email. Click the link to
            activate your account.
          </>
        )}
      </FieldDescription>
      <ResendVerificationButton email={email} />
      <FieldDescription>
        <Link href="/sign-in">Back to sign in</Link>
      </FieldDescription>
    </div>
  );
}
