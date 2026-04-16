"use client";

import { WizardShell } from "@/components/wizard/WizardShell";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  CheckCircle2,
  Circle,
  ArrowRight,
  Terminal,
  Webhook,
  CreditCard,
  Receipt,
} from "lucide-react";

interface CheckItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  status: "done" | "pending" | "optional";
}

const INITIAL_CHECKS: CheckItem[] = [
  {
    id: "test_txn",
    icon: CreditCard,
    title: "Test transaction completed",
    description: "At least one successful test payment was made in sandbox",
    status: "done",
  },
  {
    id: "webhook",
    icon: Webhook,
    title: "Webhook endpoint responding",
    description: "Your webhook URL returned a 200 OK within 5 seconds",
    status: "done",
  },
  {
    id: "receipt",
    icon: Receipt,
    title: "Customer receipt delivered",
    description: "Automated receipt email was sent and not bounced",
    status: "done",
  },
  {
    id: "bank",
    icon: Terminal,
    title: "Payout bank account",
    description: "A verified bank account is connected for receiving payouts",
    status: "pending",
  },
];

export default function Step3Page() {
  const router = useRouter();
  const [checks, setChecks] = useState<CheckItem[]>(INITIAL_CHECKS);
  const [bankAdded, setBankAdded] = useState(false);

  const allDone = checks.every((c) => c.status === "done");

  const handleAddBank = () => {
    setBankAdded(true);
    setChecks((prev) =>
      prev.map((c) => (c.id === "bank" ? { ...c, status: "done" } : c))
    );
  };

  const doneCount = checks.filter((c) => c.status === "done").length;

  return (
    <WizardShell currentStep={3} showBack backHref="/wizard/step-2">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-md bg-dodo-orange/20 border border-dodo-orange/30 flex items-center justify-center">
            <span className="text-dodo-orange text-xs font-mono font-bold">3</span>
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-dodo-muted">
            Pre-Launch Check
          </span>
        </div>
        <h1 className="font-display font-bold text-3xl text-dodo-white leading-tight">
          Everything looks good.
          <br />
          <span className="text-dodo-orange">Almost there.</span>
        </h1>
        <p className="text-dodo-muted mt-3 font-body text-sm leading-relaxed max-w-lg">
          We ran a quick check on your integration. Here's your readiness status before going live.
        </p>
      </div>

      {/* Progress bar */}
      <div className="rounded-xl border border-dodo-gray-mid/60 bg-dodo-gray/20 p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-dodo-muted">Launch Readiness</span>
          <span className="text-xs font-mono text-dodo-orange font-medium">
            {doneCount}/{checks.length} checks passed
          </span>
        </div>
        <div className="h-2 rounded-full bg-dodo-gray-mid overflow-hidden">
          <div
            className="h-full rounded-full bg-dodo-orange transition-all duration-700"
            style={{ width: `${(doneCount / checks.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Check items */}
      <div className="space-y-3 mb-8">
        {checks.map((item) => {
          const Icon = item.icon;
          const isDone = item.status === "done";

          return (
            <div
              key={item.id}
              className={`
                rounded-xl border p-4 transition-all duration-500
                ${isDone
                  ? "border-emerald-500/20 bg-emerald-500/5"
                  : "border-dodo-orange/30 bg-dodo-orange/5"
                }
              `}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0
                    ${isDone ? "bg-emerald-500/15 border border-emerald-500/20" : "bg-dodo-orange/15 border border-dodo-orange/20"}
                  `}
                >
                  <Icon
                    size={16}
                    className={isDone ? "text-emerald-400" : "text-dodo-orange"}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-sm font-body font-semibold text-dodo-white">
                      {item.title}
                    </p>
                    {isDone ? (
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    ) : (
                      <Circle size={14} className="text-dodo-orange shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-dodo-muted leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bank account action */}
                  {item.id === "bank" && !bankAdded && (
                    <button
                      onClick={handleAddBank}
                      className="mt-3 text-xs font-body font-semibold text-dodo-orange hover:text-dodo-orange-light transition-colors flex items-center gap-1 border border-dodo-orange/30 bg-dodo-orange/10 px-3 py-1.5 rounded-lg"
                    >
                      + Add bank account
                    </button>
                  )}
                </div>

                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded border shrink-0
                    ${isDone
                      ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
                      : "text-dodo-orange bg-dodo-orange/10 border-dodo-orange/20"
                    }
                  `}
                >
                  {isDone ? "passed" : "needed"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary note */}
      <div className="rounded-xl border border-dodo-gray-mid/40 bg-dodo-gray/20 p-4 mb-6 flex items-start gap-3">
        <span className="text-lg shrink-0">💡</span>
        <p className="text-xs text-dodo-muted leading-relaxed">
          <span className="text-dodo-white font-medium">Remember:</span> Your first live transaction will behave exactly like your test transactions — same webhook events, same receipt emails, same dashboard entries. The only difference is real money.
        </p>
      </div>

      {/* CTA */}
      <button
        onClick={() => allDone && router.push("/wizard/step-4")}
        disabled={!allDone}
        className="w-full bg-dodo-orange hover:bg-dodo-orange-light disabled:opacity-30 disabled:cursor-not-allowed transition-all text-dodo-black font-body font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm"
      >
        {allDone ? "All clear, continue" : `Complete ${checks.length - doneCount} remaining check${checks.length - doneCount > 1 ? "s" : ""}`}
        {allDone && <ArrowRight size={16} />}
      </button>
    </WizardShell>
  );
}
