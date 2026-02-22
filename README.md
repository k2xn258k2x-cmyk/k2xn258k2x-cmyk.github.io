# VaultBook Notion-like Jekyll Site

This is a Jekyll site designed to feel like a modern, polished product marketing site (Notion-inspired).

## Quick start (local)
```bash
bundle install
bundle exec jekyll serve
```

## Deploy on GitHub Pages
1. Put these files in your repo root.
2. In GitHub: Settings → Pages → Build and deployment → Source: GitHub Actions or Deploy from branch (depending on your setup).
3. If using a project page, set `baseurl: "/REPO_NAME"` in `_config.yml`.

## Where to edit
- Homepage sections: `index.html`
- Header + mega menu: `_includes/header.html`
- Footer links: `_includes/footer.html`
- Styling: `assets/css/style.css`
- Interactions (menu, scroll reveal): `assets/js/main.js`

## Placeholders
Image placeholders are in `assets/img/`. Swap them with real screenshots and brand art later.
