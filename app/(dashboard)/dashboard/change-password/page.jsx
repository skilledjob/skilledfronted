"use client";
import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import useToast from "@/app/components/ui/toast";
import { changePassword } from "@/app/lib/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const { Toast, showToast } = useToast();

  const router = useRouter();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  const handlePassword = async data => {
    event.preventDefault();
    setLoading(true);
    const { oldPassword, newPassword } = data;

    if (!oldPassword || !newPassword) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    const resetPassword = { oldPassword, newPassword };

    const result = await changePassword(resetPassword);

    if (!result?.success) {
      setLoading(false);
      showToast(result?.error, "error");
    }
    if (result?.success) {
      setLoading(false);
      router.push("/dashboard");
      showToast("Password Change successful", "success");
    }
  };

  return (
    <>
      <Toast />
      <form
        onSubmit={handleSubmit(handlePassword)}
        className="text-white max-w-xl mx-auto mt-10 space-y-5"
      >
        <div>
          <FormElements.Label>Old Password</FormElements.Label>
          <Controller
            name="oldPassword"
            control={control}
            render={({ field }) => (
              <FormElements.Input
                type="password"
                placeholder="Enter Your Old Password"
                width="full"
                {...field}
              />
            )}
            rules={{
              value: true,
              required: "Old Password is Required",
            }}
          />
          <FormElements.Error>{errors.oldPassword?.message}</FormElements.Error>
        </div>
        <div>
          <FormElements.Label>New Password</FormElements.Label>
          <Controller
            name="newPassword"
            control={control}
            render={({ field }) => (
              <FormElements.Input
                type="password"
                placeholder="Enter Your New Password"
                width="full"
                {...field}
              />
            )}
            rules={{
              required: {
                value: true,
                message: "New Password is required",
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

          <FormElements.Error>{errors.newPassword?.message}</FormElements.Error>
        </div>
        <div className="flex items-center justify-center">
          <Button
            type="submit"
            variant="btnColor"
            size="md"
            loading={loading}
            disabled={loading}
          >
            Change Password
          </Button>
        </div>
      </form>
    </>
  );
};

export default Page;
