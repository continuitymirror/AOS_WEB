# AOS_WEB — Landing page

Static marketing landing page for **AOS — The Continuity Index**, kept separate from the main app.

## Set the app link

Edit **`app-url.js`** and set `APP_URL` to your deployed AOS app URL (e.g. `https://your-aos-app.pages.dev`). Both “Enter” and “Access the index” use this value.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

Or with Python: `python -m http.server 8080` (then open http://localhost:8080).

## Deploy

Deploy the contents of this folder to any static host (Cloudflare Pages, Netlify, GitHub Pages, etc.). No build step.
