<template lang="html">
  <div class="view-profile">
    <h2>Profile</h2>
    <h3>Profile for {{ userId }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ViewProfile',
  data() {
    return {
      userId: this.$route.params.user_id
    }
  },
  methods: {
    updateUserId() {
      this.userId = this.$route.params.user_id
    }
  },
  watch: {
    $route: 'updateUserId'
  }
}
</script>

<style lang="css" scoped>
</style>
