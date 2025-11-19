This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


```
indiangrillwrap
├─ app
│  ├─ (home)
│  │  ├─ page.tsx
│  │  └─ sections
│  │     ├─ Catering.tsx
│  │     ├─ Featured.tsx
│  │     ├─ HeroSwiper.tsx
│  │     ├─ OrderFrom.tsx
│  │     ├─ Savor.tsx
│  │     ├─ Taste.tsx
│  │     ├─ Testimonials.tsx
│  │     └─ Welcome.tsx
│  ├─ api
│  │  └─ ai
│  │     └─ route.ts
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ menu
│     └─ [slug]
│        └─ page.tsx
├─ components
│  ├─ product
│  │  └─ ProductCard.tsx
│  └─ ui
│     ├─ Button.tsx
│     ├─ ChatWidget.tsx
│     ├─ MenuDrawer.tsx
│     └─ Navbar.tsx
├─ eslint.config.mjs
├─ lib
│  ├─ ai
│  │  ├─ constants.ts
│  │  ├─ gemini.ts
│  │  └─ prompt.ts
│  ├─ menuCategories.ts
│  └─ utils.ts
├─ next.config.ts
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.mjs
├─ public
│  ├─ burger.jpg
│  ├─ featured
│  │  ├─ aloogobee.webp
│  │  ├─ bendimasala.webp
│  │  ├─ chickencurry.webp
│  │  ├─ chickenfingers.webp
│  │  ├─ chickentikka.webp
│  │  ├─ chickentikkamasala.webp
│  │  ├─ cucumbersalad.webp
│  │  ├─ garlicnaan.webp
│  │  ├─ goatbiryani.webp
│  │  ├─ goatcurry.webp
│  │  ├─ kheerrice.webp
│  │  ├─ lambshishkabob.webp
│  │  ├─ mangolassi.webp
│  │  ├─ mixedpakura.webp
│  │  ├─ saagpaneer.webp
│  │  ├─ tandoorichicken.webp
│  │  ├─ tarkadaal.webp
│  │  └─ veggiesamosa.webp
│  ├─ fire.gif
│  ├─ home
│  │  ├─ hero
│  │  │  ├─ hero1.webp
│  │  │  ├─ hero2.webp
│  │  │  └─ hero3.webp
│  │  ├─ orderFrom.webp
│  │  ├─ testimonial1.jpg
│  │  ├─ testimonial2.jpg
│  │  └─ testimonial3.jpg
│  ├─ logo.png
│  ├─ logo.webp
│  ├─ menu
│  │  ├─ beef.webp
│  │  ├─ beverages.webp
│  │  ├─ bread.webp
│  │  ├─ chicken.webp
│  │  ├─ dessert.webp
│  │  ├─ food.webp
│  │  ├─ goat.webp
│  │  ├─ lamp.webp
│  │  ├─ nuggets.webp
│  │  ├─ platter.webp
│  │  ├─ rice.webp
│  │  ├─ salad.webp
│  │  ├─ sauces.webp
│  │  ├─ seafood.webp
│  │  ├─ soup.webp
│  │  ├─ tandoori.webp
│  │  ├─ tender.webp
│  │  ├─ vegetable.webp
│  │  ├─ vegetarians.webp
│  │  ├─ wings.webp
│  │  └─ wraps.webp
│  └─ shrimp.jpg
├─ README.md
└─ tsconfig.json

```