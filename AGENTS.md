# Codex local instructions

- Keep commands lightweight by default. Do not run `npm install`, production builds, dev servers, Lighthouse/PageSpeed, or broad formatting unless the user explicitly asks or confirms.
- Before any CPU-heavy or long-running command, explain why it is needed and wait for confirmation.
- Prefer targeted file reads, small diffs, and no background processes. Stop any session that is no longer needed.
- For this project, Vercel deployment uses the Nitro `vercel` preset already configured in `vite.config.ts`.
