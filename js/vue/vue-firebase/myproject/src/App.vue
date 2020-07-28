<!-- HTML template -->
<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <h2 style="text-align: center">Menu</h2>
    <Navbar />
    <Blogs />
  </div>
</template>


<script>
import Navbar from './Navbar'
import Blogs from './Blogs'


export default {
  name: 'app',
  components: {
    Navbar,
    Blogs
  },
  data () {
    return {
      title: 'My first Vue app, woo!'
    }
  },
  methods: {

  }
}
</script>

<style>
h1{
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
