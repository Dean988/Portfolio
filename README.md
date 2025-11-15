# Dino Di Emidio — AI Consulting Portfolio

A single-page website that distills my background in sociology, data science, and AI strategy into a polished, responsive experience. The page focuses on AI consulting services, intelligent infrastructure, social insight labs, and includes interactive hover banners plus a subtle cursor cloud inspired by generative art.

![Hero preview](./github.jpeg)

## ✨ Highlights

- **Story-driven layout** – Hero narrative, services grid, blueprint pipeline, and CTA flow for clarity.
- **Custom interactions** – Gradient banners, parallax-inspired cursor cloud, and smooth scrolling.
- **Optimized UX** – Responsive grid, async image decoding, GPU-friendly animations, and reduced-motion fallbacks.

## 🗂 Project Structure

```
.
├── index.html          # Main markup
├── styles.css          # Styling (responsive layout, effects, hover states)
├── script.js           # Cursor cloud + smooth scrolling
├── images/             # Portrait + social icons
└── .github/workflows/  # GitHub Pages deployment workflow
```

## 🚀 Getting Started Locally

```bash
git clone https://github.com/Dean988/Portfolio.git
cd Portfolio
# Optionally use any static server; e.g. with Python:
python -m http.server 4000
# Then open http://localhost:4000 in your browser
```

## 🌐 Deployment (GitHub Pages)

This repo already includes `.github/workflows/deploy.yml`, which publishes the site automatically:

1. Push to `main`.
2. GitHub Actions runs “Deploy static site” and uploads the site to GitHub Pages.
3. Once the workflow succeeds, the page is available at `https://Dean988.github.io/Portfolio/`.

> If Pages is not enabled yet, go to **Settings → Pages**, choose “GitHub Actions” as the source, and save.

## 🛠 Customization Tips

- Update text and sections inside `index.html`.
- Adjust gradients, fonts, or spacing in `styles.css`.
- Modify cursor behavior or interactions in `script.js` (especially in the `cursorCloud` block).

## 📄 License

This portfolio is provided for personal presentation purposes. Feel free to adapt it to your own profile.
