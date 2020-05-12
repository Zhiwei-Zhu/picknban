import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/test.vue";
Vue.use(VueRouter);
const routes =[
    {
        path: "/", name: "home", component: Home
    },
    {
        ath: "/dddadad", name: "identification", component: Home
    }
];

const router= new VueRouter({routes});
export default router;