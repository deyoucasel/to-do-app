<template>
    <div id="login-container" class="register">
        <div class="">
            <form class="card" @submit="RegisterUser">
            <div class="form-group">
                <label for="">Name</label>
                <input type="text" required class="input-field" v-model="form.firstName">
            </div>
            <div class="form-group">
                <div class="">
                    <label for="">Last Name</label>
                </div>
                <input type="text" required class="input-field" v-model="form.lastName">
            </div>
            <div class="form-group">
                <label for="">Email</label>
                <input type="text" required class="input-field" v-model="form.email">
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input type="text" required class="input-field" v-model="form.pass">
            </div>
            <div class="form-group">
                <label for="">Repeat Password</label>
                <input type="text" required class="input-field" v-model="form.repeatPass">
            </div>
            <div class="form-group flex-left">
                <label for="">&nbsp; </label>
                <input type="submit" class="btn" value="Register">
            </div>
        </form>
        </div>
    </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        pass: '',
        repeatPass: ''
      }
    }
  },
  methods: {
    ...mapMutations(['setLogin', 'setIsLoggedIn']),
    ...mapActions(['apiCall']),
    RegisterUser (e) {
      e.preventDefault()
      // eslint-disable-next-line eqeqeq
      if (this.form.pass != this.form.repeatPass) {
        alert('Password did not match')
      } else {
        const self = this
        this.apiCall({
          method: 'POST',
          subPath: 'Register',
          data: self.form,
          loading: true
        }).then(function (resp) {
          console.log('resp', resp)
        })
      }
    }
  }
}
</script>
