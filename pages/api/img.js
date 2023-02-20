import { Configuration, OpenAIApi } from "openai";

async function runCompletion(prompt, size, apiKey) {
  const configuration = new Configuration({
    apiKey: apiKey,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createImage({
    prompt: prompt,
    size: size,
    n: 1,
  });

  console.log(response.data.data[0].url);

  return {
    src: response.data.data[0].url,
    text: prompt,
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { prompt, size, apiKey } = req.body;

  const answer = await runCompletion(prompt, size, apiKey);

  res.status(200).json({ dalle_response: answer });
}
