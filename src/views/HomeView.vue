<template>
  <div >
    <div>
      <button class="btn mb-5" @click="showModal = true">Add new User</button>
    </div>
    <!-- The Modal -->
      <div id="myModal" class="modal" :class="(!showModal)? 'hide' : ''">

        <!-- Modal content -->
        <div class="modal-content">
          <span @click="showModal = false" class="close">&times;</span>
          <p class="pl-10">Add new user</p>
          <form @submit="SaveUser">
            <div class="form-grid">
            <div class="field">
              <label for="">Name</label>
              <input class="input-field" required v-model="form.name" type="text">
            </div>
            <div class="field">
              <label for="">Username</label>
              <input class="input-field" required v-model="form.username" type="text">
            </div>
            <div class="field">
              <label for="">Email</label>
              <input class="input-field" required v-model="form.email" type="text">
            </div>
            <div class="field">
              <label for="">Telf</label>
              <input class="input-field" required v-model="form.phone" type="text">
            </div>
            <div class="field">
              <label for="">Company</label>
              <input class="input-field" required v-model="form.company.name" type="text">
            </div>
            <div class="field">
              <label for="">City</label>
              <input class="input-field" required v-model="form.address.city" type="text">
            </div>
            <div class="field">
              <label for="">Street</label>
              <input class="input-field" required v-model="form.address.street" type="text">
            </div>
            <div class="field">
              <label for="">Suite</label>
              <input class="input-field" required v-model="form.address.suit" type="text">
            </div>
          </div>
          <div class="pl-10">
            <input class="btn" type="submit" value="Save">
          </div>
          </form>
        </div>

      </div>
    <div class="card">
      <h3>Users</h3>
      <loading-content v-if="loading" />
      <user-list v-else :userList="userList" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import UserList from '@/components/UserList.vue'
import LoadingContent from '@/components/LoadingContent.vue'

export default {
  name: 'HomeView',
  components: {
    UserList,
    LoadingContent
  },
  data () {
    return {
      userList: [],
      loading: true,
      showModal: false,
      form: {
        address: {
          street: '',
          suite: '',
          city: ''
        },
        company: {
          name: ''
        },
        email: '',
        id: 11,
        name: '',
        phone: '',
        username: '',
        website: ''
      }
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    ...mapActions(['apiCall']),
    getUserList () {
      const self = this
      this.apiCall({
        subPath: 'Users'
      }).then(function (resp) {
        self.loading = false
        console.log('resp', resp)
        self.userList = resp
      })
    },
    SaveUser: function (e) {
      e.preventDefault()
      const self = this
      this.apiCall({
        subPath: 'Users',
        method: 'POST',
        data: self.form
      }).then(function (resp) {
        self.form = {
          address: {
            street: '',
            suite: '',
            city: ''
          },
          company: {
            name: ''
          },
          email: '',
          id: 11,
          name: '',
          phone: '',
          username: '',
          website: ''
        }
        self.loading = false
        self.showModal = false
        console.log('resp', resp)
        self.userList.push(resp)
      })
    }
  }
}
</script>
