# Zenzo Landing Page

This repository contains the public static website for **Zenzo Beta**, a product workspace concept for coordinating AI agent work in a shared, reviewable context.

## Live site

The published website is available at [samkomedved319-dev.github.io/zenzo-landing-page](https://samkomedved319-dev.github.io/zenzo-landing-page/).

## Public pages

| Page | Purpose |
| --- | --- |
| `index.html` | Product landing page and early-access entry point. |
| `about.html` | Product context, early-access overview, and human-review explanation. |
| `docs.html` | Public product guide, workflow explanation, and review model. |
| `trust.html` | Official-destination guide and anti-impersonation signals. |
| `privacy.html` | Draft Privacy Policy for attorney review before production use. |
| `terms.html` | Draft Terms of Use for attorney review before production use. |
| `owner-review.html` | Non-authenticating public human-review notice. |
| `request.html` | Transparent early-access request notice. |

## Trust and account safety

Public Zenzo pages are informational and **do not ask for GitHub, Google, workplace, or recovery-code passwords**. The early-access action opens a clearly labelled Google-hosted request form. The public source and official Pages URL are linked from the Trust Center so visitors can independently verify destinations.

The former public review-page behavior was replaced with a non-authenticating notice. Internal review access belongs only in approved internal workflows, not through a public URL.

## Local preview

Serve the repository directory with any static-file server. Use a static server rather than an SPA fallback so each standalone `.html` page can be tested directly.

```bash
npx http-server . -p 4174 -c-1
```

Open `http://localhost:4174/index.html`, `docs.html`, or another page directly.
