"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import useToast from "@/app/components/ui/toast";
import { login } from "@/app/lib/auth";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function Login({ role, goForgotPassword, toggoleModal }) {
  // Local State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { Toast, showToast } = useToast();

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
  const loginHandler = async data => {
    setLoading(true);
    setError("");

    let payload;
    if (role === "Hirer") {
      payload = {
        email: data?.email,
        password: data?.password,
        role: "hirer",
      };
    } else if (role === "Job Seeker") {
      payload = {
        phoneNumber: data?.phoneNumber,
        password: data?.password,
        role: "user",
      };
    }

    const response = await login(payload);
    console.log("respons====>",response?.success)
    if (!response?.success) {
      setLoading(false);
      setError(response?.error);
    }
    if (response?.success) {
      setLoading(false);
      showToast("Login successful","success");
      toggoleModal();
    }
  };

  return (
    <> 
      
    <div>
    <Toast/>
      <form onSubmit={handleSubmit(loginHandler)} className="space-y-4 p-8">
        <h2 className="text-slate-200 text-xl">Welcome back!</h2>

        {error && <FormElements.Error>{error}</FormElements.Error>}

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
                  value: /^(\+\d{1,3}[- ]?)?\d{11}$/,
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
          <Button
            variant="btnColor"
            size="md"
            type="submit"
            loading={loading}
            disabled={loading}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
    </>
  );
}
