# Portfolio-LP

Lesly Max D'Souza — Software Engineer Portfolio (single-page landing site).

Live demo: https://lesly16.github.io/Portfolio-LP/  (deploy with GitHub Pages; replace with your live URL if different)

## Table of Contents

- [Demo](#demo)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install & Run Locally](#install--run-locally)
- [Deployment (GitHub Pages)](#deployment-github-pages)
- [Customizing](#customizing)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Demo

Visit the live demo once deployed (placeholder above). To publish the site with GitHub Pages, enable Pages in the repository settings and set the site source to the `main` branch (root) — see the Deployment section below for a step-by-step.

## Screenshots

Add screenshots to the repository under `/screenshots` (example paths used below). Replace or add images and they will render here.

![Hero section](/screenshots/hero.png)

![Projects / About](/screenshots/projects.png)

If you want me to add screenshots to the repo I can also create the `/screenshots` folder and add placeholder images — provide the images or tell me to create example placeholders.

## Features

- Clean, responsive single-page layout
- Hero section with brief intro and CTAs
- About, Skills, Experience, Education, Certifications, and Contact sections
- Smooth scrolling and section highlight in navigation
- Accessible focus states and keyboard-friendly interactions
- Lightweight: no build step required — plain HTML, CSS, and JavaScript

## Tech Stack

This project is implemented using the following exact technologies (as present in the repo):

- HTML5 — index.html (content and semantic structure)
- CSS3 — styles.css (layout, responsive styles, variables, and animations)
- JavaScript (vanilla ES6) — script.js (menu toggle, smooth scroll, animations, accessibility enhancements)
- Font Awesome — used via CDN for icons (link included in index.html)

No framework or bundler is required — this is a static site that can be served directly.

## Project Structure

- index.html  — main page
- styles.css  — all styles and responsive rules
- script.js   — interactive behaviour
- (optional) /screenshots — recommended place for images/screenshots

## Getting Started

### Prerequisites

- A modern web browser
- Git (optional, for local clone)

### Install & Run Locally

1. Clone the repo:

   git clone https://github.com/LESLY16/Portfolio-LP.git
   cd Portfolio-LP

2. Open the site locally:

   - Option A (no server): open `index.html` in your browser.
   - Option B (recommended simple server):

     npx http-server .

     Then visit http://localhost:8080 (or the port http-server shows).

No Node.js build steps are required.

## Deployment (GitHub Pages)

1. Push your code to the `main` branch.
2. In the repository, go to Settings → Pages.
3. Under "Source" select "main" and the folder `/ (root)`, then Save.
4. After a minute the site will be published at `https://<your-github-username>.github.io/Portfolio-LP/` (this README uses the placeholder URL above).

Alternative hosts: Netlify, Vercel — simply point them to the repository or drag-and-drop a `dist/`/root folder if you export a different build.

## Customizing

- Update `index.html` to change your name, bio, and links.
- Replace the avatar placeholder by adding an image and replacing the `.avatar-placeholder` markup with an `<img>` tag (use `data-src` for lazy loading if desired).
- Add project images/screenshots under `/screenshots` and update paths used in this README.
- Edit `styles.css` to change colors, fonts, and spacing. Theme variables are declared at the top of the file (`:root`).

Example: replace the avatar placeholder markup with:

```html
<div class="hero-image">
  <img src="/screenshots/hero.png" alt="Lesly Max D'Souza" width="300" height="300" loading="lazy">
</div>
```

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add feature"`
4. Push and open a Pull Request

If you'd like me to open issues or help implement a change (e.g., add screenshots, optimize images, add a contact form), tell me which task and I will make the change.

## License

This project is licensed under the MIT License — see `LICENSE`.

## Author

Lesly Max D'Souza — leslymxds16@gmail.com

---

What I changed: I updated the README with the exact tech stack discovered in the repository (HTML, CSS, vanilla JS), added a Screenshots section with placeholder image paths, added a demo link placeholder and deployment instructions, and linked to a LICENSE file. Next I will add an MIT LICENSE file to the repository.