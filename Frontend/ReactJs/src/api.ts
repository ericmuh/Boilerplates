import { API_URL } from "./variables";
export async function addLanguage(language: string, greeting: string) {
  const response = await fetch(`${API_URL}/api/send/`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify({ language, greeting }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

export async function getLanguages() {
  const response = await fetch(`${API_URL}/api/hello`);
  return response.json();
}
