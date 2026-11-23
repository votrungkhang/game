const fs = require('fs');

const officialMapsSvg = `<svg viewBox="0 0 92 136" width="100%" height="100%">
  <!-- Red Top -->
  <path fill="#EA4335" d="M46 0C28.2 0 13.2 11.6 7.1 27.9l23.5 19.7L46 36V0z"/>
  <!-- Yellow Left Fold -->
  <path fill="#FBBC04" d="M7.1 27.9C2.6 35.9 0 45 0 54.8c0 14.5 5.8 27.6 15.3 37.2l21.4-12.2L7.1 27.9z"/>
  <!-- Blue Bottom Point -->
  <path fill="#4285F4" d="M15.3 92C24.8 101.6 35 118 46 136V98.7L36.7 79.8 15.3 92z"/>
  <!-- Green Right Side -->
  <path fill="#34A853" d="M46 0v36l15.4 11.6 23.5-19.7C78.8 11.6 63.8 0 46 0zm0 98.7V136c11-18 21.2-34.4 30.7-44 9.5-9.6 15.3-22.7 15.3-37.2 0-9.8-2.6-18.9-7.1-26.9L63.5 47.6 46 98.7z"/>
  <!-- Center White Hole -->
  <circle fill="#FFFFFF" cx="46" cy="46" r="18"/>
</svg>`;

console.log('Official Maps length:', officialMapsSvg.length);
