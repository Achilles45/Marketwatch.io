<template>
<div class="wrapper">
    <Navbar />
    <div class="container-fluid signin">
        <div class="container">
            <div class="row login-form">
                <div class="col-md-4">

                </div>
                 <div class="col-md-4">
                     <div class="form-wrapper">
                         <h3 class="text-center">Sign in to your Account</h3>
                <form action="">
                    <div class="form-group">
                    <label for="user_uid">Username or Email</label>
                    <input type="text" class='form-control' id="user_uid">
                    </div>
                    <div class="form-group">
                    <label for="user_pwd">Password</label>
                    <input type="password" class='form-control' id="user_pwd">
                    </div>
                    <div class="form-group">
                    <button type="submit" class="signin-btn" v-on:click.prevent="validate_login()">Sign In</button>
                    </div>
                  
                        <p><router-link to="./ResetPassword" class="links">Forgot Password?</router-link></p>
                    <p><router-link to="./Register" class="links">Create a free account</router-link></p>
                  
            </form>
        </div>
                </div>
                 <div class="col-md-4">
                    
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
    name: 'Sign_in',
    components:{
        Navbar
    },
    data(){
        return{
          
        }
    },
}
</script>
<style>

</style>
