<template>
  <b-navbar class="bg-darker" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand @click.prevent="toHome" href="#" class="ml-3">Qmage</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse class="ml-3" id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-button class="btn-sm" variant="light" @click="uploadForm">
          Upload
          <i class="fas fa-upload ml-1"></i>
        </b-button>
        <b-button class="btn-sm ml-2" variant="light" @click="toMyImage()">
          My Image
          <i class="far fa-image fa-lg ml-1"></i>
        </b-button>
        <b-button class="btn-sm ml-2" variant="danger" @click="logout">Logout</b-button>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto mr-2">
        <b-nav-form @submit.prevent="searchByTag">
          <b-form-input v-model="tag" size="sm" class="mr-sm-2" placeholder="Search tags.."></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" variant="light" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      tag: ''
    };
  },
  methods: {
    searchByTag () {
      // console.log(this.tag);
      this.$emit('searchtag', this.tag)
      this.tag = ''
    },
    uploadForm() {
      this.$emit("showupload", "upload");
    },
    toMyImage() {
      console.log("masuk")
      this.$emit("showimage", "myimage")
<<<<<<< HEAD
=======
    },
    toHome() {
      this.$emit('tohome', 'home')
    },
    logout() {
      this.$emit('logout')
>>>>>>> ba7a0005e82e26c019cf621daf55071524eaf6d2
    }
  }
};
</script>
<style>
</style>