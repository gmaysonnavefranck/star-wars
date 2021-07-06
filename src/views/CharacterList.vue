<template>
  <div class="characterList">
    <div class="container">
      <div class="row justify-content-md-center">
        <div
          class="col-md-auto mt-4 justify-content-center d-inline-flex"
          v-for="character in characters"
          :key="character.url"
        >
          <CharacterCard :character="character" />
        </div>
      </div>
      <div class="row justify-content-between mt-4">
        <div class="col-2" v-if="previous">
          <router-link
            class="nav"
            :to="{
              name: 'CharacterList',
              params: { id: previous },
            }"
            >Previous</router-link
          >
        </div>
        <div class="col-8"></div>
        <div class="col-2 col-md-auto" v-if="next">
          <router-link
            class="nav"
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
import characterStore from "@/store/characterStore";
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
        this.pagination = this.$route.params.id;
      }
      CharacterService.getCharacters(this.pagination)
        .then((response) => {
          this.characters = response.data.results;
          this.getRoutes(response.data.next, response.data.previous);
          this.addId(this.characters);
          this.addPhoto(this.characters);
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
    addPhoto: function (characters) {
      characters.forEach(function (character) {
        CharacterService.getPhoto(character.name)
          .then((response) => {
            character.photo = response.link;
          })
          .catch(() => (character.photo = characterStore.defaultPhoto));
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

<style scoped>
.nav:hover {
  text-shadow: 0 10px 20px rgba(255, 255, 255, 0.19),
    0 6px 6px rgba(255, 255, 255, 0.23);
}
</style>
