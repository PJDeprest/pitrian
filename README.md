# Pitrian

Minimal brutalist website for Pitrian, a Belgian full-stack software consultancy.

## Development

### Prerequisites
- Hugo Extended v0.121.1 or later

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
- `i18n/` - Translation files
- `static/` - Static files

### Features
- Minimal brutalist design
- Multilingual (NL/EN)
- Light/dark mode toggle
- Responsive layout
- No tracking or analytics

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch.
