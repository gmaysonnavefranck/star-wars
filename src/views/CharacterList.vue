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
      <div class="row justify-content-between mt-4">
        <div class="col-2" v-if="previous">
          <router-link
            :to="{
              name: 'CharacterList',
              params: { id: previous },
            }"
            >Previous</router-link
          >
        </div>
        <div class="col-8"></div>
        <div class="col-2" v-if="next">
          <router-link
            :to="{
              name: 'CharacterList',
              params: { id: next },
            }"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CharacterCard from "@/components/CharacterCard.vue";
import CharacterService from "@/services/CharacterService.js";

export default {
  props: ["id"],
  name: "CharacterList",
  components: {
    CharacterCard,
  },
  data() {
    return {
      characters: [],
      pagination: "",
      next: null,
      previous: null,
    };
  },
  created() {
    this.init();
  },
  watch: {
    $route() {
      this.init();
    },
  },
  methods: {
    init: function () {
      this.pagination = "";
      if (this.$route.params.id) {
        this.pagination = "/?page=" + this.$route.params.id;
      }
      CharacterService.getCharacters(this.pagination)
        .then((response) => {
          this.characters = response.data.results;
          this.getRoutes(response.data.next, response.data.previous);
          this.addId(this.characters);
        })
        .catch((error) => console.log(error));
    },
    addId: function (characters) {
      characters.forEach(function (character) {
        character.id = character.url.slice(
          character.url.indexOf("/people/") + 8,
          character.url.length - 1,
        );
      });
    },
    getRoutes: function (next, previous) {
      this.next = next ? next.slice(next.indexOf("=") + 1) : null;
      this.previous = previous
        ? previous.slice(previous.indexOf("=") + 1)
        : null;
    },
  },
};
</script>

<style>
a:hover,
a:visited,
a:link,
a:active {
  font-family: "Star Jedi";
  src: local("Star Jedi"),
    url("~@/assets/fonts/star-jedi.ttf") format("truetype");
  color: yellow;
  justify-content: center;
  text-align: center;
  text-decoration: none;
}
</style>
