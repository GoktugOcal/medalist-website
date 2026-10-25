# MEDALIST LAB

Dark, neon one-pager for a Brussels bike repair lab, plus a UI-only booking page.

```bash
npm install
npm run dev
```

- Home: `/`
- Blog: `/blog` and `/blog/:slug`
- Booking: `/booking` — Cal.com embed. Set `calLink` in `src/data/shop.ts` (or `VITE_CAL_LINK` in `.env`) to your event path, e.g. `username/bike-service`.

## GitHub Pages

Pushes to `main` publish the site at `https://<user>.github.io/medalist-website/`.

## Host on AWS Lambda

The site is a static SPA served by one Lambda Function URL. No S3 or CloudFront. `/api/*` is reserved for a later Cal.com + Supabase booking backend.

You need the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html), plus AWS credentials.

```bash
npm run deploy
```

That builds the site, copies it into `.lambda/`, and runs `sam deploy --guided`. After the first deploy, `sam deploy` is enough.

The stack output `SiteUrl` is the public website (`https://….lambda-url.….on.aws/`). `/` and `/booking` both work because unknown paths without a file extension fall back to `index.html`.
