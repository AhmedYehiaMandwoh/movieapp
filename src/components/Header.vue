<template>
    <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center justify-content-between">
            <img :src="require('../../public/logo-white.svg')" alt="" class="logo">
            <Navbar />
        </div>
        
    </header>

</template>
<script>
import Navbar from './Navbar.vue'


export default {
    components: {
        Navbar
    }
}
</script>
<style>
</style>