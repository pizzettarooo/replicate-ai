const fetch = require('node-fetch');
require('dotenv').config();

const replicateKey = process.env.REPLICATE_API_TOKEN;

async function askReplicate(prompt) {
  const response = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      'Authorization': `Token ${replicateKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      version: '84c14755f7c3aaae8c3a2bce4fb67b68876d63ffcad9d1e3c7c1882df7f5f183',
      input: {
        prompt: prompt,
        max_new_tokens: 100,
        temperature: 0.7
      }
    })
  });

  const data = await response.json();
  console.log("🧠 Risposta AI:", data);
}

askReplicate("Ciao, come stai?");
