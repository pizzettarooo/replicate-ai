const Replicate = require("replicate");
require("dotenv").config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

(async () => {
  const output = await replicate.run(
    "replicate/llama-2-7b-chat", // modello gratuito e pubblico
    {
      input: {
        prompt: "Ciao, come stai?",
      },
    }
  );

  console.log("🧠 Risposta:", output);
})();
