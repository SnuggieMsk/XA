# 📚 NISM X-B Study Hub — Live Site

This folder is a **self-contained website** for studying the NISM Series X-B (Investment Adviser Level 2) material. It turns the chapter notes, flashcards and 2,000+ explained MCQs (in [`../study-guide`](../study-guide)) into a clean, navigable study app.

## ✨ Features
- **Sidebar navigation** — all 20 chapters grouped by module, each with Notes / Flashcards / Quiz.
- **Interactive flashcards** — click (or press Space) to flip; Shuffle and arrow-key navigation.
- **Quiz mode** — 100 MCQs per chapter with click-to-reveal explanations; "Reveal/Hide all" buttons.
- **Global search** — press `/` and search across every chapter.
- **Progress tracking** — mark sections "studied"; a progress bar remembers it (saved in your browser).
- **Dark / light mode** and a fully **mobile-friendly** layout.
- **Works offline** — all content is bundled into `content.js`, so no server or internet is required (markdown rendering uses a CDN; if offline, text still shows).

## ▶️ How to view it

### Option A — Just open it
Open `docs/index.html` in any modern browser. (Everything is bundled, so it works straight from disk.)

### Option B — Host it free on GitHub Pages (recommended for "live" access on any device)
1. Push this branch to GitHub.
2. Go to your repo → **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Pick your branch and set the folder to **`/docs`**, then **Save**.
5. After a minute your live page appears at:
   `https://<your-username>.github.io/<repo-name>/`

## 🔧 Editing content
The study text lives in `../study-guide/chapter-XX/*.md`. After editing any of those, regenerate the bundle:

```bash
python3 docs/build.py
```

This rewrites `docs/content.js` from the markdown. Commit both the markdown and the regenerated `content.js`.

## 🗂 Files
| File | Purpose |
|------|---------|
| `index.html` | Page shell |
| `style.css` | Styling + light/dark themes |
| `app.js` | Routing, flashcards, quiz, search, progress |
| `content.js` | All chapter content, bundled (generated) |
| `build.py` | Regenerates `content.js` from `../study-guide` |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |
