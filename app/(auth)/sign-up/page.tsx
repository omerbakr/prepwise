import type { Metadata } from "next";
import Link from "next/link";
import { FieldDescription } from "@/components/ui/field";
import SignUpTab from "../_components/sign-up-tab";

export const metadata: Metadata = {
  title: "Sign Up | Prepwise",
};

export default function SignUpPage() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-xl font-bold">Welcome to Prepwise Inc.</h1>
        <FieldDescription>
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </FieldDescription>
      </div>
      <SignUpTab />
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}
        <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
