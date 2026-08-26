# Zenzo Landing Page

This repository contains the public static website for **Zenzo Beta**, a product workspace concept for coordinating AI agent work in a shared, reviewable context.

## Zenzo Cloud handoff

`cloud.html` is the public, static entry point for protected Ox Alpha setup. It explains the **one-million-token daily allowance per registered Zenzo user** and, when opened by Zenzo with a short-lived public state value, forwards the browser to the authenticated Zenzo Cloud desktop-authorization route. The live destination is deliberately configured only through `cloud-config.js`; that file must contain a published HTTPS Cloud URL and must never contain a provider credential, desktop installation token, authorization code, or bot secret. GitHub Pages remains informational and does not proxy model requests or collect Cloud credentials.

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
| `request.html` | Direct early-access request form that submits privately to the Zenzo staff review bot. |
| `cloud.html` | Public Zenzo Cloud setup entry point and Ox Alpha daily-allowance explanation. |

## Trust and account safety

Public Zenzo pages are informational and **do not ask for GitHub, Google, Discord, workplace, or recovery-code passwords**. The early-access action opens an in-site request form that delivers only the applicant’s name and email to the private Zenzo staff review workflow. The public source and official Pages URL are linked from the Trust Center so visitors can independently verify destinations.

The former public review-page behavior was replaced with a non-authenticating notice. Internal review access belongs only in approved internal workflows, not through a public URL.

## Local preview

Serve the repository directory with any static-file server. Use a static server rather than an SPA fallback so each standalone `.html` page can be tested directly.

```bash
npx http-server . -p 4174 -c-1
```

Open `http://localhost:4174/index.html`, `docs.html`, or another page directly.
