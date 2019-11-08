<template>
  <div>
    <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
    <button @click="removeAllFiles">Remove All Files</button>
    <button @click="uploadFiles">Upload</button>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  name: "app",
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function() {
    return {
      dropzoneOptions: {
        url: "http://localhost:3000/posts",
        method: "POST",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        maxFilesize: 1,
        maxFiles: 1,
        headers: { "Content-Type": "multipart/form-data" }
      }
    };
  },
  methods: {
    removeAllFiles() {
      this.$refs.myVueDropzone.removeAllFiles();
    },
    uploadFiles() {
      this.$refs.myVueDropzone.processQueue();
    }
  }
};
</script>

<style>
</style>