<template>
  <div>
    <Navbar></Navbar>
    <Home v-show="page == 'home'" class="mt-md-5 mt-4"></Home>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Home from './views/Home'

export default {
  data(){
    return{
      page: 'home'
    }
  },
  components:{
    Navbar,
    Home
  }
}
</script>