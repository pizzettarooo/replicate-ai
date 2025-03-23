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
      model: 'replicate/llama-2-7b-chat',
      input: { prompt }
    })
  });

  const data = await response.json();
  console.log("🧠 Risposta AI:", data);
}

askReplicate("Ciao, come stai?");
