<template>
  <div class="characterList">
    <div class="container">
      <div class="row justify-content-md-center">
        <div
          class="col-md-auto mt-4"
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
      .then((response) => {
        this.characters = response.data.results;
        this.addId(this.characters);
      })
      .catch((error) => console.log(error));
  },
  methods: {
    addId: function (characters) {
      characters.forEach(function (character) {
        character.id = character.url.slice(
          character.url.indexOf("/people/") + 8,
          character.url.length - 1,
        );
      });
    },
  },
};
</script>

<style></style>
