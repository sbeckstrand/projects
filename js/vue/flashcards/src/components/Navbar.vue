<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Flashcards</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav" v-if="!authenticated">
          <a class="nav-item nav-link active" href="#" @click="login">Login</span></a>
      </div>
      <div class="navbar-nav" v-if="authenticated">
        <a class="nav-item nav-link active" href="#">Profile</span></a>
        <a class="nav-item nav-link active" href="#" @click="logout">Logout</span></a>
      </div>
    </div>
  </nav>
</template>

<script>
import Firebase from '../firebase.js';
import { mapState } from 'vuex'

export default {
  name: "Navbar",
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      authenticated: state => state.user.authenticated
    })
  },
  methods: {
    login() {
      Firebase.login();
    },
    logout() {
      Firebase.logout()
    }
  },
  mounted: function() {
    Firebase.auth.onAuthStateChanged( user => {
      if (user) {
        this.$store.state.user.authenticated = true;
        this.$store.commit('setUser', user);
      }
      else {
        this.$store.state.user.authenticated = false;
        this.$store.commit('setUser', '{}');
      }
    })
  }
}
</script>

<style lang="css" scoped>
</style>
