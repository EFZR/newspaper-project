import { API_NEWS_URL, API_NEWS_KEY } from "@env";

export const getNews = async () => {
  const data = await fetch(`${API_NEWS_URL}?apiKey=${API_NEWS_KEY}&country=us`)
  .then((response) => response.json())
  .catch((error) => console.error(error));
  return data;
};

export const getTopNews = async () => {
  const data = await fetch(
    `${API_NEWS_URL}?apiKey=${API_NEWS_KEY}&country=us&category=science`
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));
  return data;
};

export const getNewsByCategory = async (category: string) => {
  const data = await fetch(
    `${API_NEWS_URL}?apiKey=${API_NEWS_KEY}&country=us&category=${category}`
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));
  return data;
};

export const getNewsBySearch = async (search: string) => {
  const data = fetch(`${API_NEWS_URL}?apiKey=${API_NEWS_KEY}&q=${search}&country=us`)
  .then((response) => response.json())
  .catch((error) => console.error(error));
  return data;
}