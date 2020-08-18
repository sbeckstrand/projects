<template>
  <div id="app">
    <Navbar/>
    <div v-if="!authenticated">

    </div>

    <div v-if="authenticated">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Firebase from './firebase.js';
import Navbar from './components/Navbar'
import { mapState } from 'vuex'


export default {
  name: 'app',
  components: {
    Navbar
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      authenticated: state => state.user.authenticated
    }),
    firstName(){
      let user = this.$store.state.user
      console.log(user)
      if (user.data.displayName) {
        return user.data.displayName.split(' ')[0]
      }
      return null
    }
  }
}
</script>

<style lang="scss">

</style>
