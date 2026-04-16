"use client";

import { Logo } from "@/components/ui/Logo";
import { WizardProgress } from "@/components/wizard/WizardProgress";
import { WizardStep } from "@/types";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface WizardShellProps {
  currentStep: WizardStep;
  children: React.ReactNode;
  showBack?: boolean;
  backHref?: string;
}

export function WizardShell({
  currentStep,
  children,
  showBack = true,
  backHref,
}: WizardShellProps) {
  const router = useRouter();

  const handleBack = () => {
    if (backHref) {
      router.push(backHref);
    } else {
      router.back();
    }
  };

  return (
    <div className="min-h-screen bg-dodo-black flex flex-col">
      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,92,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,92,0,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial glow top center */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(255,92,0,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <header className="relative z-10 border-b border-dodo-gray-mid/50 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Logo size="sm" />
          <span className="text-xs font-mono text-dodo-muted tracking-widest uppercase">
            Go-Live Wizard
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 flex-1 flex flex-col items-center px-4 py-10">
        <div className="w-full max-w-2xl space-y-10">
          {/* Progress */}
          <WizardProgress currentStep={currentStep} />

          {/* Back button */}
          {showBack && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-dodo-muted hover:text-dodo-white transition-colors text-sm group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back
            </button>
          )}

          {/* Content */}
          <div className="animate-fade-up">{children}</div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-dodo-gray-mid/30 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <span className="text-xs text-dodo-muted font-mono">
            Step {currentStep} of 4
          </span>
          <span className="text-xs text-dodo-muted">
            Need help?{" "}
            <a
              href="#"
              className="text-dodo-orange hover:text-dodo-orange-light transition-colors"
            >
              Chat with us
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
