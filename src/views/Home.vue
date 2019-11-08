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
      :id="dataModal.id"
      :date="getFormatDate()"
      :commentdata="dataModal.commentdataa"
      @updatemodal="fetchSingle"
    ></Desktopmodal>
  </b-modal>

  <!-- mobile modal -->
  <b-modal id="modal-scrollable" v-model="modalMobileShow" scrollable title="Comment" :hide-footer="true" centered>
    <Mobilemodal
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
  props: {
    keyword: String
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
    if(this.keyword){
      this.fetchContent(this.keyword)
    } else {
      this.fetchContent()
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    
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
    fetchContent (tag) {
      let query = ''
      if(tag) query = `?tag=${tag}`
      this.$swal.fire({
              title: 'loading',
              onOpen: ()=>{
                this.$swal.showLoading()
              }
            })
      axios({
        method: 'GET',
        url: `/contents${query}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({ data })=> {
        if(data.length>0) {this.datas = data
        
        }
        else {
          this.$swal('error', 'No data found', 'error')
        }
        this.$swal.close()

      })
      .catch(({ response }) => {
        this.$swal.close()
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
      this.selectedId = id
      console.log("masuk trigger", this.window.width)
      this.fetchSingle()
      if(this.window.width <= 500){
        this.hideDesktopModal()
        this.showMobileModal()
      }
      else{
        console.log('makkan nasi')
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
      if(this.window.width <= 500){
        this.hideDesktopModal()
      }
      else{
        this.hideMobileModal()
      }
    },
    keyword () {
      this.fetchContent(this.keyword)
    }
  }
}
</script>

<style>

</style>