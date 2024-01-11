<template >
<nav id="navbar" class="navbar">
        <ul>
          <li ><router-link class="nav-link scrollto " to="/home">Home</router-link></li>
        
          <li v-if="!token"><router-link class="nav-link scrollto" to="/home/signin"  >Sign in</router-link></li>
          <li v-if="!token"><router-link class="getstarted scrollto" to="/home/signup"  >Get Started</router-link></li>
          <li><span class="nav-link  scrollto mynav"  @click="Profile"  v-if="token">Profile</span></li>
          <li><span class="nav-link  scrollto mynav"  @click="logout"  v-if="token">Logout</span></li>
          
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->
</template>
<script>
import Auth from '../modules/Auth';

export default {
    data() {
        return {
            token : localStorage.getItem("token")
        }
    },
    methods: {
        logout() {
            Auth.logout();
            this.token = null; 
        },
        Profile() {
           this.$router.push('/home/profile/' + this.token);
        }
    },
 
}

</script>
<style>
    .mynav {
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
        font-weight: bold;
        margin-top: -3px;
    }
    .mynav:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 11px;
    left: 0;
    background-color: #fff;
    visibility: hidden;
    width: 0px;
    transition: all 0.3s ease-in-out 0s;
}

.mynav:hover:before{
    visibility: visible;
    width: 100%;
}
    .mynav:hover{
        color: #fff;
    }
</style>