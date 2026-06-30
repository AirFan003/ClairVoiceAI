# Clair Voice Orb

Generative orb exploration for Clair's AI voice experience.

## Quick start

```bash
npm install
npm run dev
```

## Current step: Refractive bubble

The orb uses the [Stemkoski refraction technique](https://stemkoski.github.io/Three.js/Refraction.html): a `CubeCamera` captures the scene each frame and maps it onto a sphere with `CubeRefractionMapping`, giving a true glass/bubble refraction look. Simplex noise still displaces the surface (controlled by the **Noise level** slider), and a faint Fresnel rim keeps the silhouette visible on black.

**Next steps:** tune color palette, inner flower bloom, voice reactivity.

## Stack

- Three.js
- Vite
