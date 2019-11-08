<template>

  <div>
    <Navbar v-show="loginStatus" @showupload="changePage" @backHome="changePage" @logout="logout"></Navbar>
    <Home v-show="page === 'home'" class="mt-md-5 mt-4"></Home>
    <UploadForm v-show="page === 'upload'"></UploadForm>
    <Login @toregister="changePage" @logged-in="loggedIn" v-show="page === 'login'"></Login>
    <Register @loginpage="changePage" @registered="registered" v-show="page === 'register'"></Register>

  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import UploadForm from "./components/UploadForm";
import Login from "./views/Login"
import Register from "./views/Register"

export default {
  data() {
    return {
      page: "login",
      loginStatus: false
    };
  },
  components: {
    Navbar,
    Home,
    UploadForm,
    Login,
    Register
  },
  methods: {

    changePage(arg) {
      // console.log("masuk");
      this.page = arg;
    },
    loggedIn(){
      this.loginStatus = true
      this.changePage('home')
    },
    registered () {
      this.changePage("login")
    },
    logout () {
      localStorage.clear()
      this.changePage('login')
      this.loginStatus = false
    }
  },
  watch: {
    loginStatus () {
      if(this.loginStatus === true) {
        this.changePage('home')
      }
    }
  },
  created () {
    if(localStorage.getItem('token')){
      this.loginStatus = true
    }
  }
};
</script>
<style>
</style>