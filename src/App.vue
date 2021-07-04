<template>
  <div class="title">
    <h1>
      <router-link
        :to="{
          name: 'CharacterList',
          params: {},
        }"
        >Star Wars
        <br />
        Characters
      </router-link>
    </h1>
  </div>
  <router-view />
</template>

<style>
body {
  background-image: url("~@/assets/images/bg.jpg");
}
@font-face {
  font-family: "Star Jedi";
  src: local("Star Jedi"),
    url("~@/assets/fonts/star-jedi.ttf") format("truetype");
}
h1,
h1 a:hover,
h1 a:visited,
h1 a:link,
h1 a:active {
  font-family: "Star Jedi", arial;
  font-size: 48px;
  color: yellow;
  letter-spacing: 1px;
  justify-content: center;
  text-align: center;
}
.title {
  background-color: black;
  border-bottom: 2px solid yellow;
  margin-bottom: 50px;
}
</style>
