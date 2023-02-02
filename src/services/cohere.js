const COHERE_API_KEY = import.meta.env.PUBLIC_COHERE_API_KEY;
const COHERE_API_GENERATE_URL = "https://api.cohere.ai/generate";
const COHERE_API_DETECT_LANGUAGE_URL = "https://api.cohere.ai/detect-language";

export async function checkIsEnglish(input) {
  const data = {
    texts: [input],
  };

  const { results } = await fetch(COHERE_API_DETECT_LANGUAGE_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `BEARER ${COHERE_API_KEY}`,
      "Content-Type": "application/json",
      "Cohere-Version": "2022-12-06",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  const [{ language_code }] = results;
  return language_code === "en";
}

export async function fixMyEnglish(input) {
  const data = {
    model: "xlarge",
    prompt: `This is a spell checker generator.
--
Incorrect sample: "I are good!"
Correct sample: "I am good!"
--
Incorrect sample: "I have 22 years old."
Correct sample: "I am 22 years old."
--
Incorrect sample: "I don't can know"
Correct sample: "I don't know"
--
Incorrect sample: "${input}"
Correct sample:`,
    max_tokens: 40,
    temperature: 0.3,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ["--"],
    return_likelihoods: "NONE",
  };

  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: "POST",
    headers: {
      Authorization: `BEARER ${COHERE_API_KEY}`,
      "Content-Type": "application/json",
      "Cohere-Version": "2022-12-06",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  const { text } = response.generations[0];
  return text.replace("--", "").replaceAll('"', "").trim();
}

export async function createBodyParagraph(input) {
  const data = {
    model: "command-xlarge-20221108",
    prompt: input,
    max_tokens: 150,
    temperature: 0.5,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ["--"],
    return_likelihoods: "NONE",
  };

  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: "POST",
    headers: {
      Authorization: `BEARER ${COHERE_API_KEY}`,
      "Content-Type": "application/json",
      "Cohere-Version": "2022-12-06",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  const { text } = response.generations[0];
  return text.trim();
}

export async function createTitle(input) {
  const data = {
    model: "command-xlarge-nightly",
    prompt: `Generate me a title for a post with the keywords "${input}"`,
    max_tokens: 18,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: "GENERATION",
  };
  
  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: "POST",
    headers: {
      Authorization: `BEARER ${COHERE_API_KEY}`,
      "Content-Type": "application/json",
      "Cohere-Version": "2022-12-06",
    },
    body: JSON.stringify(data)
  }).then((res) => res.json())

  const { text } = response.generations[0]
  const firstTitle = text.split("\n")
  return firstTitle[1].trim()
}
