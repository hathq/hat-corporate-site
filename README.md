# @corporate/site

Present approved information about HAT Inc. and its services.

## What you can do

- Maintain reviewed overview and getting-started content.
- Validate Japanese/English content and preview the configured site.

## Current scope

Customer records, internal business material and credentials require separate disclosure review. The localized-site module is pinned to its official public registry release 0.1.4; no local archive is required. No deployment is performed by these instructions.

## Getting started

Install the pinned official public-registry dependencies. No private registry or locally supplied TGZ is required.

Use `pnpm@10.29.3` and the Node.js version declared in `engines` in `package.json`. Run from this repository:

```sh
pnpm install --frozen-lockfile
pnpm validate:content
pnpm typecheck
pnpm test
pnpm build
```

## Documentation and source

[Usage guide](docs/getting-started.md)

[Verification cases](test) · [Contributing](CONTRIBUTING.md) · [Security reporting](SECURITY.md) · [License](LICENSE) · [Attribution notices](NOTICE)

Owner CI uses only `site.config.example.json` in a temporary checkout, runs dependency regressions, validates content and verifies types/build. It never reads ignored registrations or deploys a site. Final content, host binding and retained-source cleanup remain separate owner decisions.

[日本語](README.ja.md)
