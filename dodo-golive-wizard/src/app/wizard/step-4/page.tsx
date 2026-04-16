"use client";

import { WizardShell } from "@/components/wizard/WizardShell";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Zap, Shield, Globe, TrendingUp } from "lucide-react";

const SUMMARY_ITEMS = [
  { icon: "✅", label: "Products configured", value: "2 products" },
  { icon: "🛡️", label: "MoR coverage", value: "Fully covered" },
  { icon: "🧪", label: "Pre-launch checks", value: "4/4 passed" },
  { icon: "🏦", label: "Payout account", value: "HDFC ••••4291" },
];

const WHAT_HAPPENS = [
  {
    icon: Globe,
    title: "Your checkout goes live instantly",
    desc: "Payment links, hosted checkout, and API — all switch to live mode immediately.",
  },
  {
    icon: Shield,
    title: "Dodo monitors your first transactions",
    desc: "Our team watches your first 24 hours of live activity for anomalies.",
  },
  {
    icon: TrendingUp,
    title: "First payout in 3–5 business days",
    desc: "After your first successful charge, your first payout is scheduled automatically.",
  },
];

export default function Step4Page() {
  const router = useRouter();
  const [launching, setLaunching] = useState(false);

  const handleGoLive = async () => {
    setLaunching(true);
    // Simulate a brief "processing" moment
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push("/success");
  };

  return (
    <WizardShell currentStep={4} showBack backHref="/wizard/step-3">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-md bg-dodo-orange/20 border border-dodo-orange/30 flex items-center justify-center">
            <span className="text-dodo-orange text-xs font-mono font-bold">4</span>
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-dodo-muted">
            Final Step
          </span>
        </div>
        <h1 className="font-display font-bold text-3xl text-dodo-white leading-tight">
          You're ready.
          <br />
          <span className="text-dodo-orange">Let's go live. 🚀</span>
        </h1>
        <p className="text-dodo-muted mt-3 font-body text-sm leading-relaxed max-w-lg">
          Review your launch summary below. One click activates live payments globally.
        </p>
      </div>

      {/* Summary card */}
      <div className="rounded-2xl border border-dodo-orange/20 overflow-hidden mb-6"
        style={{ background: "linear-gradient(135deg, rgba(255,92,0,0.07) 0%, rgba(10,10,10,0.8) 100%)" }}
      >
        <div className="px-5 py-3 border-b border-dodo-orange/15">
          <span className="text-xs font-mono text-dodo-orange uppercase tracking-widest">
            Launch Summary
          </span>
        </div>
        <div className="divide-y divide-dodo-gray-mid/30">
          {SUMMARY_ITEMS.map((item, i) => (
            <div key={i} className="px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-base">{item.icon}</span>
                <span className="text-sm font-body text-dodo-muted">{item.label}</span>
              </div>
              <span className="text-sm font-body font-medium text-dodo-white">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* What happens next */}
      <div className="mb-8">
        <p className="text-xs font-mono text-dodo-muted uppercase tracking-wider mb-3">
          What happens when you click Go Live
        </p>
        <div className="space-y-3">
          {WHAT_HAPPENS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-dodo-gray-mid/40 bg-dodo-gray/20 p-4"
            >
              <div className="w-8 h-8 rounded-lg bg-dodo-gray-mid border border-dodo-gray-light/30 flex items-center justify-center shrink-0">
                <Icon size={14} className="text-dodo-muted" />
              </div>
              <div>
                <p className="text-sm font-body font-semibold text-dodo-white">{title}</p>
                <p className="text-xs text-dodo-muted mt-0.5 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* THE button */}
      <button
        onClick={handleGoLive}
        disabled={launching}
        className={`
          w-full relative overflow-hidden transition-all duration-300 text-dodo-black font-display font-bold py-4 rounded-2xl flex items-center justify-center gap-3 text-base
          ${launching
            ? "bg-dodo-orange/70 cursor-not-allowed"
            : "bg-dodo-orange hover:bg-dodo-orange-light active:scale-[0.99] orange-glow"
          }
        `}
      >
        {launching ? (
          <>
            <div className="w-5 h-5 border-2 border-dodo-black/30 border-t-dodo-black rounded-full animate-spin" />
            Activating live mode…
          </>
        ) : (
          <>
            <Zap size={20} className="fill-dodo-black" />
            Go Live Now
          </>
        )}
      </button>

      {!launching && (
        <p className="text-center text-xs text-dodo-muted mt-3">
          You can switch back to sandbox mode at any time from Settings
        </p>
      )}
    </WizardShell>
  );
}
