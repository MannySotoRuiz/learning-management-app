"use client";

import React from "react";

import { useUser } from "@clerk/nextjs";
import { useCheckoutNavigation } from "@/hooks/use-checkout-navigation";

import Loading from "@/components/loading";
import { WizardStepper } from "@/components/marketing/wizard-stepper";

import PaymentPage from "./payment";
import CheckoutDetailsPage from "./details";

const CheckoutWizard = () => {
  const { isLoaded } = useUser();
  const { checkoutStep } = useCheckoutNavigation();

  if (!isLoaded) return <Loading />;

  const renderStep = () => {
    switch (checkoutStep) {
      case 1:
        return <CheckoutDetailsPage />;
      case 2:
        return <PaymentPage />;
      case 3:
        return <div>Completion Page</div>;
      // return <CompletionPage />;
      default:
        return <CheckoutDetailsPage />;
    }
  };

  return (
    <div className="checkout">
      <WizardStepper currentStep={checkoutStep} />
      <div className="checkout__content">{renderStep()}</div>
    </div>
  );
};

export default CheckoutWizard;
