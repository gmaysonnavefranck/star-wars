<template>
  <router-link
    :to="{
      name: 'CharacterDetails',
      params: { id: character.id },
    }"
  >
    <div class="card" style="width: 15rem">
      <div class="card-header">{{ character.name.toLowerCase() }}</div>
      <!-- Bug with the font, everything must be lowercase. -->
      <img
        src="https://www.estudarfora.org.br/wp-content/webp-express/webp-images/uploads/2018/05/cursos-sobre-Star-Wars-1-768x512.jpg.webp"
        class="card-img-top"
      />
    </div>
  </router-link>
</template>
<script>
export default {
  name: "CharacterCard",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.card {
  background-color: #22282e !important;
  border-color: yellow !important;
}
.card-header {
  font-family: "Star Jedi";
  src: local("Star Jedi"),
    url("~@/assets/fonts/star-jedi.ttf") format("truetype");
  color: yellow;
  justify-content: center;
  text-align: center;
}

.card-header a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
}
</style>
