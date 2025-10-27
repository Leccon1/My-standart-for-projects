# Project Standards by Leccon1

My personal set of configurations and approaches to frontend development.
This repository allows me to start new projects quickly, maintain a consistent style, and avoid repeating setup steps.
## Getting Started

1. Clone or copy the repository. (In your project: `git clone https://github.com/Leccon1/My-standart-for-projects.git`)
3. Run `npm install` to install dependencies.
4. Use `npm run dev` to start development with Vite.
5. Adjust variables, colors, and mixins to match your new project.

---

## What's inside?

* **SCSS** — complete structure with variables, mixins, functions, helpers, and BEM-based organization.
* **JavaScript** — base file with ready-to-use structure for scripts.
* **Project Structure** — organized by purpose: base styles, blocks, components, pages, and helpers.
* **Vite Configuration** — optimized setup for my workflow (paths, aliases, build optimization).
* **Stylelint Configuration** — automatic code-style checking for SCSS with custom rules.
* **Eslint Configuration** — Checking your JS code with ready-made custom rules.
* **Prettier Configuration** — Automatically formatting your code with strict opinionated rules.
* **Git Integration** — project ready for version control, with `.gitignore` tuned for web projects.

---

## Why this exists

* Fast setup for new projects
* Unified and consistent code style
* Better scalability and maintenance
* Simplifies collaboration and onboarding
* Reusability of patterns and best practices

---

## SRC Structure

```
├── src
│   ├── assets
│   │   ├── favicons
│   │   │   └── .gitkeep
│   │   ├── fonts
│   │   │   └── .gitkeep
│   │   ├── icons
│   │   │   └── .gitkeep
│   │   └── images
│   │       └── .gitkeep
│   ├── js
│   │   └── main.js
│   └── sass
│       ├── base
│       │   ├── _base.scss
│       │   ├── _fonts.scss
│       │   ├── _normalized.scss
│       │   └── _utilites.scss
│       ├── blocks
│       │   └── .gitkeep
│       ├── components
│       │   └── .gitkeep
│       ├── helpers
│       │   ├── _functions.scss
│       │   ├── _index.scss
│       │   ├── _media.scss
│       │   └── _mixins.scss
│       ├── pages
│       │   └── .gitkeep
│       ├── _variables.scss
│       └── main.scss
└── .gitignore
```

Each file has a clear purpose and follows naming conventions based on the BEM methodology.
Components and blocks are separated for better modularity and maintainability.

---

## Linting and Code Quality

The project uses **Stylelint** with custom rules to maintain consistent formatting and catch common mistakes early.
For flexibility, certain rules (like `block-no-empty`) are disabled in specific folders where placeholder files are needed.

The project also uses ESLint for static analysis of JavaScript code, ensuring consistent style and preventing potential errors.
Modern rules have been configured to comply with current ECMAScript standards, with an emphasis on code cleanliness and best development practices.

---

## Notes

This setup reflects my personal workflow.
You can freely modify configs and structure to match your own standards.
If you want to create your own reusable frontend setup — take this as a base and evolve it further.

---

made by [Leccon1](https://github.com/Leccon1)

