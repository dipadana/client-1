<template>
  <b-row no-gutters>
    <b-col cols="0" md="7">
      <img :src="imglink" class="modal-img-width">
    </b-col>
    <b-col cols="12" md="5">

      <b-container class="h-100" style="padding-left:33px; padding-right:33px;">
        <b-row class="h-100">

          <b-col cols="12" class="pt-4">
            <div class="comment-section overflow-auto">
              <h5 class="mt-3 mb-2 font-card-1"> <b>{{ username }}</b> </h5>
              <p class="font-card-2 mb-2"> {{ quote }} </p>
              <p class="card-text font-card-1 mb-4"><small class="text-muted">{{ date }} ago </small></p>
              <social-sharing :url="imglink"
              
                      :title="quote"
                      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                      :quote="quote"
                      
                      inline-template>
                      <div>
                <network network="facebook">
                  <i class="fab fa-facebook-square"></i> Facebook
                </network>  
                <network network="twitter">
                  <i class="fab fa-twitter-square ml-2"></i> Twitter
                </network>  
                </div>
              </social-sharing>
               <div style="cursor:pointer;" @click="deleteImage">
                  <i  class="fas fa-trash"></i> delete
                </div>

              <hr class="border-secondary"/>
              <!-- Comment Section Here -->
              <div style="margin-top:30px">
                <p v-for="(data, index) in commentdata" :key="index" class="mb-2">
                  <b class="font-card-1">
                    {{ data.author }}
                  </b>
                  <span class="font-card-3 ml-1">{{ data.msg }}</span>
                </p>
              </div>
            </div>
          </b-col>

          <b-col cols="12" align-self="end">
            <div>
              <b-input-group class="mb-3">
                <b-form-input v-model="datacomment"></b-form-input>
                <b-input-group-append>
                  <b-button @click="uploadComment()" size="sm" text="Button" variant="dark">Comment</b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
          </b-col>

        </b-row>
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
import axios from '../config/axios'
export default {
  name: "Dekstopmodal",
  props:{
    imglink: String,
    username: String,
    quote: String,
    date: String,
    commentdata: Array,
    id: String
  },
  data(){
    return{
      datacomment : ''
    }
  },
  methods:{
    deleteImage() {
      axios({
        method: 'DELETE',
        url: `/contents/${this.id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({ data }) => {
        this.$swal('success', data.message, 'success')
        this.$emit('refreshmyimage')
      })
      .catch(({ response })=> {
        this.$swal('error', response.data, 'error')
      })
    },
    uploadComment(){
        axios({
        method: 'PATCH',
        url: `/contents/${this.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          msg: this.datacomment
        }
      })
      .then(({ data }) =>{
        this.$swal('success', data.message, 'success')
        this.$emit('updatemodal')
      })
      .catch(({ response })=> {
        this.$swal('error', response.data, "error")
      })
    }
  },
  created(){
    console.log(this.commentdata)
    console.log("masuk")
  }
}
</script>

<style>

</style>