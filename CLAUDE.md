# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Build: `pnpm run build` or `node ace build`
- Dev server: `pnpm run dev` or `node ace serve --hmr`
- Lint: `pnpm run lint`
- Format: `pnpm run format`
- Typecheck: `pnpm run typecheck`
- Test: `pnpm run test` or `node ace test`
- Run single test: `node ace test tests/path/to/test.ts -f "test name"`

## Code Style

- Framework: AdonisJS
- Imports: Use the `#` alias pattern defined in package.json (e.g. `#models/user`)
- Formatting: Follows @adonisjs/prettier-config
- Linting: Follows @adonisjs/eslint-config
- TypeScript: Use proper type annotations, avoid `any`
- Naming: camelCase for variables/functions, PascalCase for classes/components
- Error handling: Use AdonisJS exception handling patterns
- File structure: Follow the AdonisJS convention for controllers, models, and middleware
