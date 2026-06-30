# Clair Health Voice AI Exploration

Generative glass orb with floral interior energy for Clair's voice AI experience.

**Live demo:** https://airfan003.github.io/ClairVoiceAI/

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173/ClairVoiceAI/ (the app uses a subpath base for GitHub Pages).

## Deploy to GitHub Pages

This project is a Vite + TypeScript app. GitHub Pages must serve the **built** `dist/` output, not the source `index.html`.

1. In the repo on GitHub, go to **Settings → Pages**
2. Set **Build and deployment → Source** to **GitHub Actions** (not “Deploy from branch”)
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` runs `npm run build` and deploys `dist/`

The Vite `base` is set to `/ClairVoiceAI/` so assets load correctly at `https://<user>.github.io/ClairVoiceAI/`.

## Stack

- Three.js
- Vite
- TypeScript
