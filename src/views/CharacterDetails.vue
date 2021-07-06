<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body ml-6">
        <div class="row" style="height: 300px">
          <div class="col-6 mx-auto">
            <img :src="image" class="img-fluid" />
          </div>
          <div class="col-5">
            <div class="row">
              <h1>Name: {{ character.name }}</h1>
              <h1>Height: {{ character.height }} cm</h1>
              <h1>Mass: {{ character.mass }}</h1>
              <h1>Hair color: {{ character.hair_color }}</h1>
              <h1>Skin color: {{ character.skin_color }}</h1>
              <h1>Eye color: {{ character.eye_color }}</h1>
              <h1>Year of birth: {{ character.birth_year }}</h1>
              <h1>Gender: {{ character.gender }}</h1>
              <h1>Homeworld: {{ character.homeworld }}</h1>
            </div>
            <div class="row">
              <h1 v-for="starship in character.starships" :key="starship">
                Starships: {{ starship }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CharacterService from "@/services/CharacterService.js";
import characterStore from "@/store/characterStore";
export default {
  props: ["_id"],
  data() {
    return {
      character: {},
      image:
        "https://www.estudarfora.org.br/wp-content/webp-express/webp-images/uploads/2018/05/cursos-sobre-Star-Wars-1-768x512.jpg.webp",
      id: undefined,
    };
  },
  created() {
    this.getId();
  },
  watch: {
    $route() {
      this.getId();
    },
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
      if (!isNaN(this.character.mass)) {
        this.character.mass += " Kg";
      }
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
    getId: function () {
      this.id = this.$route.params._id;
      if (typeof this.id === "undefined") {
        return;
      }
      if (this.id < 0) {
        this.id = Math.floor(Math.random() * characterStore.count - 1) + 1;
        this.$router.replace("/character/" + this.id);
        return;
      }
      CharacterService.getCharacter(this.id)
        .then((response) => {
          this.processData(response.data);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style scoped>
h1 {
  color: black;
  letter-spacing: 1px;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: yellow;
}
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 20px;
  }
}
</style>
