# AlfaPet Liner Calculator

A clean React, TypeScript, Tailwind CSS, and Vite rebuild of the AlfaPet cat
pan liner calculator.

## Run locally

```bash
npm install
npm run dev
```

Use `npm run build` for a production build and `npm run lint` to lint the
project.

## Source structure

```text
src/
├── components/
│   ├── calculator/
│   │   ├── CalculatorResult.tsx
│   │   ├── LinerCalculator.tsx
│   │   ├── MeasurementForm.tsx
│   │   └── MeasurementGuide.tsx
│   ├── product/
│   │   └── ProductCard.tsx
│   └── ui/
│       └── ArrowUpRightIcon.tsx
├── data/
│   ├── measurementFields.ts
│   └── products.ts
├── lib/
│   └── catPanCalculator.ts
├── pages/
│   └── HomePage.tsx
├── sections/
│   ├── HeroSection.tsx
│   ├── ProductsSection.tsx
│   ├── SiteFooter.tsx
│   └── SiteHeader.tsx
├── styles/
│   └── index.css
├── types/
│   └── product.ts
├── App.tsx
└── main.tsx
```

`src/App.tsx` only mounts `HomePage`. The calculator behavior converted from
the original JavaScript lives separately in `src/lib/catPanCalculator.ts`.

## Calculation

```text
required length = box length + front wall + back wall
required width  = box width + left wall + right wall
```

The original product thresholds and retailer links are preserved.
