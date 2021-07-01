import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "HelloWorld",
        component: HelloWorld,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "About" */ "../components/About.vue")
    }
];

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes,
});

export default router;