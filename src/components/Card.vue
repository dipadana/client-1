<template>
  <div @click="modal()">
    <div class="card">
      <img :src="linkSrc" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title font-card-1">{{ username }}</h4>
        <p class="card-text font-card-2">
          {{ quote }}
        </p>
        <div class="my-1">
          <b-badge v-for="(tag, index) in tags" :key="index" class="my-2 mr-1" variant="secondary"> {{ tag }} </b-badge>
        </div>
        <p class="card-text font-card-1"><small class="text-muted">{{ date }}</small></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    username: String,
    quote: String,
    tags: Array,
    date: String,
    linkSrc: String
  },
  methods:{
    modal(){
      this.$emit('modal_trigger')
      console.log("ma")
    }
  }
}
</script>