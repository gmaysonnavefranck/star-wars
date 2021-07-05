<template>
  <div>
    <div class="row" style="height: 300px">
      <div class="col-6 ml-3">
        <img :src="image" class="card-img-top" />
      </div>
      <div class="col-6">
        <div class="row">
          <h1>{{ character.name }}</h1>
          <h1>{{ character.height }}</h1>
          <h1>{{ character.mass }}</h1>
          <h1>{{ character.hair_color }}</h1>
          <h1>{{ character.skin_color }}</h1>
          <h1>{{ character.eye_color }}</h1>
          <h1>{{ character.birth_year }}</h1>
          <h1>{{ character.gender }}</h1>
          <h1>{{ character.homeworld }}</h1>
        </div>
        <div class="row">
          <h1 v-for="starship in character.starships" :key="starship">
            {{ starship }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CharacterService from "@/services/CharacterService.js";
export default {
  props: ["id", "_image"],
  data() {
    return {
      character: {},
      image: "",
    };
  },
  created() {
    this.image = this.$route.params._image;
    CharacterService.getCharacter(this.$route.params.id)
      .then((response) => {
        this.processData(response.data);
      })
      .catch((error) => console.log(error));
  },
  methods: {
    processData: function (data) {
      this.character.name = data.name.toLowerCase();
      this.character.height = data.height.toLowerCase();
      this.character.mass = data.mass.toLowerCase();
      this.character.hair_color = data.hair_color.toLowerCase();
      this.character.skin_color = data.skin_color.toLowerCase();
      this.character.eye_color = data.eye_color.toLowerCase();
      this.character.birth_year = data.birth_year.toLowerCase();
      this.character.gender = data.gender.toLowerCase();
      this.getHomeworld(data.homeworld);
      this.getStarships(data.starships);
    },
    getHomeworld: function (homeworldUrl) {
      let id = homeworldUrl.slice(
        homeworldUrl.indexOf("/planets/") + 9,
        homeworldUrl.length - 1,
      );
      CharacterService.getHomeworld(id)
        .then((response) => {
          this.character.homeworld = response.data.name;
        })
        .catch((error) => console.log(error));
    },
    getStarships: function (starshipsUrl) {
      this.character.starships = [];
      starshipsUrl.forEach((starship) => {
        let id = starship.slice(
          starship.indexOf("/starships/") + 11,
          starship.length - 1,
        );
        CharacterService.getStarship(id)
          .then((response) => {
            this.character.starships.push(response.data.name);
          })
          .catch((error) => console.log(error));
      });
    },
  },
};
</script>
<style scoped>
h1 {
  font-size: 48px;
  color: black;
  letter-spacing: 1px;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: yellow;
}
</style>
