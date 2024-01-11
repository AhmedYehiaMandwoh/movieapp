<template>
  <section id="hero" class="d-flex align-items-between">
    <div class="container-fluid aos-init aos-animate" data-aos="fade-up">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-4 d-flex flex-column justify-content-space-around">
          <div class="card p-4">
            <h3 class="title">Welcome to Saudi AZM</h3>
            <p class="text-black">Sign In your Account</p>

            <form @submit.prevent="onSubmit">
              <div class="form-group mt-3">
                <label>Email</label>
                <input type="email" v-model="email" class="form-control"
                  :class="{ 'is-valid': email !== '', 'is-invalid': hasErrEmail }" />
                <div class="invalid-feedback" v-if="hasErrEmail">
                  This field is required
                </div>
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control"
                  :class="{ 'is-valid': password !== '', 'is-invalid': hasErrPass }" />
                <div class="invalid-feedback" v-if="hasErrPass">
                  This field is required
                </div>
              </div>

              <button type="submit" class="btn btn-primary mt-3 btn-block py-3">
                Sign in
              </button>
            </form>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 order-1 order-lg-4 hero-img aos-init aos-animate" data-aos="zoom-in"
          data-aos-delay="150">
          <img src="https://bootstrapmade.com/demo/templates/Techie/assets/img/hero-img.png" class="img-fluid animated"
            alt="">
        </div>
      </div>
    </div>

  </section>
</template>
<script>

import { generateHashPass } from '@/modules/index'
import { usersCollection } from '@/modules/firebase'
import swal from 'sweetalert';

export default {
  data() {
    return {
      hasErrEmail: false,
      hasErrPass: false,
      email: '',
      password: '',
      hashedPassword: '',


    }
  },
  methods: {

    async onSubmit() {
      await generateHashPass(this.password).then((password) => {
        this.hashedPassword = password;
      });

      if (this.email == '') {

        this.hasErrEmail = true;
      }
      else if (this.password == '') {

        this.hasErrPass = true;
      }
      else if (this.email == '' && this.password == '') {

        this.hasErrEmail = true;
        this.hasErrPass = true;
      }
      else if (this.email !== '' && this.password !== '') {

        this.hasErrEmail = false;
        this.hasErrPass = false;
        var vm = this;

        await usersCollection.onSnapshot(async snapshot => {

          const userDoc = await snapshot.docs.find((doc) => doc.data().email === this.email && doc.data().password === this.hashedPassword);

          if (userDoc) {
            console.log(userDoc?.data());
            localStorage.setItem('token', userDoc?.data().token);
            swal({
              title: 'Welcom to our task!',
              text: 'This email already exists',
              icon: 'success',
            });
            vm.$router.push("/home");
          setTimeout(() => {
            window.location.reload();
          },500)

          }
        });

      }


    }

  }
}
</script>
<style>
.title {
  font-size: 26px;
  font-weight: 600;
  color: #733088;
}
</style>
