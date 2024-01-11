<template>
  <Header />

  <section id="hero" class="d-flex align-items-between">
    <div class="container-fluid aos-init aos-animate" data-aos="fade-up">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-6 d-flex flex-column justify-content-space-around">
          <div class="card p-4">

            <div class="form-group">

            </div>
            <div class="form-group">
              <div class="imageProfile">
                <img :src="user.profileImage" class="img-fluid" srcset="">
                <button id="fileInputButton" onclick="document.getElementById('fileInput').click()">
                  <i class="fas fa-edit"></i>
                </button>

              </div>
              <input id="fileInput" type="file" style="display:none" 
              accept="image/png, image/jpeg" v-on:change="uploadPersonalImage" />
            </div>

            <div class="form-group mt-3">
              <label>Email</label>
              <input v-model="user.email" class="form-control" type="email" required />
            </div>

            <button type="button" @click="updateUser" class="btn btn-primary py-3 btn-block mt-3">
              Update
            </button>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
import { usersCollection } from '@/modules/firebase'
import Header from '../components/Header.vue'
import swal from 'sweetalert';

const token = localStorage.getItem('token')
export default {
  components: {
    Header
  },
  data() {
    return {

      user: {
        email: '',
        profileImage: 'https://placehold.co/150X150',

      }
    }
  },
  methods: {
    uploadPersonalImage(event) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        this.user.profileImage = reader.result;
      };
    },
    updateUser() {
      const token = localStorage.getItem('token')
      usersCollection.onSnapshot(async snapshot => {
        console.log(this.user);
        const userDoc = await snapshot.docs.find((doc) => doc.data().token === token);
        return usersCollection.doc(userDoc.id).update(this.user)

      });
      swal({
        title: 'Update Profile!',
        text: 'Success!',
        icon: 'success',
      });
    }
  },
  mounted() {
    // Get User Data
    usersCollection.onSnapshot(async snapshot => {
      const userDoc = await snapshot.docs.find((doc) => doc.data().token === token);
      this.user.email = userDoc?.data().email
      this.user.profileImage = userDoc?.data().profileImage
    });
  }
}
</script>
