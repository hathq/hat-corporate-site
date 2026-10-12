# Using @corporate/site

Present approved information about HAT Inc. and its services.

## Before you start

Customer records, internal business material and credentials require separate disclosure review. The localized-site module is pinned to its official public registry release 0.1.4; no local archive is required. No deployment is performed by these instructions.

## First steps

Install the pinned official public-registry dependencies; no local archive is required.

Run from the repository root:

```sh
pnpm install --frozen-lockfile
pnpm validate:content
pnpm typecheck
pnpm test
pnpm build
```

## How to assess the result

- Maintain reviewed overview and getting-started content.
- Validate Japanese/English content and preview the configured site.

A passing source-level check establishes only what that check observes. Keep missing configuration, unavailable services and unverified deployment paths visible.

## Continue reading

[Repository overview](../README.md)

Owner CI uses only `site.config.example.json` in a temporary checkout, runs dependency regressions, validates content and verifies types/build. It never reads ignored registrations or deploys a site. Final content, host binding and retained-source cleanup remain separate owner decisions.
