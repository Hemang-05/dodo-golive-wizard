export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  billingType: "one_time" | "subscription" | "usage";
  interval?: "monthly" | "yearly";
}

export interface WizardState {
  selectedProduct: Product | null;
  morConfirmed: boolean;
  testTransactionDone: boolean;
  webhookVerified: boolean;
  bankAccountAdded: boolean;
}

export type WizardStep = 1 | 2 | 3 | 4;

export interface ChecklistItem {
  id: string;
  label: string;
  done: boolean;
  required: boolean;
}
