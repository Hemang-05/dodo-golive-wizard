"use client";

import { WizardShell } from "@/components/wizard/WizardShell";
import { MOCK_PRODUCTS } from "@/lib/data";
import { Product } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Check, Plus, RefreshCw, Zap } from "lucide-react";

export default function Step1Page() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(
    MOCK_PRODUCTS[0]
  );

  const billingBadge = (type: Product["billingType"], interval?: string) => {
    if (type === "subscription")
      return `Subscription · ${interval === "yearly" ? "Annual" : "Monthly"}`;
    if (type === "usage") return "Usage-based";
    return "One-time";
  };

  const badgeColor = (type: Product["billingType"]) => {
    if (type === "subscription") return "text-blue-400 bg-blue-400/10 border-blue-400/20";
    if (type === "usage") return "text-purple-400 bg-purple-400/10 border-purple-400/20";
    return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
  };

  return (
    <WizardShell currentStep={1} showBack backHref="/">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-md bg-dodo-orange/20 border border-dodo-orange/30 flex items-center justify-center">
            <span className="text-dodo-orange text-xs font-mono font-bold">1</span>
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-dodo-muted">
            Product & Pricing
          </span>
        </div>
        <h1 className="font-display font-bold text-3xl text-dodo-white leading-tight">
          Confirm what you're selling
        </h1>
        <p className="text-dodo-muted mt-2 font-body text-sm leading-relaxed max-w-lg">
          Review your configured products and pricing. These will go live exactly as shown. You can edit anytime from the Products section.
        </p>
      </div>

      {/* Product list */}
      <div className="space-y-3 mb-6">
        {MOCK_PRODUCTS.map((product) => {
          const isSelected = selectedProduct?.id === product.id;
          return (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`
                relative rounded-xl border p-4 cursor-pointer transition-all duration-300 step-card
                ${isSelected
                  ? "border-dodo-orange/50 bg-dodo-orange/8"
                  : "border-dodo-gray-mid/60 bg-dodo-gray/30 hover:border-dodo-gray-light/60"
                }
              `}
              style={isSelected ? { background: "rgba(255,92,0,0.06)" } : {}}
            >
              {isSelected && (
                <div className="absolute top-4 right-4">
                  <div className="w-5 h-5 rounded-full bg-dodo-orange flex items-center justify-center">
                    <Check size={11} strokeWidth={3} className="text-dodo-black" />
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4 pr-8">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                    ${isSelected ? "bg-dodo-orange/20 border border-dodo-orange/30" : "bg-dodo-gray-mid border border-dodo-gray-mid/60"}
                  `}
                >
                  <Zap
                    size={16}
                    className={isSelected ? "text-dodo-orange" : "text-dodo-muted"}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-body font-semibold text-dodo-white text-sm">
                      {product.name}
                    </span>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded border ${badgeColor(product.billingType)}`}
                    >
                      {product.billingType === "subscription"
                        ? product.interval
                        : product.billingType}
                    </span>
                  </div>
                  <p className="text-xs text-dodo-muted">
                    {billingBadge(product.billingType, product.interval)}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <p className="font-display font-bold text-xl text-dodo-white">
                    ${product.price}
                  </p>
                  <p className="text-xs text-dodo-muted font-mono">{product.currency}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add product ghost */}
      <button className="w-full rounded-xl border border-dashed border-dodo-gray-light/40 p-4 flex items-center justify-center gap-2 text-dodo-muted hover:text-dodo-white hover:border-dodo-gray-light transition-all mb-8 group">
        <Plus size={16} className="group-hover:rotate-90 transition-transform" />
        <span className="text-sm font-body">Add another product</span>
      </button>

      {/* Summary card */}
      {selectedProduct && (
        <div className="rounded-xl border border-dodo-gray-mid/60 bg-dodo-gray/20 p-4 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <RefreshCw size={13} className="text-dodo-muted" />
            <span className="text-xs font-mono text-dodo-muted uppercase tracking-wider">
              Going live with
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-body font-semibold text-dodo-white text-sm">
                {selectedProduct.name}
              </p>
              <p className="text-xs text-dodo-muted mt-0.5">
                {billingBadge(selectedProduct.billingType, selectedProduct.interval)}
              </p>
            </div>
            <p className="font-display font-bold text-2xl text-dodo-orange">
              ${selectedProduct.price}
              {selectedProduct.billingType === "subscription" && (
                <span className="text-sm font-body text-dodo-muted">
                  /{selectedProduct.interval === "yearly" ? "yr" : "mo"}
                </span>
              )}
            </p>
          </div>
        </div>
      )}

      {/* CTA */}
      <button
        onClick={() => router.push("/wizard/step-2")}
        disabled={!selectedProduct}
        className="w-full bg-dodo-orange hover:bg-dodo-orange-light disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 text-dodo-black font-body font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm"
      >
        Looks good, continue
        <Check size={16} strokeWidth={2.5} />
      </button>

      <p className="text-center text-xs text-dodo-muted mt-3">
        Products can be edited anytime without going through this wizard again
      </p>
    </WizardShell>
  );
}
