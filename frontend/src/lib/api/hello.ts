export default async function fetchHello(): Promise<string> {
  const res = await fetch(`/api/v1/hello`);
  
  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  const data = await res.json();
  return data.message;
}