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
      version: 'a84c6fef7ac747b6b53b8c8e81d14c9ef2d894bc042947add8fbdba38f3dff0d',
      input: {
        prompt: prompt,
        max_new_tokens: 100,
        temperature: 0.75
      }
    })
  });

  const data = await response.json();
  console.log("🧠 Risposta AI:", data);
}

askReplicate("Ciao, come stai?");
