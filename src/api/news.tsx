import { API_URL, API_KEY } from "@env";

export const getNewsByCategory = async (category: string) => {
  const data = await fetch(
    `${API_URL}?apiKey=${API_KEY}&country=us&category=${category}`
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));
  return data;
};

export const getNews = async () => {
  const data = await fetch(`${API_URL}?apiKey=${API_KEY}&country=us`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
  return data;
};

export const getTopNews = async () => {
  const data = await fetch(
    `${API_URL}?apiKey=${API_KEY}&country=us&category=science`
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));
  return data;
};
