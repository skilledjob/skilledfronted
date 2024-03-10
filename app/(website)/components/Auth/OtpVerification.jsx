"use client";

import { Button } from "@/app/components/ui/button";
import Otp from "@/app/components/ui/otp";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function OtpVerfication() {
  const [otp, setOtp] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  /**
   * HANDLERS
   */
  const otpSubmitHandler = async data => {};

  return (
    <div className="py-6">
      <div className="text-center">
        <h2 className="text-slate-200 text-xl">Otp Verfication</h2>
        <p className="text-slate-400">
          Enter the four digit code to sent your phone number.
        </p>
      </div>
      <form onSubmit={handleSubmit(otpSubmitHandler)}>
        <Controller
          name="otp"
          control={control}
          render={({ field: { value, onChange } }) => (
            <div className="flex justify-center items-center mt-7">
              <Otp otp={value} setOtp={onChange} />
            </div>
          )}
        />
        <div className="ml-[100px] mt-6">
          <Button variant="primary" type="submit">
            Verify
          </Button>
        </div>
      </form>
    </div>
  );
}
