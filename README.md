# Warik Labs

Premium, accessible company website for Warik Labs, built with Next.js, TypeScript, Tailwind CSS, and Lucide icons. It is a corporate landing page only; it does not include a backend, database, authentication, or product integrations.

## Local development

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Before a production release, run:

```bash
npm run lint
npm run typecheck
npm run build
```

## Configuration

Copy `.env.example` to `.env.local`. These values are optional:

- `NEXT_PUBLIC_SITE_URL`: the verified deployed URL, including `https://`. This enables canonical, Open Graph URL, and sitemap entries.
- `NEXT_PUBLIC_CONTACT_EMAIL`: a real company contact email. Until it is supplied, the site deliberately renders no broken email link and early-access registration remains disabled.

The early-access form is intentionally integration-free: after a contact email is configured, it opens the visitor’s mail client with their completed message for review. The site itself does not store submissions. The component can later be connected to a server action or API route without changing its UI.

## Deploy with GitHub and Vercel

1. Create a new GitHub repository under the founder’s own GitHub account.
2. From this folder, set that repository as the remote and push it:
   ```bash
   git add .
   git commit -m "Build Warik Labs website"
   git branch -M main
   git remote add origin https://github.com/a1k7/Suno.git
   git push -u origin main
   ```
3. In Vercel, choose **Add New → Project**, import the GitHub repository, and select the Next.js framework preset (it should be detected).
4. Add the environment variables above in Vercel only after the production URL and contact email are available.
5. Deploy, then verify the production URL, internal navigation, form fallback, metadata, and `/privacy` page.
6. Add a custom domain later in Vercel’s domain settings. Update `NEXT_PUBLIC_SITE_URL` to that verified URL and redeploy.
7. Future commits pushed to the connected GitHub branch trigger Vercel deployments automatically.

## Before publishing

- Replace the contact-email placeholder through `NEXT_PUBLIC_CONTACT_EMAIL`.
- Set the verified production URL.
- Review and update the starter privacy notice for the actual hosting, analytics, email, form, retention, and data-processing setup. It is not legal advice.
- Confirm all product language still accurately represents the stage of development.
# Suno
