import axios from "axios";
import characterStore from "@/store/characterStore";

function storeCharacters(characters) {
  characters.forEach((character) => {
    characterStore.characters[character.url.slice(
      character.url.indexOf("/people/") + 8,
      character.url.length - 1
    )] = character;
  });
}

function storePhoto(name, link) {
  characterStore.photos[name] = link;
}

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
    if(pagination) {
      characterStore.lastPage = pagination;
    }
    if(typeof characterStore.pages[pagination] !== 'undefined'){
      return new Promise((resolve) => resolve(characterStore.pages[pagination]));
    }
    return new Promise((resolve, reject) => {
      apiClient.get("people/?page=" + pagination)
        .then(response => {
          characterStore.count = response.data.count;
          storeCharacters(response.data.results);
          characterStore.pages[pagination] = response;
          resolve(response)
        }).catch(reject);
    })
  },
  getCharacter(id) {
    if(typeof characterStore.characters[id] !== 'undefined') {
      return new Promise((resolve) => resolve({data: characterStore.characters[id]}));
    }
    return apiClient.get("people/" + id);
  },
  getHomeworld(id) {
    return apiClient.get("planets/" + id);
  },
  getStarship(id) {
    return apiClient.get("starships/" + id);
  },
  getPhoto(name){
    if(typeof characterStore.photos[name] !== 'undefined'){
      return new Promise((resolve) => resolve({link: characterStore.photos[name]}));
    }
    return new Promise((resolve, reject) => {
      apiClient.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyDOQXTiIXNQ7wdl28X5FJ3SAPcbdNM8dEw&cx=ccdc96df0b94a890e&searchType=image&imgSize=xlarge&alt=json&num=1&start=1&q=" + name)
        .then(response => {
          storePhoto(name, response.data.items[0].link);
          resolve(response.data.items[0])
        }).catch(reject);
    })
  }
};
