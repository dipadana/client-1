<template>
  <b-container>

  <b-card-group columns>
    
    <Card
    username="theNyanNyan"
    quote="You've gotta dance like there's nobody watching,
            Love like you'll never be hurt,
            Sing like there's nobody listening,
            And live like it's heaven on earth"
    :tags="['Love','Compassion']"
    date="Wed, 29 May 2019"
    linkSrc="https://placekitten.com/500/350"
    @modal_trigger="trigerModal"
    ></Card>

    <Card
    username="Dipadana"
    quote="You know you're in love when you can't fall asleep because reality is finally better than your dreams."
    :tags="['Love','Passion','Compassion']"
    date="Sun, 19 May 2019"
    linkSrc="https://placekitten.com/400/350"
    @modal_trigger="trigerModal"
    ></Card>

    <Card
    username="itJoel"
    quote="I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    :tags="['Love','Passion','Compassion']"
    date="Thurs, 9 May 2019"
    linkSrc="https://placekitten.com/200/150"
    @modal_trigger="trigerModal"
    ></Card>
    
    

    
  </b-card-group>

  <!-- desktop modal -->
  <b-modal class="p-0" id="modal-xl" centered v-model="modalDesktopShow" size="xl" :hide-header="true" :hide-footer="true" title="Extra Large Modal">
    <Desktopmodal
      :imglink="'https://placekitten.com/1000/1000'"
      :username="'Dipadana'"
      :quote="'Youve gotta dance like theres nobody watching,Love like youll never be hurt,Sing like theres nobody listening,And live like its heaven on earth'"
      :date="'Wed, 20 January 2019'"
      :commentdata="commentdataa"
    ></Desktopmodal>
  </b-modal>

  <!-- mobile modal -->
  <b-modal id="modal-scrollable" v-model="modalMobileShow" scrollable title="Comment" :hide-footer="true" centered>
    <Mobilemodal
      :username="'Dipadana'"
      :quote="'Youve gotta dance like theres nobody watching,Love like youll never be hurt,Sing like theres nobody listening,And live like its heaven on earth'"
      :date="'Wed, 20 January 2019'"
      :commentdata="commentdataa"
    ></Mobilemodal>
  </b-modal>

  </b-container>
</template>

<script>
import Card from '../components/Card'
import Desktopmodal from '../components/Desktopmodal'
import Mobilemodal from '../components/Mobilemodal'

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
      commentdataa: [
        {author:"nyanyan",msg:"lolololoolo"},
        {author:"arnoldi",msg:"so cute"},
        {author:"itjoel",msg:"nice"},
        {author:"mardi",msg:"wow!"}
        ]
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