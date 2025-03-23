const Replicate = require('replicate');
require('dotenv').config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

(async () => {
  const output = await replicate.run(
    "replicate/llama-2-7b-chat",
    {
      input: {
        prompt: `Sei una ragazza virtuale simpatica e ironica. Il tuo obiettivo è fare compagnia in modo amichevole e un po’ malizioso, senza mai superare i limiti. Rispondi a questa domanda con tono giocoso e diretto: "Cosa fai di bello stasera?"`,
        temperature: 0.7,
        max_new_tokens: 200,
        top_k: 50,
        top_p: 0.9
      }
    }
  );

  console.log("💬 Risposta AI:", output);
})();
