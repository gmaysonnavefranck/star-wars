<template>
  <div>
    <h1>{{ character.name }}</h1>
    <p>{{ character.starships }}</p>
    <p>{{ character.species }}</p>
  </div>
</template>
<script>
import CharacterService from "@/services/CharacterService.js";
export default {
  props: ["name", "_url"],
  data() {
    return {
      character: "",
      url: null,
    };
  },
  created() {
    this.url = this.$route.params._url;
    CharacterService.getCharacter(this.url)
      .then((response) => {
        this.character = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>
<style></style>
