"use client";

import { Logo } from "@/components/ui/Logo";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Copy, ExternalLink } from "lucide-react";

const CONFETTI_COLORS = [
  "#FF5C00", "#FF8040", "#FFB800", "#00D4AA", "#7C3AED", "#EC4899",
];

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  delay: number;
}

export default function SuccessPage() {
  const router = useRouter();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [copied, setCopied] = useState(false);

  const MOCK_LINK = "https://pay.dodopayments.com/c/1a2b3c4d";

  useEffect(() => {
    const p: Particle[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 20,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size: 6 + Math.random() * 8,
      rotation: Math.random() * 360,
      delay: Math.random() * 2,
    }));
    setParticles(p);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(MOCK_LINK).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-dodo-black flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,92,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,92,0,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,92,0,0.1) 0%, transparent 60%)",
        }}
      />

      {/* Confetti particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-sm"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              transform: `rotate(${p.rotation}deg)`,
              animation: `confettiFall ${2 + p.delay}s ease-in ${p.delay}s forwards`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes confettiFall {
          0% { opacity: 1; transform: rotate(0deg) translateY(0); }
          100% { opacity: 0; transform: rotate(720deg) translateY(100vh); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">
        {/* Logo */}
        <div className="mb-8">
          <Logo size="md" />
        </div>

        {/* Icon */}
        <div className="relative mb-6">
          <div
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: "rgba(255,92,0,0.2)" }}
          />
          <div
            className="relative w-20 h-20 rounded-full flex items-center justify-center text-4xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,92,0,0.3), rgba(255,92,0,0.1))",
              border: "1px solid rgba(255,92,0,0.4)",
              boxShadow: "0 0 60px rgba(255,92,0,0.25)",
            }}
          >
            🚀
          </div>
        </div>

        <h1 className="font-display font-extrabold text-4xl text-dodo-white mb-3 leading-tight">
          You&apos;re live.
        </h1>
        <p className="text-dodo-orange font-display font-bold text-xl mb-4">
          Real payments are now active.
        </p>
        <p className="text-dodo-muted font-body text-sm leading-relaxed mb-8 max-w-sm">
          Congratulations — you just unlocked global revenue. Your first live checkout link is ready to share.
        </p>

        {/* Live link */}
        <div className="w-full rounded-2xl border border-dodo-orange/30 overflow-hidden mb-6"
          style={{ background: "rgba(255,92,0,0.05)" }}
        >
          <div className="px-4 py-2 border-b border-dodo-orange/15 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400">LIVE</span>
            </div>
            <span className="text-xs font-mono text-dodo-muted">Your checkout link</span>
          </div>
          <div className="px-4 py-4 flex items-center gap-3">
            <span className="flex-1 font-mono text-sm text-dodo-white truncate">
              {MOCK_LINK}
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dodo-orange/15 border border-dodo-orange/30 text-xs font-body font-medium text-dodo-orange hover:bg-dodo-orange/25 transition-colors"
            >
              <Copy size={12} />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button
            onClick={() => router.push("/")}
            className="flex-1 bg-dodo-orange hover:bg-dodo-orange-light transition-colors text-dodo-black font-body font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
          >
            Go to Dashboard
            <ArrowRight size={15} />
          </button>
          <button className="flex-1 border border-dodo-gray-mid hover:border-dodo-gray-light transition-colors text-dodo-white font-body py-3 rounded-xl flex items-center justify-center gap-2 text-sm">
            <ExternalLink size={14} />
            View in Docs
          </button>
        </div>

        {/* Metric nudge */}
        <div className="mt-8 rounded-xl border border-dodo-gray-mid/40 bg-dodo-gray/20 px-5 py-4 w-full">
          <p className="text-xs text-dodo-muted mb-3 font-mono uppercase tracking-wider">
            What to expect next
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { label: "First payout", value: "3–5 days" },
              { label: "Tax filing", value: "Automated" },
              { label: "Support SLA", value: "< 4 hours" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="font-display font-bold text-dodo-orange text-lg">{value}</p>
                <p className="text-xs text-dodo-muted mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
