// Theme toggle - minimal JS
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const stored = localStorage.getItem('theme');

// Function to update the icon based on current theme
function updateThemeIcon() {
  const current = html.getAttribute('data-theme');
  const icon = toggle.querySelector('.theme-icon');
  if (current === 'dark') {
    if (icon) icon.textContent = '◑';
    toggle.setAttribute('data-theme-current', 'dark');
  } else {
    if (icon) icon.textContent = '◐';
    toggle.setAttribute('data-theme-current', 'light');
  }
}

if (stored) {
  html.setAttribute('data-theme', stored);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  html.setAttribute('data-theme', 'dark');
}

if (toggle) {
  // Update icon on page load
  updateThemeIcon();

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    // Update icon after switching
    updateThemeIcon();
  });
}
