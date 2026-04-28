# 🫒 Olive — Landing Page

A pixel-inspired recreation of the [Olive App](https://www.oliveapp.com/) landing page, built with **React + TypeScript + Tailwind CSS + Vite**.

> Frontend assessment submission by **T.Yasaswini**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:8080
```

Build for production: `npm run build`

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| **React 18** | UI library |
| **TypeScript** | Type safety |
| **Vite** | Dev server & bundler (fast HMR) |
| **Tailwind CSS** | Utility-first styling |
| **React Router** | Client-side routing |
| **Lucide React** | Icon library |

---

## 📁 Project Structure

```
olive-landing/
├── index.html                       → Loads Google Fonts (Fraunces + Inter)
├── tailwind.config.ts               → Custom brand colors + fonts
├── src/
│   ├── main.tsx                     → React entry point
│   ├── App.tsx                      → Router setup
│   ├── index.css                    → Design tokens (HSL brand colors)
│   ├── pages/
│   │   ├── Index.tsx                → ⭐ Main landing page
│   │   └── NotFound.tsx             → 404 fallback
│   ├── components/
│   │   └── PhoneMockup.tsx          → ⭐ Food scanner phone UI
│   └── assets/
│       ├── olive-logo.png
│       ├── avatars.png
│       └── crackers.png
```

---

## 🎨 Design Decisions

### 1. Design Tokens in `index.css`
Rather than using hardcoded values, I implemented a centralized design system in src/index.css using HSL CSS variables.

Primary: 90 35% 18% (Deep olive green)

Accent: 85 40% 55% (Avocado green)

Logic: Using HSL allows for easy adjustments to saturation and lightness while maintaining brand consistency across the entire UI.
### 2. Typography
- **Fraunces** (serif) → headlines
- **Inter** (sans) → body text

Loaded via Google Fonts in `index.html`, registered in `tailwind.config.ts` as `font-serif` / `font-sans`.

### 3. Phone Mockup — Built in CSS, Not an Image
`PhoneMockup.tsx` renders the entire phone UI (frame, notch, score pill, "Oliver Says" card) using Tailwind classes. This keeps it **crisp at any resolution** and easy to update.

### 4. Semantic Tailwind Classes
Instead of `bg-green-800`, I use `bg-primary` — which reads from `index.css`. This means one variable change re-themes the whole app.

---

## 🧩 Key Components Explained

### `Index.tsx` — The Landing Page
- **Nav bar** — logo + menu links + "Get Olive" CTA
- **Hero section** — family trust badge, headline, subheading, dual CTAs
- **Phone mockup** — imported from `components/PhoneMockup.tsx`

### `PhoneMockup.tsx` — The Food Scanner UI
- Phone frame with notch
- Product image (crackers) with health score "46/100 — Avoid"
- "Oliver Says" feedback card
- Floating decorative cubes (visible on desktop only)

---

## ✅ What This Demonstrates

- ✔️ Translating a visual design into pixel-close frontend
- ✔️ Component-based React architecture
- ✔️ Design-system thinking (tokens, semantic colors)
- ✔️ Responsive layout (mobile → desktop)
- ✔️ Modern tooling (Vite, TS, Tailwind)
- ✔️ Clean, minimal dependencies

---


