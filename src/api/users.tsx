import { API_USER_URL } from "@env";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const getUsers = async () => {
  const data = await fetch(API_USER_URL)
    .then((response) => response.json())
    .catch((error) => console.error(error));
  return data;
}

export const authenticateUser = async (email: string) => {
  const data = await fetch(`${API_USER_URL}/users?email=${email}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
  return data;
}

export const createUser = async (user: User) => {
  const data = await fetch(`${API_USER_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
  return data;
}