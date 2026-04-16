import type { Metadata } from "next";
import Link from "next/link";

import { FieldDescription } from "@/components/ui/field";
import SignInTab from "@/app/(auth)/_components/sign-in-tab";

export const metadata: Metadata = {
  title: "Sign In | Prepwise",
};

export default function SignInPage() {
  return (
    <>
      <FieldDescription className="text-center">
        Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
      </FieldDescription>
      <SignInTab />
    </>
  );
}
