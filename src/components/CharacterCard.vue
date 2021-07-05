<template>
  <router-link
    :to="{
      name: 'CharacterDetails',
      params: { id: character.id, _image: image },
    }"
  >
    <div class="card">
      <div class="card-header">{{ character.name.toLowerCase() }}</div>
      <!-- Bug with the font, everything must be lowercase. -->
      <img :src="image" class="card-img-top" />
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
  data() {
    return {
      image:
        "https://www.estudarfora.org.br/wp-content/webp-express/webp-images/uploads/2018/05/cursos-sobre-Star-Wars-1-768x512.jpg.webp",
    };
  },
};
</script>
<style scoped>
.card {
  background-color: #22282e !important;
  border-radius: 10% !important;
  width: 15rem;
}
.card-header {
  font-size: 15px;
}
.card-img-top {
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
}
</style>
