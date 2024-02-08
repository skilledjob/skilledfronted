"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import { Controller, useForm } from "react-hook-form";

export default function Login({ role, goForgotPassword }) {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      phoneNumber: "",
    },
  });

  /**
   * HANDLERS
   */
  // handle login
  const loginHandler = data => {};

  return (
    <div>
      <form onSubmit={handleSubmit(loginHandler)} className="space-y-4 p-8">
        <h2 className="text-slate-200 text-xl">Welcome back!</h2>
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
          <div className="flex items-center justify-between">
            <FormElements.Label withAsterisk>Password</FormElements.Label>
            <span
              onClick={goForgotPassword}
              className="text-sm cursor-pointer text-red-700"
            >
              Forgot password?
            </span>
          </div>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <FormElements.Input
                type="text"
                placeholder="Enter your password"
                width="full"
                {...field}
              />
            )}
            rules={{
              required: {
                value: true,
                message: "Password is required",
              },
              validate: {
                password: value =>
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
                    value
                  ) ||
                  "Password should be at least 8 characters long one uppercase letter, one lowercase letter, one number and one special character",
              },
            }}
          />
          <FormElements.Error>{errors.password?.message}</FormElements.Error>
        </div>

        <div>
          <Button variant="primary" size="md" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
