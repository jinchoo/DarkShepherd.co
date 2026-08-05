(async () => {
  console.log('[DarkShepherd] Protection Active 🐺');
  if (window.location.protocol !== 'https:') {
    console.warn('[DarkShepherd] Warning: Site not using HTTPS.');
  }
  await fetch('https://api.darkshepherd.ai/security/scan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ host: window.location.host })
  });
})();