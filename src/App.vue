<template>

  <div>
    <Navbar v-show="loginStatus" @showupload="changePage" @tohome="changePage" @backHome="changePage" @logout="logout" @searchtag="searchtag" @showimage="changePage"></Navbar>
    <Home :keyword="keyword" v-show="page === 'home'" class="mt-md-5 mt-4" @tomyimage="changePage"></Home>
    <UploadForm v-show="page === 'upload'"></UploadForm>
    <Login @toregister="changePage" @logged-in="loggedIn" v-show="page === 'login'"></Login>
    <Register @loginpage="changePage" @registered="registered" v-show="page === 'register'"></Register>
    <MyImage v-show="page === 'myimage'"></MyImage>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import UploadForm from "./components/UploadForm";
import Login from "./views/Login"
import Register from "./views/Register"
import MyImage from './views/Myimage'
export default {
  data() {
    return {
      page: "home",
      loginStatus: !false,
      keyword: ''
    };
  },
  components: {
    Navbar,
    Home,
    UploadForm,
    Login,
    Register,
    MyImage
  },
  methods: {
    searchtag (tag) {
      console.log(tag, 'DI APPP');
      this.keyword = tag
    },
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