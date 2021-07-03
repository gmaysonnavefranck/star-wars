<template>
  <div class="characterList">
    <div class="container">
      <div class="row">
        <div
          class="col-sm"
          v-for="character in characters"
          :key="character.url"
        >
          <CharacterCard :character="character" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterCard from "@/components/CharacterCard.vue";
import CharacterService from "@/services/CharacterService.js";

export default {
  name: "CharacterList",
  components: {
    CharacterCard,
  },
  data() {
    return {
      characters: [],
      pagination: "",
    };
  },
  created() {
    CharacterService.getCharacters(this.pagination)
      .then((response) => (this.characters = response.data.results))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
