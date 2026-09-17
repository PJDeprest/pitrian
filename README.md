# Pitrian

Minimal brutalist website for Pitrian, a Belgian full-stack software consultancy.

## Development

### Prerequisites
- Hugo Extended v0.166.0 or later
- Dart Sass v1.104.1 or later (must be on `PATH`)

Dart Sass is a hard requirement: the stylesheet is transpiled with
`css.Sass (dict "transpiler" "dartsass")`. Hugo's bundled alternative, LibSass,
has been deprecated by the Sass team since 2020 and is not used here.

### Local Development
```bash
# Start development server
hugo server -D

# Build production site
hugo --gc --minify
```

### Project Structure
- `content/` - Markdown content in English and Dutch
- `layouts/` - Hugo templates
- `assets/scss/` - SCSS stylesheets
- `assets/js/` - Theme toggle script
- `i18n/` - Translation files
- `static/` - Static files

### Features
- Minimal brutalist design
- Multilingual (NL/EN)
- Light/dark mode toggle
- Responsive layout
- No tracking or analytics

### Security notes
- CSS and JS are fingerprinted and served with Subresource Integrity hashes.
- A strict Content-Security-Policy (`default-src 'none'`) is delivered via
  `<meta>`, because GitHub Pages cannot set response headers. `frame-ancestors`
  and `X-Frame-Options` are header-only and therefore cannot be set here.
- Raw HTML in Markdown is disabled (no `goldmark.renderer.unsafe`).

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when
changes are pushed to the main branch.

The workflow runs with `contents: read` and pins every GitHub Action to a commit
SHA. Hugo and Dart Sass are downloaded at a pinned version and verified against a
recorded SHA-256 checksum.

Dependabot keeps the pinned Actions current. It does **not** track the Hugo or
Dart Sass versions — those live as `HUGO_VERSION` / `DART_SASS_VERSION` in
`.github/workflows/hugo.yml` and must be bumped by hand, together with their
matching `*_SHA256` value.
