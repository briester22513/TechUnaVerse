export type Product = {
  id: string;
  name: string;
  description: string;
  amount: number;
  file: string;
  mode: "payment" | "subscription";
  interval?: "month" | "year";
};

export const PRODUCTS: Record<string, Product> = {
  "starter-kit": {
    id: "starter-kit",
    name: "Business Launch Starter Kit",
    description: "Step-by-step guide from LLC setup to your first paying client.",
    amount: 7900,
    file: "starter-kit.pdf",
    mode: "payment",
  },
  "prompt-library": {
    id: "prompt-library",
    name: "AI Prompt Library",
    description: "150+ battle-tested prompts for sales, social, email, and more.",
    amount: 4900,
    file: "prompt-library.pdf",
    mode: "payment",
  },
  "toolkit-monthly": {
    id: "toolkit-monthly",
    name: "Monthly AI Toolkit",
    description: "Monthly PDF guide: best AI tools, prompts, and automations.",
    amount: 2900,
    file: "toolkit-current.pdf",
    mode: "subscription",
    interval: "month",
  },
  "toolkit-annual": {
    id: "toolkit-annual",
    name: "Annual AI Toolkit",
    description: "Full year of monthly guides plus bonus templates.",
    amount: 24900,
    file: "toolkit-current.pdf",
    mode: "subscription",
    interval: "year",
  },
};
