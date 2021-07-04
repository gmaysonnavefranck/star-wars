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
  props: ["id"],
  data() {
    return {
      character: "",
    };
  },
  created() {
    CharacterService.getCharacter(this.$route.params.id)
      .then((response) => {
        this.character = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>
<style></style>
