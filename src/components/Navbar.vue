<template>
    <div class="nav__wrapper container-fluid">
       <div class="container">
           <nav class="navbar navbar-expand-lg">
                    <router-link to="/" class="navbar-brand">
                        <h4>
                            <i class="fa fa-cloud"></i>&nbsp; Marketwatch.io
                        </h4>
                    </router-link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <router-link to="/about" class="nav-link"
                                    >About</router-link
                                >
                            </li>
                            <li class="nav-item active">
                                <router-link to="/stock_prices" class="nav-link"
                                    >Stock Prices</router-link
                                >
                            </li>
                            <li class="nav-item active">
                                <router-link to="/forex" class="nav-link"
                                    >Forex</router-link
                                >
                            </li>
                            <li class="nav-item active">
                                <router-link to="/crypto" class="nav-link"
                                    >Crypto</router-link
                                >
                            </li>
                            <li class="nav-item active">
                                <router-link to="/register" class="nav-link"
                                    >Register</router-link
                                >
                            </li>
                            <li class="nav-item active">
                                <router-link to="/contact" class="nav-link"
                                    >Contact Us</router-link
                                >
                            </li>
                            <li class="nav-item active">
                                <router-link
                                    to="/sign_in"
                                    class="nav-link sign-in"
                                    >Sign In</router-link
                                >
                            </li>
                        </ul>
                    </div>
                </nav>
       </div>
    </div>
</template>
<script>
export default {
    name:'Navbar',
    data(){
        return{

        }
    }
}
</script>
<style>

</style>
