import { createRouter, createWebHistory } from "vue-router";
import CharacterList from "@/views/CharacterList.vue";
import CharacterDetails from "@/views/CharacterDetails.vue";

const routes = [
  {
    path: "/:id?",
    name: "CharacterList",
    prosp: true,
    component: CharacterList,
  },
  {
    path: "/character/:_id",
    name: "CharacterDetails",
    props: true,
    component: CharacterDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
}
});

export default router;
