<template>
  <div class="title">
    <h1>Star Wars</h1>
    <h1>Characters</h1>
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
h1 {
  font-family: "Star Jedi", arial;
  font-size: 48px;
  color: yellow;
  letter-spacing: 1px;
  justify-content: center;
  text-align: center;
}
html {
  margin: 0;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.title {
  background-color: black;
  border-bottom: 2px solid yellow;
  margin-bottom: 60px;
}
</style>
