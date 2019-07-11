<template>
    <div class="main__wrapper">
        <header class="container-fluid">
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
                                <router-link to="/Register" class="nav-link"
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
                <!--End of Navbar section
            ==========================-->
                <!--Hero-section begins here
            ===========================-->
                <section class="hero-section">
                    <div class="hero-section--contents">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="hero-section--left">
                                    <h1>
                                        You can now get access to real time
                                        market data
                                    </h1>
                                    <p>
                                        We provide you with real time data from
                                        stock prices to forex rates, currency
                                        exchange rates, crypto prices and many
                                        others on the go so you can make
                                        informed investment decisions
                                    </p>
                                    <router-link
                                        to="/register"
                                        class="register-btn"
                                        >Create a free Account&nbsp;&nbsp;&nbsp;
                                        <i
                                            class="fa fa-arrow-right register-icon"
                                        ></i
                                    ></router-link>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="hero-section--right">
                                    <img
                                        src="../assets/map2.png"
                                        class="hero-img d-none d-md-block"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!--End of Hero section
            ==========================-->
            </div>
        </header>
        <!--End of Header here
    =================================-->
        <section class="support container-fluid">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
               <h4>We are here to provide you with 24/7 support</h4>
               <p>Reach out to us through media</p>
               <a href=""><i class="fab fa-facebook-square media-icon"></i></a>&nbsp;&nbsp;
               <a href=""><i class="fab fa-twitter media-icon"></i></a>&nbsp;&nbsp;
               <a href=""><i class="fab fa-instagram media-icon"></i></a>&nbsp;&nbsp;
               <a href=""><i class="fab fa-youtube media-icon"></i></a>&nbsp;&nbsp;
              </div>
              <div class="col-md-8">

              </div>
            </div>
          </div>
        </section>
        <!--End od support section
        ===========================-->
        <!--Why us section
        ===========================-->
        <section class="why-us container-fluid">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <h3>Why Choose us?</h3>
              </div>
            </div>
            <div class="row why-contents">
              <div class="col-md-3 realtime-data">
               <i class="fa fa-clock"></i>
               <h4>Realtime Data</h4>
               <p>We aggregate our data from reliable and efficient data providers to make sure we bring you market data that are relevant and as they happen real time</p>
              </div>
              <div class="col-md-3 diverse">
                <i class="fa fa-cubes"></i>
               <h4>Diversity</h4>
               <p>We try as much as possible to make sure you have a lot of options from currency pairs to others while using our platform</p>
              </div>
             <div class="col-md-3 diverse">
                <i class="fa fa-comments"></i>
               <h4>Great customer support</h4>
               <p>You can reach out to us at anytime and our support team is more than ready and waiting to help you through.</p>
              </div>
            </div>
          </div>
        </section>
        <!--End of why-us section
        ==========================-->
        <!--Products section
        ==========================-->
        <section class="products container-fluid">
          <div class="container">
            <div class="row text-center">
              <div class="col-12">
                <h3>What we offer</h3>
                <p>We are top notch in any of the services we offer</p>
              </div>
            </div>
            <div class="row products-contents text-center">
              <div class="col-md-1"></div>
              <div class="col-md-3 forex-quotes">
               <i class="fa fa-graduation-cap"></i>
               <h4>Market Education</h4>
               <p>We provide you with the education and resources on how to trade on financial markets</p>
              </div>
               <div class="col-md-3 forex-quotes">
               <i class="fa fa-coffee"></i>
               <h4>Stock Quotes</h4>
               <p>You get access to stock information on companies real time</p>
              </div>
               <div class="col-md-3 forex-quotes">
              <i class="fa fa-check-circle"></i>
              <h4>Forex Quotes</h4>
              <p>You can visualize how the markets are moving on our platform</p>
              </div>
            </div>
            <div class="row products-contents text-center">
              <div class="col-md-1"></div>
              <div class="col-md-3 forex-quotes">
                <i class="fa fa-mobile"></i>
                <h4>Market New</h4>
                <p>You are provided to up to date news on diverse financial instruments</p>
              </div>
               <div class="col-md-3 forex-quotes">
                 <i class="fa fa-certificate"></i>
               <h4>Crypto Quotes</h4>
               <p>You have access to different cryptocurrencies and their trading behaviour</p>
              </div>
               <div class="col-md-3 forex-quotes">
               <i class="fa fa-globe"></i>
               <h4>Currency Conversion</h4>
               <p>Convert from and to any currency and get accurate values real time.</p>
              </div>
            </div>
          </div>
        </section>
        <!--End of products section
        ==========================-->
        <!--Newsletter section
        ==========================-->
        <section class="newsletter container-fluid">
          <div class="container">
            <div class="row text-center">
              <div class="col-md-3">

              </div>
               <div class="col-md-6 newsletter-contents">
                <h4>Subscribe to our Newsletter</h4>
                <p>We will send you all the latest information as they happen so you stay ahead of the park. We promise we won't spam you</p>
                  <form action="">
                    <div class="row">
                    <div class="col-md-8 col-sx-12 col-xs-12">
                      <input type="text" placeholder="example@gmail.com" class="form-control" required>
                    </div>
                    <div class="col-md-4 col-sx-12 col-xs-12">
                      <button class="newsletter-btn">Subscribe</button>
                    </div>
                    </div>
                  </form>
              </div>
               <div class="col-md-3">
                
              </div>
            </div>
          </div>
        </section>
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Index from "@/components/Index.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: "home",
    components: {
        Index
    }
};
</script>
<style lang="scss">
@import "../styles/_colors.scss";
@import "../styles/_header.scss";
p {
    color: $primary-color;
}
</style>
