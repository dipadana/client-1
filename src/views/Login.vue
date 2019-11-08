<template>
  <b-container fluid style="height:100vh;" class="text-white login-bg">
    <b-row style="height:100vh;" class="justify-content-center align-items-center">

    <b-col cols="10" md="6">

    <p class="font-card-1 mb-4 login-page-title">
      <span> <img src="https://image.flaticon.com/icons/svg/148/148813.svg" width="45"> </span>
      QmageLogin
    </p>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
        <p class="mt-1"><small>We'll never share your email with anyone else.</small></p>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          required
          type="password"
          placeholder="Enter password"
        ></b-form-input>
      <p class="mt-1"><small>Don't have an account? <span style="cursor: pointer;" @click="toRegister()">Register here.</span> </small></p>
      </b-form-group>


      <b-button type="submit" variant="light">Login</b-button>
      <b-button type="reset" variant="light">Reset</b-button>
    </b-form>

    </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import axios from '../config/axios'
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        // alert(JSON.stringify(this.form))
        axios({
          method: 'POST',
          url: '/users/login',
          data: {
            email: this.form.email,
            password: this.form.password
          }
        })
        .then(({ data })=> {
          localStorage.setItem('token', data.token)
          localStorage.setItem('name', data.name)
          this.$swal('success', data.message, 'success')
          this.loggedIn()
        })
        .catch(({ response }) => {
          this.$swal('error', response.data.message, 'error')
        })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      toRegister(){
        this.$emit('toregister','register')
      },
      loggedIn () {
        this.$emit('logged-in')
      }
    }
  }
</script>