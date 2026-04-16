# Dodo Payments - Go-Live Wizard

A prototype built for the Dodo Payments PM Assignment.

## What this is

A **Go-Live Wizard** - a guided 4-step flow that takes a merchant from "live access granted" to "first real transaction" with confidence. Built to solve the 45% drop-off between Live Access → First Transaction in the Dodo merchant funnel.

## Flow

```
Dashboard (entry point)
    ↓  [Go Live banner / CTA]
Step 1 - Product & Pricing confirmation
    ↓
Step 2 - What Dodo Handles (MoR explainer)
    ↓
Step 3 - Pre-Launch Readiness Check
    ↓
Step 4 - Go Live confirmation
    ↓
Success - Live mode activated 🚀
```

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (transitions)
- **Lucide React** (icons)

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/dodo-golive-wizard.git
cd dodo-golive-wizard

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev

# 4. Open in browser
http://localhost:3000
```

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts - it auto-detects Next.js
```

Or connect your GitHub repo at vercel.com/new for automatic deploys on every push.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Dashboard (entry point)
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles + fonts
│   ├── wizard/
│   │   ├── step-1/page.tsx   # Product & Pricing
│   │   ├── step-2/page.tsx   # MoR Coverage
│   │   ├── step-3/page.tsx   # Pre-launch Checks
│   │   └── step-4/page.tsx   # Go Live CTA
│   └── success/
│       └── page.tsx          # Post go-live screen
├── components/
│   ├── ui/
│   │   └── Logo.tsx
│   └── wizard/
│       ├── WizardProgress.tsx
│       └── WizardShell.tsx
├── lib/
│   └── data.ts               # Mock data & constants
└── types/
    └── index.ts              # TypeScript types
```

## Notes

- No backend required - all state is local React state
- No real payments are processed
- All data is mocked
- Focus is on UX flow, clarity, and confidence-building

## Submission

Built by Hemang Mehta for Dodo Payments PM Assignment.
