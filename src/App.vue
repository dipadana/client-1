<template>

  <div>
    <Navbar v-if="loginStatus" @showupload="changePage" @tohome="changePage" @backHome="changePage" @logout="logout" @searchtag="searchtag" @showimage="changePage"></Navbar>
    <Home ref="home" :keyword="keyword" @emptykeyword="emptykeyword" v-if="page === 'home' && loginStatus" class="mt-md-5 mt-4" @tomyimage="changePage"></Home>
    <UploadForm v-if="page === 'upload' && loginStatus"></UploadForm>
    <MyImage v-if="page === 'myimage'"></MyImage>
    <Login @toregister="changePage" @logged-in="loggedIn" v-if="page === 'login' && !loginStatus"></Login>  
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
      loginStatus: false,
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
    emptykeyword () {
      this.keyword = ''
    },
    searchtag (tag) {
      this.keyword = tag
      this.changePage('home')
    },
    changePage(arg) {
      // console.log("masuk");
      if(this.page==='home' && arg === 'home'){
        if(this.keyword.length>0){
        this.$refs.home.fetchContent(this.keyword)
        } else {
          console.log('masukkkkkkkkkkkkkkkk lahhhhhhhh');
        this.$refs.home.fetchContent()
        }
      }
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
  created () {
    if(localStorage.getItem('token')){
      this.loginStatus = true
      this.changePage('home')
    } else {
      this.changePage('login')
    }
  }
}
</script>
<style>
</style>