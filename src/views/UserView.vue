<template>
    <div class="card">
      <h3>Actividades de {{ visitedUser }}</h3>
        <div class="input-group input-group-sm">
          <input type="text" class="form-control" v-model="form.title">
          <span class="input-group-btn">
              <button @click="AddTask()" type="button" class="btn btn-info btn-flat">Add</button>
          </span>
        </div>
       <loading-content v-if="loading" />
       <ul v-else class="list">
           <li class="list-item" v-for="(item, index) in UserTasks" :key="item.id">
             <div class="actions">
                <label class="checkcontainer" @click="CheckClick(index)">
                  <input type="checkbox" v-model="UserTasks[index].completed">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="content capitalize">
                {{ item.title }}
              </div>
              <div class="actions">
                <button class="btn btn-red" @click="deleteUserTask(item.id, index)"><span class="close">x</span></button>
              </div>
            </li>
       </ul>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import LoadingContent from '@/components/LoadingContent.vue'
export default {
  name: 'UserView',
  components: {
    LoadingContent
  },
  data () {
    return {
      UserTasks: [],
      loading: true,
      form: {
        title: '',
        completed: false,
        id: 101
      }
    }
  },
  created () {
    this.GetUserTasks()
  },
  computed: {
    ...mapState(['visitedUser'])
  },
  methods: {
    ...mapActions(['apiCall']),
    GetUserTasks () {
      const self = this
      this.apiCall({
        subPath: 'UsersTodos',
        id: this.$route.params.id
      }).then(function (resp) {
        console.log('resp', resp)
        self.UserTasks = resp
        self.loading = false
      })
    },
    checkUserTask () {

    },
    deleteUserTask (id, idx) {
      const self = this
      this.apiCall({
        method: 'DELETE',
        subPath: 'Todos',
        loading: true,
        id: this.$route.params.id
      }).then(function (resp) {
        console.log('resp', resp)
        self.UserTasks.splice(idx, 1)
      })
    },
    CheckClick (index) {
      this.apiCall({
        method: 'UPDATE',
        subPath: 'UserTodo',
        loading: true
      }).then(function (resp) {

      })
    },
    AddTask () {
      const self = this
      this.apiCall({
        method: 'POST',
        subPath: 'Todos',
        data: self.form,
        loading: true
      }).then(function (resp) {
        self.form.title = ''
        console.log('resp', resp)
        self.UserTasks.push(resp)
      })
    }
  }
}
</script>
