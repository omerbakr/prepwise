import type { Metadata } from "next";
import Link from "next/link";

import { FieldDescription } from "@/components/ui/field";
import SignUpTab from "@/app/(auth)/_components/sign-up-tab";

export const metadata: Metadata = {
  title: "Sign Up | Prepwise",
};

export default function SignUpPage() {
  return (
    <>
      <FieldDescription className="text-center">
        Already have an account? <Link href="/sign-in">Sign in</Link>
      </FieldDescription>
      <SignUpTab />
    </>
  );
}
