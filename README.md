# balamura.li — Personal Blog & Portfolio

This repository houses the source code for my personal blog and CV website, hosted at [balamura.li](https://balamura.li). It is built on modern static site architecture utilizing Astro and Tailwind CSS v4.

---

## 🛠️ Tech Stack & Features

- **Framework**: [Astro](https://astro.build) (Static site generation with file-based routing)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (using Vite compiler integration)
- **Content Format**: MDX (Markdown with JSX component support) for rich blog posts
- **Themes**: Dual-toggle theme system:
  - **Light/Dark Mode**: Smooth transitions for standard viewing.
  - **Hacker Mode**: High-contrast, neon-green monospace layout with retro styling.
- **Diagrams & Visuals**:
  - Custom responsive SVG graphics designed directly in MDX.
  - Lazy-loading client-side **Mermaid** dynamic rendering (zero bundle overhead for text-only pages).
- **SEO & Feeds**:
  - Auto-generated XML Sitemap (`sitemap-index.xml`).
  - Dynamic XML RSS Feed available at `/feed.xml`.
  - Audited SEO headers, meta descriptions, and unique element IDs.
- **CI/CD**: Automatic deployment to GitHub Pages using GitHub Actions.

---

## 📂 Project Structure

```text
├── .github/workflows/   # CI/CD deployment pipeline configuration
├── public/              # Static public assets (images, favicon, etc.)
│   └── images/          # Blog post featured covers and inline diagrams
├── src/
│   ├── components/      # Reusable UI components (ThemeToggle, MDXImage, etc.)
│   ├── content/
│   │   └── posts/       # MDX blog posts with frontmatter metadata
│   ├── layouts/         # Layout.astro with theme initialization scripts
│   ├── pages/           # Site routes (Home, About, Blog index, RSS feed)
│   └── styles/          # global.css with Tailwind v4 imports & Hacker theme overrides
├── astro.config.mjs     # Astro and Tailwind Vite configurations
└── package.json         # Project dependencies and script runner tasks
```

---

## 🧞 Script Commands

All tasks are run from the project root using `npm`:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts the local Astro development server |
| `npm run build` | Compiles the production-ready static site into `./dist/` |
| `npm run preview` | Serves the build locally for validation |

### 🚀 Running the Development Server in Background

As per the project guidelines ([AGENTS.md](file:///Users/pandranki/Documents/GitHub/balamura.li/AGENTS.md)), you can manage the development server in background mode:
- **Start server**: `astro dev --background`
- **Check status**: `astro dev status`
- **View logs**: `astro dev logs`
- **Stop server**: `astro dev stop`

---

## 📦 Deployment

Deployments are fully automated. Every push or merge to the `main` branch triggers the GitHub Actions workflow in [deploy.yml](file:///Users/pandranki/Documents/GitHub/balamura.li/.github/workflows/deploy.yml), which:
1. Installs project dependencies.
2. Builds the static Astro assets.
3. Uploads the build artifact and deploys it directly to **GitHub Pages** serving [balamura.li](https://balamura.li).
