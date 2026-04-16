import { Product } from "@/types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod_001",
    name: "Starter Plan",
    price: 29,
    currency: "USD",
    billingType: "subscription",
    interval: "monthly",
  },
  {
    id: "prod_002",
    name: "Pro Plan",
    price: 79,
    currency: "USD",
    billingType: "subscription",
    interval: "monthly",
  },
  {
    id: "prod_003",
    name: "Lifetime Access",
    price: 299,
    currency: "USD",
    billingType: "one_time",
  },
  {
    id: "prod_004",
    name: "API Credits Bundle",
    price: 49,
    currency: "USD",
    billingType: "usage",
  },
];

export const WIZARD_STEPS = [
  { step: 1, label: "Products" },
  { step: 2, label: "Coverage" },
  { step: 3, label: "Test Run" },
  { step: 4, label: "Go Live" },
];

export const MOR_COVERAGES = [
  {
    icon: "🧾",
    title: "Global Tax Compliance",
    description:
      "VAT, GST, and sales tax calculated, collected, and remitted automatically across 50+ countries. You never touch a tax filing.",
  },
  {
    icon: "🛡️",
    title: "Fraud & Chargeback Protection",
    description:
      "Dodo fights chargebacks on your behalf. Our fraud models block bad actors before they reach your checkout.",
  },
  {
    icon: "⚖️",
    title: "Legal Entity as Seller",
    description:
      "Dodo appears as the merchant on customer receipts and bank statements. No foreign entity needed on your side.",
  },
  {
    icon: "💸",
    title: "Refunds & Disputes",
    description:
      "Customer wants a refund? Dodo handles the full resolution flow. You set the policy, we execute it.",
  },
  {
    icon: "🌍",
    title: "Currency & FX",
    description:
      "Accept 135+ currencies. Payouts in your preferred currency at competitive FX rates, settled on schedule.",
  },
  {
    icon: "📋",
    title: "PCI DSS Compliance",
    description:
      "Card data never touches your servers. Dodo is fully PCI DSS Level 1 certified — the highest standard.",
  },
];
