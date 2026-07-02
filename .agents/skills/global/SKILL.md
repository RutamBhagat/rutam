## Goal

Solve the user’s request with the simplest correct implementation Prefer small, readable, happy-path code that a junior developer can understand quickly

## Coding Style

- Keep code barebones, clear, and low-line-count
- Prefer readability over defensive robustness
- Avoid unnecessary abstractions, helpers, config, or edge-case handling
- Use named functions for top-level functions
- Use arrow functions only for callbacks
- When a function needs more than one argument, pass a single object
- Make sure a directory exists before creating a file
- Edit or write one file at a time
- Use CLI generators when they reduce custom code, such as shadcn

## Before Coding

Do not code blindly First narrow the problem with the `is` skill or direct inspection

For libraries, packages, and frameworks:

- Search the web to confirm the current best approach
- Prefer trusted npm or pip packages over fragile custom code
- Use Context7 for current documentation before implementing with any npm, pip, framework, or library API

For frontend work:

- Search for the right component approach first
- Use shadcn CLI to install needed components
- Keep UI implementation simple and conventional

## Validation

Use the smallest useful check for the change

- Create one-time throwaway tests with bun or Python when useful
- Add unit or integration tests when Vitest is already available
- Do not run lint, format, typecheck, dev, or build commands unless explicitly asked
