# gemini.md
# TaxMile.in – Devang B. Shah & Co
## Professional Tax Consultancy Website (Frontend Only)

---

## 1. Brand & Business Overview

**Firm Name:** Devang B. Shah & Co  
**Brand Name:** TaxMile.in  
**Nature of Business:** Professional Tax & Financial Consultancy  
**Target Audience:** Individuals, Professionals, MSMEs, Startups, NRIs, Corporates  
**Geography:** India  

This website represents a **trusted, professional tax consultancy firm**.  
The tone must be **corporate, clean, ethical, and trustworthy**.

---

## 2. Website Type & Scope

- Frontend-only website
- No backend
- No database
- No authentication
- No form submission logic
- Static deployable build
- SPA-like behavior (single page, no reloads)
- Content changes without server navigation
- No scrolling website (each section must fit within viewport height)

---

## 3. UX & Navigation Rules

- Fixed header with navigation buttons
- Clicking navigation buttons switches content instantly
- No page reload
- No vertical scrolling
- Smooth and subtle transitions between sections
- Active navigation state must be visible
- Footer remains minimal and professional

---

## 4. Design System

### Visual Style
- Theme: Minimalist, modern, professional
- Primary Colors:
  - White (background)
  - Blue (headings, accents, buttons)
- No gradients
- No flashy visuals
- Plenty of whitespace
- Corporate typography

### Typography
- Sans-serif font family
- Clear hierarchy (H1, H2, H3)
- Easy readability
- Professional tone

---

## 5. Mandatory Tech Stack & Deployment Compatibility

### Build-Time Framework (Static Output Only)
- Framework: React with Vite (Preferred)
- Language: TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion (subtle only)
- Icons: Lucide Icons or Heroicons

### Deployment Target
- Hosting Platform: GitHub Pages
- Output must be 100% static:
  - HTML
  - CSS
  - JavaScript
- No server-side rendering
- No runtime Node.js dependencies
- No API routes
- No backend code

### Routing Rules
- No browser-based routing (React Router not required)
- Navigation must be state-based
- Optional hash navigation allowed (`#income-tax`, `#gst`)
- Must work correctly on GitHub Pages without redirects

### Build Requirement
- The project MUST generate a static `/dist` folder
- `/dist` must be deployable directly to GitHub Pages

---

## 6. SEO & Performance Requirements

- SEO-ready semantic HTML
- Proper heading structure
- Meta tags (title, description)
- Open Graph tags
- High Lighthouse score (>90)
- Optimized bundle size
- Accessible markup (ARIA where needed)

---

## 7. Website Structure

### Header (Fixed)
- Logo/Text Logo: **TaxMile.in**
- Subtitle: *Devang B. Shah & Co*
- Navigation:
  - Home
  - Income Tax
  - GST
  - TDS & TCS
  - Registrations
  - CMA & Net Worth
  - Investment
  - EPF
  - Accounting
  - Contact

---

## 8. Page Content (SEO Ready)

### Home

**Headline:**  
Your Trusted Partner for Tax, Compliance & Financial Growth

**Description:**  
Devang B. Shah & Co (TaxMile.in) is a professional tax consultancy firm providing reliable, compliant, and practical solutions in Income Tax, GST, TDS, Accounting, Investments, and Business Registrations.

**Highlights:**
- Income Tax & GST Experts  
- Compliance Made Simple  
- Trusted Professional Advisory  
- Client-Centric Approach  

---

### Income Tax Services

We provide comprehensive Income Tax services for individuals and businesses across India.

- Filing of Income Tax Returns for:
  - Salaried Individuals
  - Traders
  - Service Providers
  - Professionals
  - MSMEs
  - Manufacturers
  - Investors
  - NRIs
- ITR-U (Updated Returns) for last 5 previous years
- Rectification of Return u/s 154
- Defective / Revised / Belated Return filing
- Assessment Proceedings u/s 143(3)
  - Drafting replies to notices
  - Reconciliation statements
  - Relevant case laws
- Immunity Proceedings u/s 270AA(9)
- Tax Planning & Management

---

### GST Services

- GST Registration (Regular, Composition, Rule 14A)
- GSTR-1 & GSTR-3B
- GSTR 2A & 2B Reconciliation
- QRMP Scheme
- CMP-08
- GSTR-4 Annual Return
- GSTR-9 & 9C Annual Returns
- Reply to Show Cause Notices (SCN)
- GST Cancellation & Revocation
- LUT for Export
- Refund Applications:
  - Inverted Duty Structure
  - Export Refund
  - Electronic Cash Ledger Refund

---

### TDS & TCS Services

- 24Q – Salary TDS
- 26Q – Non-Salary TDS
- 27Q – TDS on payments to NRI
- 27EQ – TCS Return
- 26QB – TDS on sale of property above ₹50 Lakhs
- TAN & PAN Services

---

### Registrations & Incorporation

- HUF Incorporation
- Partnership Firm Incorporation
- Private Limited & LLP Incorporation
- Import Export Code (IEC)
- MSME Registration
- AOP Deed
- Turnover Certificate

---

### CMA Data & Net Worth Certificate

**CMA Data:**  
Used by banks for Cash Credit (CC), Overdraft (OD), and MSME loans. Also known as Projection Report.

**Net Worth Certificate:**  
Used primarily for Visa applications, detailing assets and liabilities to reflect net worth.

---

### Investment Services

- Mutual Fund Investment (Lumpsum / SIP)
- SWP, STP
- Scheme selection using Alpha, Beta, SD, Sharpe Ratio
- Tax Planning & Tax Harvesting
- Loss Harvesting
- Portfolio Rebalancing
- Portfolio Review
- De-Mat Account (NJ E-Wealth Account)

---

### EPF Services (Employees Only)

- EPF Advance Withdrawal
- EPF Final Settlement
- Tax Planning & Form 15G / 15H
- Nomination
- KYC
- Joint Declaration
- Pension Payment Order (PPO)

---

### Accounting Services

- Accounting & Bookkeeping Services
- Compliance-focused financial accounting

---

### Contact

**Firm:** Devang B. Shah & Co  
**Brand:** TaxMile.in  

- Phone: Placeholder
- Email: Placeholder
- Address: Placeholder

---

## 9. Iterative Development Contract

The application MUST be built in iterations:

### Iteration 1 – Foundation
- Project setup
- Folder structure
- Tailwind config
- Base layout
- Navigation skeleton

### Iteration 2 – Navigation & UX
- SPA behavior
- Section switching
- Active states
- No-scroll enforcement

### Iteration 3 – Content
- Implement all content exactly as defined
- Semantic HTML

### Iteration 4 – Visual Polish
- Typography
- Spacing
- Hover states
- Micro-interactions

### Iteration 5 – SEO & Performance
- Meta tags
- Accessibility
- Performance optimization

Each iteration must be completed, explained, and approved before moving to the next.

---

## 10. Hard Constraints

- No scrolling
- No backend
- No forms submission
- No stock images
- No dark mode
- No unnecessary animations
- Do not over-engineer

---

## 11. Final Deliverables

- Production-ready frontend code
- Clean folder structure
- Deployment instructions (Netlify / Vercel)
- Optional future enhancement suggestions

---

## 12. GitHub Pages Compatibility Rules

- Application must work when served from a subpath
- Use relative paths for assets
- Base path must be configurable (`base` in Vite)
- No absolute routing dependencies
- Refreshing the page must not break navigation

---

**This file is the single source of truth.  
Do not deviate unless explicitly instructed.**