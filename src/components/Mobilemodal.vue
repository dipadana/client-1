<template>
  <b-container>
    <b-row class="h-100">

      <b-col cols="12" class="pt-4">
        <div class="comment-section overflow-auto">
          <h5 class="mt-3 mb-2 font-card-1"> <b>{{ username }}</b> </h5>
          <p class="font-card-2 mb-2"> {{ quote }} </p>
          <p class="card-text font-card-1 mb-4"><small class="text-muted">{{ date }}</small></p>
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
</template>

<script>
export default {
  name: "Mobilemodal",
  props:{
    username: String,
    quote: String,
    date: String,
    commentdata: Array
  },
  data(){
    return{
      datacomment : 'alal'
    }
  },
  methods:{
    uploadComment(){
      console.log(this.datacomment)
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