"use client";

import { Logo } from "@/components/ui/Logo";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  CreditCard,
  Settings,
  Users,
  Zap,
  Bell,
  TrendingUp,
  Globe,
  ChevronRight,
} from "lucide-react";

const NAV_ITEMS = [
  { icon: BarChart3, label: "Overview", active: true },
  { icon: CreditCard, label: "Transactions" },
  { icon: Users, label: "Customers" },
  { icon: Globe, label: "Products" },
  { icon: TrendingUp, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

const MOCK_TRANSACTIONS = [
  { id: "txn_test_001", amount: "$29.00", status: "test", customer: "john@example.com", time: "2m ago" },
  { id: "txn_test_002", amount: "$79.00", status: "test", customer: "sara@startup.io", time: "15m ago" },
  { id: "txn_test_003", amount: "$299.00", status: "test", customer: "dev@company.com", time: "1h ago" },
];

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-dodo-black flex">
      {/* Grid BG */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,92,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,92,0,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Sidebar */}
      <aside className="relative z-10 w-56 border-r border-dodo-gray-mid/50 flex flex-col py-6 px-3">
        <div className="px-3 mb-8">
          <Logo size="sm" />
        </div>

        <nav className="flex-1 space-y-1">
          {NAV_ITEMS.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body transition-all
                ${active
                  ? "bg-dodo-orange/10 text-dodo-orange border border-dodo-orange/20"
                  : "text-dodo-muted hover:text-dodo-white hover:bg-dodo-gray-mid/50"
                }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </nav>

        {/* Sandbox badge */}
        <div className="px-3 mt-4">
          <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 px-3 py-2.5">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-xs font-mono text-yellow-400 font-medium">SANDBOX MODE</span>
            </div>
            <p className="text-xs text-dodo-muted">Not accepting real payments yet</p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Top bar */}
        <header className="border-b border-dodo-gray-mid/50 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-display font-bold text-xl text-dodo-white">Overview</h1>
            <p className="text-xs text-dodo-muted mt-0.5">Welcome back, Hemang</p>
          </div>
          <button className="relative p-2 rounded-lg hover:bg-dodo-gray-mid/50 transition-colors">
            <Bell size={18} className="text-dodo-muted" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-dodo-orange" />
          </button>
        </header>

        <main className="flex-1 p-8 space-y-6 overflow-auto">
          {/* ⚡ GO LIVE BANNER — The hero element */}
          <div
            className="relative overflow-hidden rounded-2xl border border-dodo-orange/30 cursor-pointer group"
            onClick={() => router.push("/wizard/step-1")}
            style={{
              background:
                "linear-gradient(135deg, rgba(255,92,0,0.12) 0%, rgba(255,92,0,0.04) 50%, rgba(10,10,10,0.8) 100%)",
            }}
          >
            {/* Animated shimmer */}
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Decorative circle */}
            <div
              className="absolute -right-16 -top-16 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(255,92,0,0.15) 0%, transparent 70%)",
              }}
            />

            <div className="relative p-6 flex items-center justify-between">
              <div className="flex items-center gap-5">
                {/* Pulse icon */}
                <div className="relative">
                  <div className="ping-ring absolute inset-0 rounded-full bg-dodo-orange/30" />
                  <div className="relative w-12 h-12 rounded-full bg-dodo-orange/20 border border-dodo-orange/40 flex items-center justify-center">
                    <Zap size={22} className="text-dodo-orange fill-dodo-orange" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-dodo-orange font-medium">
                      Action Required
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-xs bg-dodo-orange/20 text-dodo-orange border border-dodo-orange/30 font-mono">
                      NEW
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-xl text-dodo-white">
                    You&apos;re ready to go live
                  </h2>
                  <p className="text-sm text-dodo-muted mt-0.5 max-w-md">
                    You have 3 test transactions completed. Take 3 minutes to activate live payments and start earning real revenue.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="text-right mr-2 hidden sm:block">
                  <p className="text-xs text-dodo-muted">Estimated time</p>
                  <p className="text-sm font-mono text-dodo-white font-medium">~3 mins</p>
                </div>
                <button className="flex items-center gap-2 bg-dodo-orange hover:bg-dodo-orange-light transition-colors px-5 py-2.5 rounded-xl font-body font-semibold text-dodo-black text-sm group-hover:gap-3">
                  Start Wizard
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="border-t border-dodo-orange/15 px-6 py-3 flex items-center gap-4">
              {["Products configured", "Test transaction done", "Bank account added"].map(
                (item, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-dodo-orange/20 border border-dodo-orange/40 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-dodo-orange" />
                    </div>
                    <span className="text-xs text-dodo-muted">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Total Revenue", value: "$0.00", sub: "Live mode only", delta: null },
              { label: "Test Transactions", value: "3", sub: "Last 7 days", delta: "+3" },
              { label: "Active Products", value: "2", sub: "Configured", delta: null },
            ].map(({ label, value, sub, delta }) => (
              <div
                key={label}
                className="rounded-xl border border-dodo-gray-mid/60 bg-dodo-gray/30 p-5"
              >
                <p className="text-xs text-dodo-muted font-body mb-3">{label}</p>
                <div className="flex items-end gap-2">
                  <p className="font-display font-bold text-2xl text-dodo-white">{value}</p>
                  {delta && (
                    <span className="text-xs text-emerald-400 font-mono mb-0.5">{delta}</span>
                  )}
                </div>
                <p className="text-xs text-dodo-muted mt-1">{sub}</p>
              </div>
            ))}
          </div>

          {/* Recent transactions */}
          <div className="rounded-xl border border-dodo-gray-mid/60 bg-dodo-gray/30 overflow-hidden">
            <div className="px-6 py-4 border-b border-dodo-gray-mid/40 flex items-center justify-between">
              <h3 className="font-display font-semibold text-dodo-white text-sm">
                Recent Transactions
              </h3>
              <span className="text-xs font-mono text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded border border-yellow-400/20">
                TEST MODE
              </span>
            </div>

            <div className="divide-y divide-dodo-gray-mid/30">
              {MOCK_TRANSACTIONS.map((txn) => (
                <div
                  key={txn.id}
                  className="px-6 py-4 flex items-center justify-between hover:bg-dodo-gray-mid/20 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-dodo-gray-mid flex items-center justify-center">
                      <CreditCard size={14} className="text-dodo-muted" />
                    </div>
                    <div>
                      <p className="text-sm font-body text-dodo-white">{txn.customer}</p>
                      <p className="text-xs font-mono text-dodo-muted">{txn.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-mono text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/20">
                      test
                    </span>
                    <span className="font-mono text-sm text-dodo-white font-medium">
                      {txn.amount}
                    </span>
                    <span className="text-xs text-dodo-muted w-12 text-right">{txn.time}</span>
                    <ChevronRight size={14} className="text-dodo-muted" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="px-6 py-4 bg-dodo-orange/5 border-t border-dodo-orange/15 flex items-center justify-between">
              <p className="text-xs text-dodo-muted">
                These are test transactions.{" "}
                <span className="text-dodo-orange">Go live to see real revenue here.</span>
              </p>
              <button
                onClick={() => router.push("/wizard/step-1")}
                className="text-xs font-body font-semibold text-dodo-orange hover:text-dodo-orange-light transition-colors flex items-center gap-1"
              >
                Launch wizard <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
