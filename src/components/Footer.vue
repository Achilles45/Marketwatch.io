<template>
    <footer class="container-fluid">
        <div class="container">
           <div class="row footer-contents">
               <div class="col-md-4">
                  <h4>Company</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, tenetur? Voluptas earum fugit nihil vero voluptatum vitae doloremque dolorem, expedita ducimus placeat at quasi eaque error quis, quibusdam facilis aperiam ullam consequuntur maxime totam quidem.</p>
               </div>
               <div class="col-md-4">
                   <h4>Contact Details</h4>
                  <p> <i class="fa fa-envelope"></i>&nbsp; Email<br />support@marketwatch.io</p>
                  <p><i class="fa fa-home"></i>&nbsp; Office Address: <br />8 Adani Road, Off NYSC Orientation Camp, Enugu, Enugu State, Nigeria</p>
                  <p> <i class="fa fa-phone"></i>&nbsp; Phone: <br />08103515205</p>
                  <p> <i class="fa fa-clock"></i>&nbsp; Working Hours:<br /> Mondays to Fridays 9.00 am to 4.00pm<br >Saturdays and Sundays, 3pm to 6pm</p>
               </div>
               <div class="col-md-4">
                   <h4>Mission Statement</h4>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto magni placeat, laboriosam unde suscipit iste.</p>
               </div>
           </div>
           <hr />
           <div class="footer-bottom d-flex d-justify-content-between">
               <div class="footer-bottom--left">
                   &copy; Copyright 2019. All Rights Reserved
               </div>
               <div class="footer-bottom--right">
                   <router-link to="/privacy" class="footer-bottom--links">Privacy Policy</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
                   <router-link to="/terms" class="footer-bottom--links">Terms and Condition</router-link>
               </div>
           </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer',
    data(){
        return{

        }
    }
}
</script>
<style>

</style>
