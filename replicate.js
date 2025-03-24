const express = require("express");
const cors = require("cors"); // ✅
const Replicate = require("replicate");
require("dotenv").config();

const app = express();
app.use(cors()); // ✅ Permette richieste cross-origin (come da Vercel)
app.use(express.json());

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

app.post("/ask", async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const output = await replicate.run(
      "aitechthree/nsfw-novel-generation:d1b68d1b966f96f97a2364cec456e84fda2d24d50eeb14abe14b509f2223ed97",
      { input: { prompt } }
    );

    res.json({ output });
  } catch (error) {
    console.error("Errore:", error);
    res.status(500).json({ error: "Errore nella richiesta a Replicate" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server AI in ascolto sulla porta ${PORT}`);
});
