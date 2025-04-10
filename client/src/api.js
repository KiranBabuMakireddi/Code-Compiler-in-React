const JUDGE0_API_BASE = "https://judge0-ce.p.rapidapi.com";

const headers = {
  "content-type": "application/json",
  "X-RapidAPI-Key": "", // Replace with your RapidAPI key
  "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
};

export async function compileCode({ source_code, language_id }) {
  const response = await fetch(`${JUDGE0_API_BASE}/submissions?base64_encoded=false&wait=false`, {
    method: "POST",
    headers,
    body: JSON.stringify({ source_code, language_id }),
  });

  const { token } = await response.json();

  let result;
  while (true) {
    const res = await fetch(`${JUDGE0_API_BASE}/submissions/${token}?base64_encoded=false`, {
      method: "GET",
      headers,
    });
    result = await res.json();
    if (result.status.id <= 2) {
      await new Promise(r => setTimeout(r, 1000));
    } else {
      break;
    }
  }

  return result;
}
