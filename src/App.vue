<template>
  <div>
    <Navbar @showupload="uploadImg"></Navbar>

    <Home v-show="page === 'home'"></Home>
    <UploadForm v-show="page === 'upload'"></UploadForm>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import UploadForm from "./components/UploadForm";

export default {
  data() {
    return {
      page: "home"
    };
  },
  components: {
    Navbar,
    Home,
    UploadForm
  },
  methods: {
    uploadImg(arg) {
      console.log("masuk");
      this.page = arg;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=McLaren&display=swap");
</style>