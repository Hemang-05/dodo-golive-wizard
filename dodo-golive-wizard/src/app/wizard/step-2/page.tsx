"use client";

import { WizardShell } from "@/components/wizard/WizardShell";
import { MOR_COVERAGES } from "@/lib/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Shield } from "lucide-react";

export default function Step2Page() {
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);

  return (
    <WizardShell currentStep={2} showBack backHref="/wizard/step-1">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-md bg-dodo-orange/20 border border-dodo-orange/30 flex items-center justify-center">
            <span className="text-dodo-orange text-xs font-mono font-bold">2</span>
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-dodo-muted">
            What Dodo Handles
          </span>
        </div>
        <h1 className="font-display font-bold text-3xl text-dodo-white leading-tight">
          You focus on product.
          <br />
          <span className="text-dodo-orange">We handle the rest.</span>
        </h1>
        <p className="text-dodo-muted mt-3 font-body text-sm leading-relaxed max-w-lg">
          As your Merchant of Record, Dodo takes on full legal and financial responsibility for every transaction. Here's exactly what that means for you.
        </p>
      </div>

      {/* Shield hero */}
      <div
        className="rounded-2xl border border-dodo-orange/20 p-5 mb-6 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,92,0,0.08) 0%, rgba(10,10,10,0.6) 100%)",
        }}
      >
        <div
          className="absolute -right-10 -top-10 w-40 h-40 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,92,0,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-dodo-orange/20 border border-dodo-orange/30 flex items-center justify-center shrink-0">
            <Shield size={22} className="text-dodo-orange" />
          </div>
          <div>
            <p className="font-display font-semibold text-dodo-white text-base">
              Dodo is the legal seller of record
            </p>
            <p className="text-xs text-dodo-muted mt-0.5 leading-relaxed">
              Your company name appears in our system. Dodo's entity appears on every customer receipt, bank statement, and tax document worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Coverage grid */}
      <div className="grid grid-cols-1 gap-3 mb-8">
        {MOR_COVERAGES.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-dodo-gray-mid/50 bg-dodo-gray/20 p-4 flex items-start gap-4 step-card hover:border-dodo-gray-light/50 transition-colors"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
            <div>
              <p className="font-body font-semibold text-dodo-white text-sm mb-1">
                {item.title}
              </p>
              <p className="text-xs text-dodo-muted leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation checkbox */}
      <div
        onClick={() => setConfirmed(!confirmed)}
        className={`
          rounded-xl border p-4 cursor-pointer transition-all duration-300 mb-6 flex items-start gap-3
          ${confirmed
            ? "border-dodo-orange/40 bg-dodo-orange/6"
            : "border-dodo-gray-mid/60 bg-dodo-gray/20 hover:border-dodo-gray-light/50"
          }
        `}
        style={confirmed ? { background: "rgba(255,92,0,0.05)" } : {}}
      >
        <div
          className={`
            w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all
            ${confirmed ? "bg-dodo-orange border-dodo-orange" : "border-dodo-gray-light bg-transparent"}
          `}
        >
          {confirmed && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="#0A0A0A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <div>
          <p className="text-sm font-body text-dodo-white font-medium">
            I understand what Dodo handles on my behalf
          </p>
          <p className="text-xs text-dodo-muted mt-0.5">
            Tax, fraud, chargebacks, PCI compliance, and legal liability are Dodo's responsibility — not mine.
          </p>
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={() => confirmed && router.push("/wizard/step-3")}
        disabled={!confirmed}
        className="w-full bg-dodo-orange hover:bg-dodo-orange-light disabled:opacity-30 disabled:cursor-not-allowed transition-all text-dodo-black font-body font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm"
      >
        Got it, continue
        <ArrowRight size={16} />
      </button>

      <p className="text-center text-xs text-dodo-muted mt-3">
        Full legal terms available in your{" "}
        <span className="text-dodo-orange cursor-pointer hover:underline">
          merchant agreement
        </span>
      </p>
    </WizardShell>
  );
}
