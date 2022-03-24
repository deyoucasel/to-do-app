<template>
    <div id="login-container">
      <form class="card" @submit="login">
        <div class="text-center">
          <h2 >T0-D0 APP</h2>
          <h2 >Login</h2>
        </div>
        <label>Usuario:</label>
        <input class="input-field" type="text" name="username" required v-model="form.username">
        <label>Contraseña:</label>
        <input class="input-field" type="password" name="password" required v-model="form.password">
        <input class="btn block" type="submit" value="Iniciar Sesion">
        <div class="text-center">
          <p>by Erick J. Castillo</p>
          <a href="https://github.com/deyoucasel">Github</a>
        </div>
      </form>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'LoginPage',
  watch: {
    isLoggedIn: function (newVal) {
      alert(1)
      this.checkLogin(newVal)
    }
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  created () {
    this.checkLogin(this.isLoggedIn)
  },
  computed: {
    ...mapState(['isLoggedIn'])
  },
  methods: {
    ...mapMutations(['setLogin', 'setIsLoggedIn']),
    checkLogin (newVal) {
      if (newVal || !localStorage.getItem('token')) {
        this.$router.push({ path: '/' })
      } else {
        this.setIsLoggedIn(true)
      }
    },
    login (e) {
      e.preventDefault()
      this.setLogin(this.form)
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss">
  @import "@/assets/scss/style.scss";

  #login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    min-width: 100vw;
    min-height: 100vh;
    width: 100%;
    height: 100%;
}
</style>
