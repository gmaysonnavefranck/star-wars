<template>
  <router-link
    :to="{
      name: 'CharacterDetails',
      params: { name: character.name, _url: character.url },
    }"
  >
    <div>
      <img
        src="https://www.w3schools.com/images/w3schools_green.jpg"
        alt="W3Schools.com"
        style="width: 104px; height: 142px"
      />
      <span>Name: {{ character.name }}</span>
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
<style></style>
