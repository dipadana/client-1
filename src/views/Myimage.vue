<template>
<<<<<<< HEAD
  <b-container>
=======
  <b-container class="mt-3 mt-md-5">

>>>>>>> 904107daecf9ce83d3014043fc2f59535268cf75
  <b-card-group columns>
    
    <Card
    v-for="(data,index) in datas"
    :key="index"
    :username="data.author"
    :quote="data.quote"
    :tags="data.tags"
    :date="data.createdAt"
    :linkSrc="data.image"
    @modal_trigger="trigerModal(data._id)"
    @click="getId(data._id)"
    ></Card>
    
  </b-card-group>

  <!-- desktop modal -->
  <b-modal class="p-0" id="modal-xl" centered v-model="modalDesktopShow" size="xl" :hide-header="true" :hide-footer="true" title="Extra Large Modal">
    <Desktopmodal
    @refreshmyimage="tomyimage"
      :imglink="dataModal.imgLink"
      :username="dataModal.username"
      :quote="dataModal.quote"
      :id="dataModal.id"
      :date="getFormatDate()"
      :commentdata="dataModal.commentdataa"
      @updatemodal="fetchSingle"
    ></Desktopmodal>
  </b-modal>

  <!-- mobile modal -->
  <b-modal id="modal-scrollable" v-model="modalMobileShow"  scrollable title="Comment" :hide-footer="true" centered>
    <Mobilemodal
    @refreshmyimage="tomyimage"
      :imglink="dataModal.imgLink"
      :username="dataModal.username"
      :quote="dataModal.quote"
      :id="dataModal.id"
      :date="getFormatDate()"
      :commentdata="dataModal.commentdataa"
      @updatemodal="fetchSingle"
    ></Mobilemodal>
  </b-modal>

  </b-container>
</template>

<script>
import Card from '../components/Card'
import Desktopmodal from '../components/Desktopmodal'
import Mobilemodal from '../components/Mobilemodal'
import moment from 'moment'
import axios from '../config/axios';
export default {
  components:{
    Card,
    Desktopmodal,
    Mobilemodal
  },
  data(){
    return{
      window: {
        width: 0,
        height: 0
      },
      selectedId: '',
      modalDesktopShow: false,
      modalMobileShow: false,
      datas: [],
      dataModal:{
        imgLink: '',
        username: '',
        quote: '',
        date: '',
        commentdataa: [],
        id:''
      }
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
    console.log('MASUK DI MYIMAGEEEEE');
    this.fetchContent()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    tomyimage() {
      this.hideDesktopModal()
      this.hideMobileModal()
      this.fetchContent()
    },
    getId (id) {
      this.selectedId = id
      this.fetchSingle()
    },
    fetchSingle () {
      const id = this.selectedId
      axios({
        method: 'GET',
        url: `/contents/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({ data })=> {
        this.dataModal.imgLink = data.image
        this.dataModal.username = data.userId.name
        this.dataModal.quote = data.quote
        this.dataModal.date = data.createdAt
        this.dataModal.commentdataa = data.comments
        this.dataModal.id = data._id
      })
      .catch(({ response })=> {
        this.$swal('error', response.data, 'error')
      })
    },
    fetchContent () {
      axios({
        method: 'GET',
        url: '/contents?type=mypost',
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({ data })=> {
        this.datas = data
      })
      .catch(({ response }) => {
        this.$swal('error', response.data, 'error')
      })
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    hideDesktopModal() {
      this.modalDesktopShow = false
    },
    showDesktopModal(){
      this.modalDesktopShow = true
    },
    hideMobileModal() {
      this.modalMobileShow = false
    },
    showMobileModal(){
      this.modalMobileShow = true
    },
    trigerModal(id){
      console.log(id, 'TRIGGERMODALL');
      this.selectedId = id
      this.fetchSingle()
      if(this.window.width <= 500){
        this.hideDesktopModal()
        this.showMobileModal()
      }
      else{
        this.showDesktopModal()
        this.hideMobileModal()
      }
    },
    getFormatDate(){
      let date = this.dataModal.date
      return moment(date).toNow()
    }
  },
  watch: {
    'window.width':function(){
      if(this.window.width < 500){
        this.hideDesktopModal()
      }
      else{
        this.hideMobileModal()
      }
    }
  }
}
</script>

<style>

</style>