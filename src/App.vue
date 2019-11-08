<template>
  <div>
    <Navbar @showupload="uploadImg"></Navbar>

    <Home v-show="page == 'home'" class="mt-md-5 mt-4"></Home>
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


