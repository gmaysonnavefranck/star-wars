import { createRouter, createWebHistory } from "vue-router";
import CharacterList from "@/views/CharacterList.vue";
import CharacterDetails from "@/views/CharacterDetails.vue";

const routes = [
  {
    path: "/",
    name: "CharacterList",
    component: CharacterList,
  },
  {
    path: "/character/:name",
    name: "CharacterDetails",
    props: true,
    component: CharacterDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
