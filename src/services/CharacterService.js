import axios from "axios";

const apiClient = axios.create({
  baseURL: "",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getCharacters(pagination) {
    return apiClient.get("https://swapi.dev/api/people" + pagination);
  },
  getCharacter(url) {
    return apiClient.get(url);
  },
};
