<template>
  <div>
  
    <Navbar></Navbar>

    <Home v-show="page == 'home'"></Home>

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

<style>
@import url('https://fonts.googleapis.com/css?family=McLaren&display=swap')


</style>