<template>
    <div class="reset__wrapper">
        <Navbar />
        <div class="container-fluid">
            <div class="container">
                <div class="row reset-body">
                    <div class="col-md-4">

                    </div>
                    <div class="col-md-4">
                        <div class="reset-form--wrapper">
                            <form action="">
                                <h3 class="text-center">Enter you email address to reset your password</h3>
                            <div class="form-group">
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="reset_pwd--btn">Reset Password</button>
                            </div>
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
    name:'ResetPassword',
    components:{
        Navbar
    }
}
</script>

<style>

</style>
