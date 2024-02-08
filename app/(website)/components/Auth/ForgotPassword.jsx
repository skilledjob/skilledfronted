"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import { Controller, useForm } from "react-hook-form";

export default function ForgotPassword({ role }) {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      phoneNumber: "",
    },
  });

  /**
   * HANDLERS
   */
  // handle login
  const forgotPasswordHandler = data => {};

  return (
    <div>
      <form
        onSubmit={handleSubmit(forgotPasswordHandler)}
        className="space-y-4 p-8"
      >
        <h2 className="text-slate-200 text-xl">Forgot password?</h2>
        <p className="text-slate-400">
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </p>
        {role === "Hirer" && (
          <div>
            <FormElements.Label withAsterisk>Email address</FormElements.Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <FormElements.Input
                  type="text"
                  placeholder="Enter your email"
                  width="full"
                  {...field}
                />
              )}
              rules={{
                required: "Please enter your email",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please enter a valid email address",
                },
              }}
            />
            <FormElements.Error>{errors.email?.message}</FormElements.Error>
          </div>
        )}

        {role === "Job Seeker" && (
          <div>
            <FormElements.Label withAsterisk>Phone number</FormElements.Label>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <FormElements.Input
                  type="text"
                  placeholder="Enter your phone number"
                  width="full"
                  {...field}
                />
              )}
              rules={{
                required: "Please enter your phone number",
                pattern: {
                  value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                  message: "Please enter a valid phone number",
                },
              }}
            />
            <FormElements.Error>
              {errors.phoneNumber?.message}
            </FormElements.Error>
          </div>
        )}

        <div>
          <Button variant="primary" size="md" type="submit">
            Reset password
          </Button>
        </div>
      </form>
    </div>
  );
}
