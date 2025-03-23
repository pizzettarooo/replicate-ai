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
      version: 'a9758cb3b1a1f57aa920312674eb4f8ac3cf38d1092d24455a529deb6c4e65aa', // llama-2-7b-chat
      input: {
        prompt: prompt,
        max_new_tokens: 200,
        temperature: 0.7
      }
    })
  });

  const data = await response.json();
  console.log("🧠 Risposta AI:", data);
}

askReplicate("Ciao, come stai?");
