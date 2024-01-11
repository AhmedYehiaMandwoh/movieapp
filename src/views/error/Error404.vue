<template>
  <main>
    <div class="error">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 text-center">
            <img src="https://script.viserlab.com/viserbus/assets/errors/images/error-404.png" alt="image">
            <h2 class="title"><b>404</b> Page not found</h2>
            <p>page you are looking for doesn't exit or an other error occured <br> or temporarily unavailable.</p>
            <router-link to="/" class="cmn-btn mt-4">Go to Home</router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- <Footer /> -->
</template>



<style>
.error h2,
.error p,
.error a
{
  color: white;
}
.error a {
  text-decoration: underline;
}
</style>