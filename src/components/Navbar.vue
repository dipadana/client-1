<template>
  <b-navbar class="bg-dark" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand @click="backHome" class="ml-3">Qmage</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse class="ml-0 ml-md-3 mt-2 mt-md-0" id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-button class="btn-sm ml-0 ml-md-2 mt-2 mt-md-0" variant="light" @click="uploadForm">
          Upload
          <i class="fas fa-upload ml-1 fa-lg"></i>
        </b-button>
        <b-button class="btn-sm ml-0 ml-md-2 mt-2 mt-md-0" variant="light">
          My Image
          <i class="far fa-image fa-lg ml-1"></i>
        </b-button>
        <b-button
          class="btn-sm ml-0 ml-md-2 mt-2 mt-md-0"
          variant="danger"
          @click="uploadForm"
        >Logout</b-button>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto mr-2">
        <b-nav-form class="mt-4 mt-md-0">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search tags.."></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" variant="light" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    uploadForm() {
      this.$emit("showupload", "upload");
    },
    backHome() {
      this.$emit("backHome", "home");
    }
  }
};
</script>

<style>
.ml-3:hover {
  cursor: pointer;
}
</style>