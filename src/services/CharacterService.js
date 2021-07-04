import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://swapi.dev/api/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getCharacters(pagination) {
    return apiClient.get("people/" + pagination);
  },
  getCharacter(id) {
    return apiClient.get('people/' + id);
  },
};
