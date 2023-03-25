import HomePage from "./components/HomePage.vue";
import InfoPage from "./components/InfoPage.vue";
import ErrorPage from "./components/ErrorPage.vue"
import * as VueRouter from 'vue-router';


const routes = [
    { 
        path: '/', 
        component: HomePage,
        name: "homepage"
    },
    { 
        path: '/info/:code', 
        component: InfoPage,
        name: "info"
    },
    { 
        path: "/:catchAll(.*)", 
        component: ErrorPage,
    },

]

const router = VueRouter.createRouter({ 
    history: VueRouter.createWebHistory(),
    routes 
});

export default router;