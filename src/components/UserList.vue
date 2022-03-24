<template>
    <div class="table" v-if="userList && userList.length > 0">
    <table cellspacing="0" cellpadding="0">
    <thead>
      <tr>
      <td><b>Name</b></td>
      <td><b>Username</b></td>
      <td><b>Email</b></td>
      <td><b>Address</b></td>
      <td><b>Company</b></td>
      <td><b>Options</b></td>
    </tr>
    </thead>
    <tbody>
      <tr v-for="item in userList" :key="item.id">
        <td><b>{{ item.name }}</b></td>
        <td><b>{{ item.username }}</b></td>
        <td><b>{{ item.email }}</b></td>
        <td><b>{{ item.address.city }}, {{` ${item.address.street} ${item.address.suite}` }}</b></td>
        <td><b>{{ item.company.name }}</b></td>
        <td>
          <a :href="'/users/' + item.id + '/todos'" @click.prevent="goTo(item.name, item.id)"><b>View todos</b></a>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    userList: []
  },
  methods: {
    ...mapMutations(['setVisitedUser']),
    goTo (name, id) {
      this.setVisitedUser(name)
      // eslint-disable-next-line eqeqeq
      if (id != 11) {
        this.$router.push('/users/' + id + '/todos')
      } else {
        alert('not allowed, it`s a fake api')
      }
    }
  }
}
</script>
<style scoped lang="scss">
</style>
