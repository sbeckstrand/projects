<template lang="html">
  <b-container fluid class="px-5">
    <b-row>
      <b-col class="text-center">
        <h2 class="mb-3">{{ page.name }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col col lg="3" md="4" sm="6" cols="12" v-for="n in 10" class="mb-3">
        <b-card
          :title="'Card ' + n.toString()"
          img-alt="Image"
          class="h-100"
        >
          <b-card-text>
            This is an example for {{ n }} card.
          </b-card-text>
        </b-card>
      </b-col>
      <!-- <b-col class="mb-3">
        <b-card
          title="Test"
        >
          <b-card-text>
            Create new {{ page.name }}
          </b-card-text>
        </b-card>
      </b-col> -->
      <b-col col lg="3" md="4" sm="6" cols="12" class="mb-3">
        <b-card
          title="Card 6"
          img-alt="Image"
          class="h-100"
        >
          <b-card-text>
            Create Card sssssssssssss sfa asdf asdf asdf sdf sdf asdfsdf asdf asdf asdf asdf asdf asdf sdfs sdf sdf asdf sdf sdf sdf sdf
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Index",
  props: ['page'],
  methods: {
    create() {
      console.log("Test create item")
    }
  }
}
</script>

<style lang="css" scoped>
</style>
