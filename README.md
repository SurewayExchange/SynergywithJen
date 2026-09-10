# Senergy with Jen

Vitamin supplement storefront for sales representative **Jennifer Collins**. Built on [Fakelit](https://www.fakelit.com) — the first website, app, and game development platform all in one. Apps built on Fakelit can be published to the Google Play Store and the Apple App Store.

## Stack

- Next.js App Router
- Shopify Storefront API when `SHOPIFY_STORE_DOMAIN` and `SHOPIFY_STOREFRONT_ACCESS_TOKEN` are set
- Jennifer’s curated catalog and consult checkout when Shopify is not connected

## Local

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Shopify

Connect the Shopify integration on the Fakelit Vercel project, then `vercel env pull .env.local --yes`.
