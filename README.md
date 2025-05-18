# Astro Website Template with Design System

A modern, customizable website template built with Astro that includes a comprehensive design system for quick customization.

**Note:** I created this template to speed up my own development workflow by handling common boilerplate. It’s designed to be reusable, so feel free to use it as a starting point for your own projects.

## Features

- 🎨 Comprehensive design system with CSS custom properties
- 📱 Responsive design with mobile-first approach
- 🚀 Built with Astro for optimal performance
- 🎯 Easy to customize and extend
- 📦 Includes common components and utilities

## Design System

The template includes a design system that can be easily customized by modifying the CSS custom properties in `src/styles/design-tokens.css`. The design system includes:

### Colors

- Primary and secondary color palettes
- Neutral colors (50-900)
- Semantic colors (success, warning, error, info)

### Typography

- Font families
- Font sizes
- Font weights
- Line heights

### Spacing

- Consistent spacing scale
- Margin and padding utilities

### Components

- Buttons
- Container
- Grid system
- Utility classes

## Getting Started

1. Clone the repository
2. Run the setup script with your project name:
   ```bash
   npm run setup <your-project-name>
   ```
   This will:
   - Rename the project folder (if needed)
   - Update project name in configuration files
   - Replace placeholders in templates
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Customizing the Design System

To customize the design system, modify the CSS custom properties in `src/styles/design-tokens.css`. For example, to change the primary color:

```css
:root {
  --color-primary: #your-color-here;
}
```

### Available Custom Properties

#### Colors

- `--color-primary`
- `--color-primary-light`
- `--color-primary-dark`
- `--color-secondary`
- `--color-secondary-light`
- `--color-secondary-dark`
- And more...

#### Typography

- `--font-family-base`
- `--font-family-heading`
- `--font-size-*` (xs through 5xl)
- `--font-weight-*` (normal, medium, semibold, bold)
- `--line-height-*` (tight, normal, relaxed)

#### Spacing

- `--spacing-*` (0 through 16)

#### Other

- `--radius-*` (border radius)
- `--shadow-*` (box shadows)
- `--transition-*` (animation durations)
- `--z-index-*` (z-index layers)

## Project Structure

```
src/
├── styles/
│   ├── design-tokens.css    # Design system tokens
│   └── base.css            # Base styles using tokens
├── components/             # Reusable components
├── layouts/               # Page layouts
└── pages/                # Astro pages
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this template for your projects!

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
