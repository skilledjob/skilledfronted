"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import useToast from "@/app/components/ui/toast";
import { resetPassword } from "@/app/lib/auth";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function ResetPasswordForm({ token }) {
  // Local State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
   //toast state 
   const { Toast, showToast } = useToast();
  // hooks
  const router = useRouter();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      password: "",
    },
  });

  /**
   * HANDLERS
   */
  const onSubmit = async data => {
    setLoading(true);
    setError(null);
    const payload = {
      password: data.password,
    };
    const response = await resetPassword(payload, token);
    if (response?.success) {
      setLoading(false);
      setError(null);
 
      showToast("Password reset successfully", "success");
      router.push("/home");
    }
    if (!response?.success) {
      setLoading(false);
      setError(response?.error);
    }
  };

  return (
    <>
    <Toast/>
    <div className="bg-[rgb(3 7 18)] shadow border border-slate-800 rounded p-8">
      <div className="mb-4">
        <h2 className="text-[20px] text-slate-200 font-semibold">
          Reset password
        </h2>
      </div>
      <div className="py-4">
        <FormElements.Error>{error}</FormElements.Error>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormElements.Label withAsterisk>New Password</FormElements.Label>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormElements.Input
                value={value}
                onChange={onChange}
                placeholder="Password"
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
          {errors.password && (
            <FormElements.Error>{errors.password.message}</FormElements.Error>
          )}
        </div>

        <Button variant="primary" type="submit" loading={loading}>
          Reset Password
        </Button>
      </form>
    </div>
    </>
  );
}
