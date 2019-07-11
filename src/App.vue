<template>
    <div id="app">
        <router-view />
        <Footer />
    </div>
</template>
<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue"
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Varela+Round&display=swap");
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
@import "./styles/_base.scss";
@import "./styles/_colors.scss";
@import "./styles/_hero-section.scss";
@import "./styles/_support.scss";
@import "./styles/_why.scss";
@import "./styles/_products.scss";
@import "./styles/_newsletter.scss";
@import "./styles/_footer.scss";
@import "./styles/_navbar.scss";
@import "./styles/_signin.scss";
@import "./styles/_reset_password.scss";
@import "./styles/_register.scss";
@import "./styles/_contact.scss";
@import "./styles/_stock.scss";
</style>
