"use client";

import { WIZARD_STEPS } from "@/lib/data";
import { WizardStep } from "@/types";
import { Check } from "lucide-react";

interface WizardProgressProps {
  currentStep: WizardStep;
}

export function WizardProgress({ currentStep }: WizardProgressProps) {
  return (
    <div className="w-full">
      {/* Step indicators */}
      <div className="flex items-center justify-between relative">
        {/* Background line */}
        <div className="absolute top-4 left-0 right-0 h-px bg-dodo-gray-mid z-0" />

        {/* Filled line */}
        <div
          className="absolute top-4 left-0 h-px bg-dodo-orange z-0 transition-all duration-700 ease-in-out"
          style={{
            width: `${((currentStep - 1) / (WIZARD_STEPS.length - 1)) * 100}%`,
          }}
        />

        {WIZARD_STEPS.map(({ step, label }) => {
          const isCompleted = currentStep > step;
          const isCurrent = currentStep === step;
          const isPending = currentStep < step;

          return (
            <div key={step} className="flex flex-col items-center gap-2 z-10">
              {/* Circle */}
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-medium
                  transition-all duration-500
                  ${isCompleted ? "bg-dodo-orange text-dodo-black" : ""}
                  ${isCurrent ? "bg-dodo-orange text-dodo-black ring-4 ring-dodo-orange/20" : ""}
                  ${isPending ? "bg-dodo-gray-mid text-dodo-muted border border-dodo-gray-light" : ""}
                `}
              >
                {isCompleted ? (
                  <Check size={14} strokeWidth={3} />
                ) : (
                  <span>{step}</span>
                )}
              </div>

              {/* Label */}
              <span
                className={`text-xs font-body tracking-wide transition-colors duration-300
                  ${isCurrent ? "text-dodo-orange font-medium" : ""}
                  ${isCompleted ? "text-dodo-white/60" : ""}
                  ${isPending ? "text-dodo-muted" : ""}
                `}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
