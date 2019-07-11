import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Sign_in from "./views/Sign_in.vue";
import ResetPassword from "./views/ResetPassword.vue";
import Register from "./views/Register.vue";
import Contact from "./views/Contact.vue";
import Stock_prices from "./views/Stock_prices.vue";
Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/sign_in",
            name: "/sign_in",
            component: Sign_in
        },
        {
            path: "/ResetPassword",
            name: "/ResetPassword",
            component: ResetPassword
        },
        {
            path: "/register",
            name: "/register",
            component: Register
        },
        {
            path: "/Contact",
            name: "/Contact",
            component: Contact
        },
        {
            path: "/Stock_prices",
            name: "/Stock_prices",
            component: Stock_prices
        }
    ]
});
