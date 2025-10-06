# Project Standards by Leccon1

My personal set of configurations and approaches to frontend development.
This repository allows me to start new projects quickly, maintain a consistent style, and avoid repeating setup steps.

---

## What's inside?

* **SCSS** — complete structure with variables, mixins, functions, helpers, and BEM-based organization.
* **JavaScript** — base file with ready-to-use structure for scripts.
* **Project Structure** — organized by purpose: base styles, blocks, components, pages, and helpers.
* **Vite Configuration** — optimized setup for my workflow (paths, aliases, build optimization).
* **Stylelint Configuration** — automatic code-style checking for SCSS with custom rules.
* **Git Integration** — project ready for version control, with `.gitignore` tuned for web projects.

---

## ⚙️ Why this exists

* Fast setup for new projects
* Unified and consistent code style
* Better scalability and maintenance
* Simplifies collaboration and onboarding
* Reusability of patterns and best practices

---

## SCSS Structure

```
sass/
    base/
        _base.scss
        _fonts.scss
        _normalized.scss
        _utilities.scss
    blocks/
    components/
    pages/
    helpers/
        _functions.scss
        _index.scss
        _media.scss
        _mixins.scss
    _variables.scss
    main.scss
```

Each file has a clear purpose and follows naming conventions based on the BEM methodology.
Components and blocks are separated for better modularity and maintainability.

---

## Linting and Code Quality

The project uses **Stylelint** with custom rules to maintain consistent formatting and catch common mistakes early.
For flexibility, certain rules (like `block-no-empty`) are disabled in specific folders where placeholder files are needed.

---

## Getting Started

1. Clone or copy the repository.
2. Run `npm install` to install dependencies.
3. Use `npm run dev` to start development with Vite.
4. Adjust variables, colors, and mixins to match your new project.

---

## Notes

This setup reflects my personal workflow.
You can freely modify configs and structure to match your own standards.
If you want to create your own reusable frontend setup — take this as a base and evolve it further.

---

made by [Leccon1](https://github.com/Leccon1)
