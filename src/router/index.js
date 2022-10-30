import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
import Index from "../views/index.vue";





const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;  