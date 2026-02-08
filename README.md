# Valentine's Day Love Website

A fully responsive, dark romantic single-page experience with hero, Valentine Week cards, video memories, 3D photo carousel, love letter, proposal, surprise video, and footer.

## Tech stack

- **React 19** + **Vite 7**
- **Tailwind CSS** – layout and theme (dark, pink/violet/gold)
- **Framer Motion** – section and card animations
- **Three.js** + **@react-three/fiber** + **@react-three/drei** – 3D love memory carousel
- **HTML5** `<video>` and `<audio>` for local media

## Run locally

```bash
npm install
npm run dev
```

Build: `npm run build`. Preview build: `npm run preview`.

## Deploy on Render (static site)

1. **Push your code to GitHub**  
   Create a repo and push this project (including `public/video/`, `public/audio/`, `public/images/` if you use them).

2. **Go to [render.com](https://render.com)**  
   Sign up or log in, then click **New** → **Static Site**.

3. **Connect the repo**  
   - Connect your GitHub account and select the `valentine-subha-react` repository.  
   - (If the repo is under an organization, ensure Render has access.)

4. **Configure the static site**  
   - **Name:** e.g. `valentine-subha`  
   - **Branch:** `main` (or your default branch)  
   - **Build command:** `npm install && npm run build`  
   - **Publish directory:** `dist`  

5. **Deploy**  
   Click **Create Static Site**. Render will install deps, run `npm run build`, and serve the `dist` folder. Your site will get a URL like `https://valentine-subha.onrender.com`.

6. **Optional – custom domain**  
   In the static site’s **Settings** → **Custom Domains**, add your domain and follow the DNS instructions.

**Note:** All media (videos, images, audio) in `public/` are copied into `dist` at build time, so they will be served from the same paths (e.g. `/video/valentine.mp4`, `/images/...`). No extra config needed.

## Customization

- **Creator name:** Edit `CREATOR_NAME` in `src/data/constants.js`.
- **Songs / days:** Edit `VALENTINE_SONGS` and `VALENTINE_DAYS` in the same file.
- **Gallery images:** Replace paths in `GALLERY_IMAGES`; use JPG/PNG for the 3D carousel (SVG may not work as textures).
- **Videos:** Place `valentine.mp4` in `public/video/` (see `public/MEDIA-README.txt` and `public/DOWNLOAD-LIST.md` for audio).

## Sections

1. **Hero** – Fullscreen headline, floating hearts, gradient background  
2. **Our Valentine Week** – Grid of glowing cards (Rose → Valentine’s Day), each with “Play Song”  
3. **Video Memories** – “Moments I Replay in My Heart” with embedded video  
4. **3D Love Memory Slider** – Three.js circular photo carousel (drag + auto-rotate)  
5. **Love Letter** – Handwritten-style text with reveal animation  
6. **Proposal** – “Will You Be Mine Forever?” with YES (confetti) / NO (runs away)  
7. **Surprise Video** – Shown after YES: “This is everything I never say out loud…”  
8. **Final Message** – Quote + soft heart background  
9. **Footer** – “Made with infinite love by [name]”
