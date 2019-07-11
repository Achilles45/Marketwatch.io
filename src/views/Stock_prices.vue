<template>
    <div class="stock-wrapper">
         <div class="dashboard">
             <div class="dashboard-left">
                <div class="logo">
                    <h3>Logo Banner</h3>
                </div>
                <div class="news dashboard-links">
                    <button class="dashboard-btn" @click="achilles()"><i class="fa fa-bars icons"></i>&nbsp; Market News</button>
                </div>
                 <div class="news dashboard-links">
                    <button class="dashboard-btn" @click="Intraday()"><i class="fa fa-mobile icons"></i>&nbsp; Intra-day</button>
                </div>
                 <div class="news dashboard-links">
                    <button class="dashboard-btn" @click="achilles()"><i class="fa fa-clock icons"></i>&nbsp; Daily Trade</button>
                </div>
                 <div class="news dashboard-links">
                    <button class="dashboard-btn" @click="achilles()"><i class="fa fa-check-square icons"></i>&nbsp; Daily Adjusted</button>
                </div>
                 <div class="news dashboard-links">
                    <button class="dashboard-btn" @click="achilles()"><i class="fa fa-tv"></i>&nbsp; Weekly Trades</button>
                </div>
                 <div class="news dashboard-links">
                    <button class="dashboard-btn" @click="achilles()"><i class="fa fa-laptop"></i>&nbsp; Monthly Trades</button>
                </div>
             </div>
             <div class="dashboard-right">
                 <div class="dashboard-right--header">
                   {{info.id}}
                 </div>
             </div>
         </div>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Axios from 'axios';
export default {
    name: 'Stock_prices',
    components:{
        Navbar
    },
    data(){
        return{
            info: null,
        }
    },
    

}
</script>
