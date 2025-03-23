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
      version: "86c6facc8f3e1c71a55737dd46ed7e9e798d6c299b1c7511d00c1fd8df0c6c67", // LLaMA 2 13B Chat
      input: {
        prompt: prompt,
        temperature: 0.7,
        top_p: 0.9,
        max_new_tokens: 300
      }
    })
  });

  const data = await response.json();
  console.log("🧠 Risposta AI:", data);
}

askReplicate("Ciao, chi sei?");
