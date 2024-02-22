"use client";
import { Button } from "@/app/components/ui/button";

export default function RequestEmailVerification({ goForgotPassword }) {
  return (
    <div className="flex items-center justify-center">
      <Button onClick={goForgotPassword} variant="primary">
        Request a new verification mail
      </Button>
    </div>
  );
}
