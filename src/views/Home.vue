<template>
  <b-container>

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
      :imglink="dataModal.imgLink"
      :username="dataModal.username"
      :quote="dataModal.quote"
      :date="getFormatDate()"
      :commentdata="dataModal.commentdataa"
    ></Desktopmodal>
  </b-modal>

  <!-- mobile modal -->
  <b-modal id="modal-scrollable" v-model="modalMobileShow" scrollable title="Comment" :hide-footer="true" centered>
    <Mobilemodal
      :imglink="dataModal.imgLink"
      :username="dataModal.username"
      :quote="dataModal.quote"
      :date="getFormatDate()"
      :commentdata="dataModal.commentdataa"
    ></Mobilemodal>
  </b-modal>

  </b-container>
</template>

<script>
import Card from '../components/Card'
import Desktopmodal from '../components/Desktopmodal'
import Mobilemodal from '../components/Mobilemodal'
import moment from 'moment'

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
      modalDesktopShow: false,
      modalMobileShow: false,
      datas: [],
      dataModal:{
        imgLink: 'https://storage.googleapis.com/qmage/1573180391153-syahrini.jpg',
        username: 'dipadana',
        quote: "I love a lot of things, and I'm pretty much obsessive about most things I do, whether it be gardening, or architecture, or music. I'd be an obsessive hairdresser.",
        date: "2019-11-08T02:33:15.649Z",
        commentdataa: [
    {
      "_id": "5dc4d475c9b8600e5091ba5d",
      "author": "panji",
      "msg": "panji keren"
    }
  ]
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
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
    trigerModal(){
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