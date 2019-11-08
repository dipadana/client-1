<template>
  <div>
    <Navbar v-show="loginStatus" @showupload="changePage" @showimage="changePage"></Navbar>
    <Home v-show="page === 'home'" class="mt-md-5 mt-4"></Home>
    <UploadForm v-show="page === 'upload'"></UploadForm>
    <Login @toregister="changePage" v-show="page === 'login'"></Login>
    <Register @loginpage="changePage" v-show="page === 'register'"></Register>
    <Myimage v-show="page === 'myimage'"></Myimage>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import UploadForm from "./components/UploadForm";
import Login from "./views/Login"
import Register from "./views/Register"
import Myimage from "./views/Myimage"

export default {
  data() {
    return {
      page: "home",
      loginStatus: !false
    };
  },
  components: {
    Navbar,
    Home,
    UploadForm,
    Login,
    Register,
    Myimage
  },
  methods: {
    changePage(arg) {
      console.log("masuk data");
      this.page = arg;
    }
  }
};
</script>


