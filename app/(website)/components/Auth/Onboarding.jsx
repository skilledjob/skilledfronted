"use client";

import { Button } from "@/app/components/ui/button";
import Modal from "@/app/components/ui/modal";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import EmailVerificationRequested from "./EmailVerificationRequested";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Role from "./Role";
import Signup from "./Signup";

export default function Onboarding() {
  // Local state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoleChoice, setSelectedRoleChoice] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  // go login
  const goLogin = () => {
    setCurrentStep(2);
  };

  // go signup
  const goSignup = () => {
    setCurrentStep(3);
  };

  // forgot password
  const goForgotPassword = () => {
    setCurrentStep(4);
  };

  // go email verification requested
  const goEmailVerificationRequested = () => {
    setCurrentStep(5);
  };

  // go previous
  const goBack = () => {
    if (currentStep === 1) {
      setIsOpen(false);
    } else {
      setCurrentStep(1);
    }
  };

  const toggoleModal = () => {
    setSelectedRoleChoice(null);
    setCurrentStep(1);
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Button onClick={toggoleModal} variant="primary">
        Join
      </Button>

      <Modal
        isOpen={isOpen}
        toggoleModal={toggoleModal}
        width="500px"
        height="auto"
        rounded="md"
        darkMode
      >
        <div className="flex items-center justify-between ps-8">
          <button onClick={goBack} className="text-white">
            <BsArrowLeft size={20} />
          </button>
          <Button variant="text" onClick={toggoleModal}>
            <IoMdClose />
          </Button>
        </div>

        {currentStep === 1 && (
          <Role
            selectedChoice={selectedRoleChoice}
            setSelectedChoice={setSelectedRoleChoice}
            goLogin={goLogin}
            goSignup={goSignup}
          />
        )}
        {currentStep === 2 && (
          <Login
            role={selectedRoleChoice}
            goForgotPassword={goForgotPassword}
            toggoleModal={toggoleModal}
          />
        )}
        {currentStep === 3 && (
          <Signup role={selectedRoleChoice} toggoleModal={toggoleModal} />
        )}
        {currentStep === 4 && (
          <ForgotPassword
            role={selectedRoleChoice}
            goEmailVerificationRequested={goEmailVerificationRequested}
          />
        )}
        {currentStep === 5 && (
          <EmailVerificationRequested goForgotPassword={goForgotPassword} />
        )}
      </Modal>
    </div>
  );
}