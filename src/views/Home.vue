<template>
  <b-container>
    <!-- <b-row>

      <b-col md="3">
        <Card></Card>
      </b-col>

      <b-col md="3">
        <Card></Card>
      </b-col>

      <b-col md="3">
        <Card></Card>
      </b-col>

      <b-col md="3">
        <Card></Card>
      </b-col>

    </b-row> -->

  <b-card-group columns>
    
    <Card
    username="theNyanNyan"
    quote="You've gotta dance like there's nobody watching,
            Love like you'll never be hurt,
            Sing like there's nobody listening,
            And live like it's heaven on earth"
    :tags="['Love','Passion','Compassion']"
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

  <b-modal class="p-0" id="modal-xl" centered v-model="modalShow" size="xl" :hide-header="true" :hide-footer="true" title="Extra Large Modal">
    <b-row no-gutters>
      <b-col cols="0" md="7">
        <img src="https://placekitten.com/1000/1000" class="modal-img-width">
      </b-col>
      <b-col cols="12" md="5">
        <b-container class="h-100" style="padding-left:33px; padding-right:33px;">
          <b-row class="h-100">
          <b-col cols="12" class="pt-4">
            <b-col class="comment-section overflow-auto">
              <h5 class="mt-3 mb-2 font-card-1"> <b>Dipaadna</b> </h5>
              <p class="font-card-2 mb-2">You've gotta dance like there's nobody watching,
                  Love like you'll never be hurt,
                  Sing like there's nobody listening,
                  And live like it's heaven on earth</p>
              <p class="card-text font-card-1 mb-4"><small class="text-muted">Wed, 20 May 2019</small></p>
              <hr class="border-secondary"/>
              <!-- Comment Section Here -->
              <div style="margin-top:30px">
                <p class="mb-2"><b class="font-card-1">theNyanNyan</b> <span>LOLOLOLOL</span></p>
                <p class="mb-2"><b class="font-card-1">itJoel</b> <span>Cute!</span></p>
                <p class="mb-2"><b class="font-card-1">Kirakria</b> <span>Love that</span></p>
                <p class="mb-2"><b class="font-card-1">Asuna</b> <span>Really like that</span></p>
                <p class="mb-2"><b class="font-card-1">Kirito</b> <span>So abdorable</span></p>
                <p class="mb-2"><b class="font-card-1">theNyanNyan</b> <span>LOLOLOLOL</span></p>
                <p class="mb-2"><b class="font-card-1">itJoel</b> <span>Cute!</span></p>
                <p class="mb-2"><b class="font-card-1">Kirakria</b> <span>Love that</span></p>
                <p class="mb-2"><b class="font-card-1">Asuna</b> <span>Really like that</span></p>
                <p class="mb-2"><b class="font-card-1">Kirito</b> <span>So abdorable</span></p>
                <p class="mb-2"><b class="font-card-1">theNyanNyan</b> <span>LOLOLOLOL</span></p>
                <p class="mb-2"><b class="font-card-1">itJoel</b> <span>Cute!</span></p>
                <p class="mb-2"><b class="font-card-1">Kirakria</b> <span>Love that</span></p>
                <p class="mb-2"><b class="font-card-1">Asuna</b> <span>Really like that</span></p>
                <p class="mb-2"><b class="font-card-1">Kirito</b> <span>So abdorable</span></p>
                <p class="mb-2"><b class="font-card-1">theNyanNyan</b> <span>LOLOLOLOL</span></p>
                <p class="mb-2"><b class="font-card-1">itJoel</b> <span>Cute!</span></p>
                <p class="mb-2"><b class="font-card-1">Kirakria</b> <span>Love that</span></p>
                <p class="mb-2"><b class="font-card-1">Asuna</b> <span>Really like that</span></p>
                <p class="mb-2"><b class="font-card-1">Kirito</b> <span>So abdorable</span></p>
              </div>

            </b-col>
            

          </b-col>

          <b-col cols="12" align-self="end">
            <b-col>
              <div>
                <b-input-group
                class="mb-3"
                >
                <b-form-input></b-form-input>
                <b-input-group-append>
                  <b-button size="sm" text="Button" variant="dark">Comment</b-button>
                </b-input-group-append>
                </b-input-group>
              </div>
            </b-col>
          </b-col>

          

          </b-row>
        </b-container>
      </b-row>
    </b-row>
  </b-modal>


  </b-container>
</template>

<script>
import Card from '../components/Card'

export default {
  components:{
    Card
  },
  data(){
    return{
      window: {
        width: 0,
        height: 0
      },
      modalShow: false
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
    hideModal() {
      this.modalShow = false
    },
    showModal(){
      this.modalShow = true
    },
    trigerModal(){
      if(this.window.width <= 500){
        this.hideModal()
      }
      else{
        console.log("masuk di bapak")
        this.showModal()
      }
      this.showModal()
    }
  },
  watch: {
    'window.width':function(){
      if(this.window.width < 500){
        this.hideModal()
      }
    }
  }
}
</script>

<style>

</style>