import { API_URL, API_KEY } from "@env";

export const getNewsByCategory = async (category: string) => {
  const data = await fetch(`${API_URL}?country=us&category=${category}&apiKey=${API_KEY}`)
  .then((response) => response.json())
  .catch((error) => console.error(error));
  return data;
}

export const getNews = async () => {
  const data = await fetch(`${API_URL}?country=us&apiKey=${API_KEY}`)
  .then((response) => response.json())
  .catch((error) => console.error(error));
  return data;
}