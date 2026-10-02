# HAT Corporate site content

## Site content

- Audience: Japan. Japanese is served at `/`; English is served at `/en/`.
- Publication boundary: approved corporate and service information only; no customer data, internal records, secrets, or external actions.

## Local verification

```bash
pnpm install --offline --frozen-lockfile
pnpm validate:content
pnpm typecheck
pnpm test
pnpm build
```

Run `pnpm dev` only as a foreground loopback preview and stop it with Ctrl+C.

Store local registration values in the Git-excluded `registration/site.config.json`. In a new environment, copy `site.config.example.json` and reference it from the root `site.config.json`.
