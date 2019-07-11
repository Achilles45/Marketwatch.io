<template>
    <div class="contact-wrapper">
        <Navbar />
        <div class="contact__contents">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h3>Contact us today!</h3>
                    </div>
                    <div class="col-md-8">
    
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 contact-details">
                       <h5>You can send us a message today</h5>
                       <p>Reach to us today through the message form or any of our social media handle and our support team will get back to you in 24 hours</p>
                       <h5><i class="fa fa-home"></i>&nbsp; Head Office<br /></h5>
                       <p>8 Adani Road, Off NYSC Orientation Camp, Enugu, Enugu State, Nigeria</p><br />
                       <h5><i class="fa fa-clock"></i>&nbsp; Working Hours</h5>
                       <p>Mondays to Fridays<br />9.00am to 4.00pm</p>
                    </div>
                    <div class="col-md-7">
                         <form action="" class="contact-form">
                               <div class="row">
                                   <div class="col-md-12">
                                       <div class="row">
                                           <div class="col-md-6">
                                               <div class="form-group">
                                                   <label for="">First Name</label>
                                                   <input type="text" class="form-control">
                                               </div>
                                           </div>
                                            <div class="col-md-6">
                                               <div class="form-group">
                                                   <label for="">First Name</label>
                                                   <input type="text" class="form-control">
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                                <div class="row">
                                   <div class="col-md-12">
                                       <div class="row">
                                           <div class="col-md-6">
                                               <div class="form-group">
                                                   <label for="">Email Address</label>
                                                   <input type="text" class="form-control">
                                               </div>
                                           </div>
                                            <div class="col-md-6">
                                               <div class="form-group">
                                                   <label for="">Phone Number</label>
                                                   <input type="text" class="form-control">
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <textarea class="form-control" name="" id="" placeholder="Enter your message here..."></textarea>
                               <div class="row">
                                   <div class="col-md-4">
                                       <button class="contact-btn">Submit</button>
                                   </div>
                               </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name:'Contact',
    components:{
        Navbar
    }
}
</script>
