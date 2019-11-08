<template>
  <div id="container">
    <i class="fas fa-download fa-5x"></i>
    <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" @vdropzone-success='vsuccess' @vdropzone-error="verror"></vue-dropzone>
    <button class="btn btn-danger" @click="removeAllFiles">Remove All Files</button>
    <button class="btn btn-info" @click="uploadFiles">Upload</button>
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
        url: "http://localhost:3000/contents",
        method: "POST",
        autoProcessQueue: false,
        thumbnailWidth: 200,
        maxFilesize: 1,
        maxFiles: 1,
        headers: { 
          "Content-Type": "multipart/form-data",
          token: localStorage.getItem('token') 
        }
      },
      success: false,
      error: false
    };
  },
  methods: {
    removeAllFiles() {
      this.$refs.myVueDropzone.removeAllFiles();
    },
    uploadFiles() {
      this.$refs.myVueDropzone.processQueue();
    },
    vsuccess (file, response) {
      this.success = true
      console.log(response);
      this.$swal('success', response, 'success')
    },
    verror (file) {
      this.error = true
      console.log(file);
      this.$swal('error', file, 'error')
    }
  }
};
</script>

<style>
#container {
  margin-top: 9%;
  width: 50%;
  margin-left: 25%;
  margin-bottom: 1%;
}
#dropzone {
  padding: 50px;
  text-align: center;
}
#dropzone:hover {
  border: dashed;
}
.fa-download {
  position: absolute;
  margin-left: 22%;
  margin-top: 3%;
}
.btn {
  margin-top: 3%;
}
.dz-message {
  display: none;
}

@media only screen and (max-width: 600px) {
  #container {
    margin-top: 50%;
    width: 70%;
    margin-left: 15%;
  }
  .fa-download {
    margin-left: 26%;
    margin-top: 8%;
  }
  .dz-message {
    padding-top: 90px;
    padding-bottom: 0px;
  }
  .dz-preview.dz-image-preview {
    margin-left: 0px;
  }
}
</style>