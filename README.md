# Bamba Melon

Storefront for [bambamelon.com](https://bambamelon.com) — handcrafted plush toys.

## Tech stack

- React + Vite + TypeScript
- Tailwind CSS + shadcn/ui components
- Built and edited via [Lovable](https://lovable.dev), synced two-way with this repo on `main`

## Local development

```sh
npm install
npm run dev
```

## Deployment

- **Hosting**: Netlify, auto-deploys on every push to the `prod` branch
- **`main`** is the integration branch — Lovable syncs here, feature work lands here
- **`prod`** is the deploy branch — only receives already-reviewed changes promoted from `main`
- GitHub Releases (tags) are just human-readable labels for what shipped when — they do **not** trigger a deploy; only pushes to `prod` do

## Branching & release policy

All changes go through a pull request — direct pushes to `main`/`prod` are blocked by a repo ruleset.

1. **Feature work**: branch off `main` → open a PR → squash-merge into `main`
2. **Promote to production**: open a PR from `main` into `prod` → squash-merge → Netlify deploys automatically within a couple of minutes
3. **Tag the release**: once live on `prod`, tag that commit with [semver](https://semver.org/):
   ```sh
   gh release create vX.Y.Z --target prod --title "vX.Y.Z" --notes "..."
   ```
   Stay under `v1.0.0` until the site/product is considered stable and complete.

### Rolling back

- **Quick/temporary**: Netlify dashboard → Deploys → pick an earlier deploy → "Publish deploy". Note this gets overwritten the next time anything pushes to `prod`.
- **Permanent**: open a PR that reverts `prod` to the content of an earlier tagged release, merge it, then tag the result as the next version.

## Payments

Checkout is handled via [Stripe Payment Links](https://stripe.com) — no backend or API integration. Each purchasable toy's "Buy Now" button links directly to that product's Stripe payment link. Toys not yet for sale simply have no Buy Now button.
