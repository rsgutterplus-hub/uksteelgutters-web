# UKSteelGutters — Project Notes

This file is maintained by Claude and updated as development progresses. It serves as the primary context file for AI-assisted development sessions. Always read this first at the start of a new session.

---

## Project Overview

**UKSteelGutters** is an e-commerce website selling Bilka steel guttering systems to the UK market. It is operated by **Aegis Roofing Products Ltd** (Company No. 15171019), a company owned by Richard.

- **Live site:** https://uksteelgutters-web.vercel.app
- **GitHub repo (correct one):** rsgutterplus-hub/uksteelgutters-web
- **Wrong repo (never push here):** rsgutterplus-hub/gutterplus-website
- **Stack:** Next.js 15, TypeScript, Tailwind CSS
- **Vercel project ID:** prj_0K5k8qKb8vuV3FaC6d2naYHyhpzn
- **Vercel team ID:** team_LSY4xSgumkGEazVae0CTmEmB

---

## The Business

- **Trading name:** UKSteelGutters
- **Legal entity:** Aegis Roofing Products Ltd, Company No. 15171019, Registered in England & Wales
- **Richard also runs:** Gutter Plus (gutterplus.co.uk) — a separate guttering services company in Surrey
- **Supplier:** Bilka, Brașov, Romania — Richard is an official UK Bilka stockist
- **Richard visited Bilka factory in Brașov in April 2026**

---

## Environment Variables (set in Vercel)

| Variable | Status | Notes |
|----------|--------|-------|
| `NEXT_PUBLIC_BASE_URL` | ✅ Set | `https://uksteelgutters-web.vercel.app` |
| `ADMIN_PASSWORD` | ✅ Set | For /admin CRM login |
| `UPSTASH_REDIS_REST_URL` | ✅ Set | Upstash Redis for CRM data |
| `UPSTASH_REDIS_REST_TOKEN` | ✅ Set | Upstash Redis auth |
| `ANTHROPIC_API_KEY` | ✅ Set | For AI chatbot |
| `STRIPE_SECRET_KEY` | ⏳ Pending | Needed to activate payments |
| `RESEND_API_KEY` | ⏳ Pending | Needed to activate emails |
| `NEXT_PUBLIC_CONTACT_PHONE` | ⏳ Pending | Activates Call/WhatsApp buttons in chatbot |

---

## Product Catalogue

**Two systems:** 125/90mm and 150/100mm  
**Three finishes:** Glossy (12 RAL colours), Matt (7 RAL colours), Magnelis (natural zinc)

**Key pricing (ex-VAT):**
- Gutter 125mm: £50.00/4m
- Gutter 150mm: £63.20/4m
- Downpipe 90mm: £32.40/3m
- Downpipe 100mm: £39.60/3m
- Fittings: £2.80–£17.50 each

**Steel specification:**
- 0.6mm SSAB Swedish steel
- Z275 hot-dip galvanisation (275 g/m² both sides)
- Prelaq Nova polyester coating (2×35 microns) for Glossy/Matt
- Magnelis ZM310 (Zn+Al+Mg alloy) for Magnelis finish — self-healing at cut edges

**Glossy RAL colours:** 7016 Anthracite, 9005 Jet Black, 9010 Pure White, 8017 Chocolate Brown, 6020 Chrome Green, 3009 Oxide Red, 7024 Dark Grey, 9006 Light Silver, 6005 Moss Green, 3005 Wine Red, 5010 Royal Blue, 7011 Iron Grey

**Matt colours:** 7016, 9005, 9010, 8017, 7024, 3009, 6020 (7 colours)

---

## Pages Built

| Page | Route | Status | Notes |
|------|-------|--------|-------|
| Home | `/` | ✅ | Hero, Why Bilka, SSAB steel section, coating layer SVG diagram, technical spec table, Magnelis section, systems, finishes, CTA |
| Shop 125/90 | `/shop/half-round-125` | ✅ | Product grid |
| Shop 150/100 | `/shop/half-round-150` | ✅ | Product grid |
| Product detail 125 | `/shop/half-round-125/[slug]` | ✅ | Photo/drawing toggle, colour selector, add to cart/quote |
| Product detail 150 | `/shop/half-round-150/[slug]` | ✅ | Same as above |
| Cart | `/cart` | ✅ | Stripe checkout |
| Quote | `/quote` | ✅ | Quote basket + email form |
| Trade Account | `/trade-account` | ✅ | Registration form, emails via Resend |
| Installation Guide | `/installation-guide` | ✅ | Two Bilka YouTube embeds + step-by-step |
| Delivery & Returns | `/delivery` | ✅ | Charges table, delivery times, returns policy |
| FAQ | `/faq` | ✅ | 16 Q&As with FAQPage schema, covers SSAB/Z275/Magnelis |
| Admin Login | `/admin/login` | ✅ | Password protected |
| Admin CRM | `/admin` | ✅ | Trade accounts + orders, Upstash Redis |
| Checkout Success | `/checkout/success` | ✅ | |

---

## Key Components

| File | Purpose |
|------|---------|
| `src/components/Header.tsx` | Nav: Home, Shop dropdown, Installation, Trade, Delivery, Contact. Cart (gold badge) + Quote (blue badge) icons. |
| `src/components/Footer.tsx` | Links, finishes, legal footer with Aegis Roofing Products Ltd / Co. No. 15171019 |
| `src/components/ChatBot.tsx` | Gold pill "Chat with us" button with pulse animation. Navy circle X when open. Chatbot panel with typing indicator, Call/WhatsApp buttons. |
| `src/context/CartContext.tsx` | Cart state, localStorage key: `uksg_cart` |
| `src/context/QuoteContext.tsx` | Quote state, localStorage key: `uksg_quote` |
| `src/lib/upstash.ts` | kvGet/kvSet helpers for Upstash Redis REST API |
| `src/data/products.ts` | All product data for both systems |
| `src/app/layout.tsx` | Root layout: CartProvider, QuoteProvider, Header, Footer, ChatBot, JSON-LD Organization + WebSite schema, global metadata |
| `src/app/sitemap.ts` | Auto-generated sitemap.xml |
| `src/app/robots.ts` | Allows all except /admin and /api/ |
| `public/llms.txt` | AI crawler guide with full product/pricing/spec data |

---

## API Routes

| Route | Purpose | Notes |
|-------|---------|-------|
| `/api/checkout` | Stripe payment session | Uses Stripe REST API directly (no npm). Needs `STRIPE_SECRET_KEY`. |
| `/api/quote` | Send quote request email | Uses Resend REST API. Needs `RESEND_API_KEY`. |
| `/api/trade-register` | Send trade account application | Uses Resend REST API. |
| `/api/chat` | AI chatbot backend | Uses claude-haiku-4-5-20251001 via Anthropic API. |
| `/api/admin/auth` | Admin login/logout | Sets `uksg_admin` cookie. |
| `/api/admin/accounts` | Trade account CRUD | Reads/writes Upstash Redis. |
| `/api/admin/orders` | Order CRUD | Reads/writes Upstash Redis. |

---

## SEO / AEO

- **Sitemap:** `/sitemap.xml` — auto-generated by Next.js
- **Robots:** `/robots.txt` — allows all crawlers except /admin and /api
- **llms.txt:** `/llms.txt` — comprehensive guide for AI systems
- **JSON-LD schemas:** Organization + WebSite on every page (in layout.tsx). FAQPage schema on /faq.
- **Title template:** `%s | UKSteelGutters`
- **metadataBase:** Set to `NEXT_PUBLIC_BASE_URL`
- **Keywords targeted:** steel guttering, Bilka guttering, half round steel gutters, SSAB steel guttering, 125mm steel guttering, 150mm steel guttering, Magnelis guttering, anthracite steel guttering

**Biggest pending SEO action:** Connect custom domain `uksteelgutters.co.uk` to Vercel. Without this, AI search authority is severely limited.

---

## Admin CRM

- URL: `/admin` (password protected)
- Password set via `ADMIN_PASSWORD` env var
- Data stored in Upstash Redis
- Features: Dashboard, Trade Accounts tab (approve/reject/revoke, set discount tier 0/5/10/15%), Orders tab (status tracking)
- Cookie: `uksg_admin`

---

## Pending / To Do

- [ ] **Connect domain `uksteelgutters.co.uk`** — biggest single SEO priority
- [ ] **Add `STRIPE_SECRET_KEY`** to Vercel env vars → activates payments
- [ ] **Add `RESEND_API_KEY`** to Vercel env vars → activates quote/trade emails
- [ ] **Add `NEXT_PUBLIC_CONTACT_PHONE`** when phone number ready → activates Call/WhatsApp in chatbot
- [ ] **Add registered address** to footer (legally required)
- [ ] **Add VAT number** to footer if/when VAT registered
- [ ] **Confirm guide prices** before going live
- [ ] **Cross-reference full Bilka catalogue** after Romania visit — check all products listed
- [ ] **Request Bilka product images/assets** for use on UK stockist site (ask at factory)
- [ ] **Contact phone number** when ready
- [ ] Set standard carriage charge for orders under £600

---

## Design System

- **Primary colour:** Navy (`#1B2A3B` approx) — used for header, CTAs, product cards
- **Accent colour:** Gold (`#C6A037` approx) — used for highlights, chat button, badges
- **Background tint:** Cream — used for alternating sections
- **Font:** System UI via Tailwind defaults
- **Tailwind classes:** `bg-navy`, `bg-navy-dark`, `bg-navy-light`, `bg-gold`, `bg-gold-light`, `bg-cream` (custom colours defined in Tailwind config)

---

## Bilka Technical Reference

**Coating specification (Glossy finish):**
- Surface thickness: 35 µm / 35 µm (ISO 2808)
- Gloss level: 40 GU (EN 13523-2)
- Min. bend radius: 0.5 × t (EN 13523-7)
- Min. formation temp: −15 °C
- Scratch resistance: 35 N (EN 13523-5)
- Max. working temp: +100 °C
- UV category: RUV3 (prEN 10169-2)
- Corrosion resistance: RC5 (prEN 10169-2)
- Zinc coating: 275 g/m² (both sides)

**Coating specification (Matt finish):**
- Surface thickness: 40 µm / 40 µm
- Gloss level: < 5 GU
- Scratch resistance: 30 N
- UV category: RUV4
- All other specs same as Glossy

**Installation specs:**
- Gutter fall: 2–5 mm/linear metre
- Bracket spacing: 60–90 cm
- End brackets: 10 cm from each end
- Gap between sections: 2–3 mm (thermal expansion)
- First downpipe bracket: 150 mm below elbow
- Max downpipe bracket spacing: 2 m
- Cutting: hacksaw or tin snips ONLY — never angle grinder

**Bilka YouTube channel:** https://www.youtube.com/channel/UC9aCyoFesHG1Vl7n2iYfGCg

---

## Development Log

### Session — April 2026

**Built from scratch:**
- Next.js project setup with TypeScript and Tailwind
- Product catalogue (32 products across two systems)
- Product image naming convention: `{product-type}-{ral-code}-{glossy|matt}.jpg` / `{product-type}-magnelis.jpg`
- Technical drawings: `public/technical-drawings/*.pdf`
- Cart system (localStorage, Stripe checkout)
- Quote basket system (localStorage, Resend email)
- Trade account registration (Resend email)
- Admin CRM (Upstash Redis, password auth)
- AI chatbot (claude-haiku-4-5-20251001, Anthropic API)
- Installation guide page (2 Bilka YouTube embeds + step-by-step)
- Delivery & Returns page
- FAQ page (16 Q&As, FAQPage schema)
- SEO/AEO: sitemap, robots.txt, llms.txt, JSON-LD schema, page metadata

**Content added:**
- SSAB Swedish steel explanation
- Z275 hot-dip galvanisation details
- Magnelis ZM310 explanation + comparison table
- Prelaq Nova coating details
- Coating layer SVG cross-section diagram (5 layers, on-brand)
- Bilka technical characteristics table (reproduced from public spec data)
- Aegis Roofing Products Ltd company info in footer

**Chat button redesign:**
- Changed from small circle to wide gold pill with "Chat with us" text + green online dot + gold pulse glow animation
- Collapses to small navy circle with X when chat is open
