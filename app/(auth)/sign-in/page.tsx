import type { Metadata } from "next";
import Link from "next/link";
import { FieldDescription } from "@/components/ui/field";
import SignInTab from "../_components/sign-in-tab";

export const metadata: Metadata = {
  title: "Sign In | Prepwise",
};

export default function SignInPage() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-xl font-bold">Welcome to Prepwise Inc.</h1>
        <FieldDescription>
          Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
        </FieldDescription>
      </div>
      <SignInTab />
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}
        <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
