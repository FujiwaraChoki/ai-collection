import { Configuration, OpenAIApi } from "openai";

async function runCompletion(prompt, apiKey) {
  const configuration = new Configuration({
    apiKey: apiKey,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    engine: "text-davinci-003",
    prompt: prompt,
    stop: "\n",
  });

  return response.data.choices[0].text;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { prompt, apiKey } = req.body;

  const answer = await runCompletion(prompt, apiKey);

  res.status(200).json({ gpt_response: answer });
}
