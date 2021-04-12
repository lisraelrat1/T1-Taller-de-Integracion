import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        path: "",
        name: "home",
        component: () => import('./views/Home.vue')
    },
    {
        //Veo todas las tesmporadas
        path: '/episodes',
        name: 'episodes-series',
        component: () => import('./views/Seasons.vue'),
    },
    {
        //Vista por episodio
        path: '/episodes/:id',
        name: 'episodes',
        component: () => import('./views/Episodes.vue')
    },
    {
        //Vista por personaje
        path: '/characters',
        name: 'characters',
        component: () => import('./views/Characters.vue'),
    },
    {
        //Vista por personaje
        path: '/quotes',
        name: 'quotes',
        component: () => import('./views/Characters.vue'),
    },

  ];

const router = new VueRouter({
mode: "history",
routes
});

export default router;