import Replicate from "replicate";
import * as dotenv from "dotenv";
dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const input = {
  prompt: "Scrivimi una storia erotica ambientata in un castello medievale"
};

async function runAI() {
  const output = await replicate.run(
    "aitechtree/nsfw-novel-generation:d1b68d1b966f96f97a2364cec456e84fda2d24d50eeb14abe14b509f2223ed97",
    { input }
  );

  console.log("📚 Risposta AI:", output);
}

runAI();
