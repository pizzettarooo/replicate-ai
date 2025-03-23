const Replicate = require("replicate");

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

async function ask() {
  const output = await replicate.run(
    "meta/llama-2-7b-chat", // ✅ modello pubblico e accessibile
    {
      input: {
        prompt: "Ciao! Come stai?",
        temperature: 0.5,
        max_new_tokens: 100
      },
    }
  );

  console.log("🧠 Risposta AI:", output);
}

ask();
