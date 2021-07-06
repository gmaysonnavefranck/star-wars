<template>
  <nav class="nav-bar">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-3">
          <div class="title">
            <router-link
              :to="{
                name: 'CharacterList',
                params: {},
              }"
            >
              <h1>Star Wars</h1>
              <h2>Characters</h2>
            </router-link>
          </div>
        </div>
        <div class="col-6 spacer" />
        <div class="col-4 mt-5 col-md-auto">
          <ul>
            <li>
              <router-link
                :to="{
                  name: 'CharacterDetails',
                  params: { _id: -1 },
                }"
                >Random Character</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
h1 {
  font-size: 48px;
  color: black;
  letter-spacing: 1px;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: yellow;
  margin: 0px;
}
h2 {
  font-size: 30px;
  color: white;
  letter-spacing: 4px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a:hover,
li a:visited,
li a:link,
li a:active {
  display: block;
  padding: 8px;
  margin-left: 10px;
  font-family: "Star Jedi", arial;
  font-size: 15px;
  color: yellow;
  justify-content: center;
  text-align: center;
}
.nav-bar {
  background-image: url("~@/assets/images/bg.jpg");
  margin-bottom: 50px;
  border-bottom: 2px solid yellow;
}
@media (max-width: 992px) {
  .spacer {
    display: none;
  }
}
</style>
