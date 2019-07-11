<template>
    <div class="register--wrapper">
        <Navbar />
        <div class="container">
            <div class="row register-form">
                <div class="col-md-4">

                </div>
                <div class="col-md-4">
                    <div class="form_wrapper">
                        <h3 class="text-center">Get your Account set up in few clicks</h3>
                        <form action="">
                            <div class="form-group">
                                <label for="first_name">First Name</label>
                                <input type="text" class="form-control">
                            </div>
                             <div class="form-group">
                                <label for="last_name">Last Name</label>
                                <input type="text" class="form-control">
                            </div>
                             <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="text" class="form-control">
                            </div>
                             <div class="form-group">
                                <label for="phone_number">Phone Number</label>
                                <input type="text" class="form-control">
                            </div>
                            <button class="register-btn">Register</button>
                        </form>
                    </div>
                </div>
                <div class="col-md-4">
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue"
export default {
    name: 'Register',
    components:{
        Navbar
    }
}
</script>
