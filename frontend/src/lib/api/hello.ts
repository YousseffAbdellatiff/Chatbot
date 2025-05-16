import { API_BASE_URL } from "../config";

export default async function fetchHello(): Promise<string> {
  const res = await fetch(`${API_BASE_URL}/api/v1/hello`);
  console.log(
    `fetchHello: ${API_BASE_URL}/api/v1/hello - ${res.status} - ${res.statusText}`
  );
  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  const data = await res.json();
  return data.message;
}
