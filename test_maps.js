const fs = require('fs');

// Official Google Maps 2020 SVG (from Google Brand assets):
const officialMaps = `<svg viewBox="0 0 92 136" width="100%" height="100%">
  <path fill="#4285F4" d="M46 0C20.6 0 0 20.6 0 46c0 8 2 15.6 5.6 22.2L46 136l40.4-67.8C90 61.6 92 54 92 46 92 20.6 71.4 0 46 0z" opacity="0"/>
  <!-- Accurate 4 segments of Google Maps 2020: -->
  <!-- Red dome -->
  <path fill="#EA4335" d="M46 0C32.8 0 21.1 5.9 13.2 15.3l23.5 19.7L46 27V0z"/>
  <!-- Yellow fold -->
  <path fill="#FBBC04" d="M13.2 15.3C5.1 24.9 0 37.3 0 51c0 9.8 2.6 18.9 7.1 26.9l29.6-25.1L13.2 15.3z"/>
  <!-- Blue fold -->
  <path fill="#4285F4" d="M7.1 77.9C13.2 88.8 21.7 99.8 30.6 111.4L46 136V98.7L36.7 79.8 7.1 77.9z"/>
  <!-- Green side -->
  <path fill="#34A853" d="M46 0v27l9.3 8 23.5-19.7C70.9 5.9 59.2 0 46 0zm0 98.7V136l15.4-24.6c11.7-18.4 20.6-32.5 20.6-47.9 0-4.4-.8-8.6-2.2-12.5L54.7 75.9 46 98.7z"/>
  <!-- White circle -->
  <circle cx="46" cy="46" r="18" fill="#FFFFFF"/>
</svg>`;

console.log('Testing official Maps vector');
