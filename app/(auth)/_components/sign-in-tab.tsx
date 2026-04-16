"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { SocialOAuthButtons } from "./oauth-buttons";

const signInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type SignInForm = z.infer<typeof signInSchema>;

const SignInTab = () => {
  const router = useRouter();
  const form = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isSubmitting } = form.formState;

  const handleSignIn = async (data: SignInForm) => {
    await authClient.signIn.email(
      { ...data },
      {
        onSuccess: () => {
          router.push("/dashboard");
          toast.success("Signed in successfully");
        },
        onError: (error) => {
          toast.error(error.error.message || "Failed to sign in");
        },
      },
    );
  };

  return (
    <form onSubmit={form.handleSubmit(handleSignIn)}>
      <FieldGroup>
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input type="email" placeholder="m@example.com" {...field} />
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel>Password</FieldLabel>
                <Link
                  href="/forgot-password"
                  className="text-sm underline-offset-4 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input type="password" {...field} />
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />

        <Button type="submit" disabled={isSubmitting}>
          Login
        </Button>

        <FieldSeparator>Or</FieldSeparator>
        <Field>
          <SocialOAuthButtons />
        </Field>
      </FieldGroup>
    </form>
  );
};

export default SignInTab;
