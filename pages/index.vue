<template>
<section class="container">
  <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
  <h1 class="title">
    {{title}}
  </h1>
  <nuxt-link class="button" to="/about">
    About page
  </nuxt-link>
</section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: undefined
    }
  },
  beforeCreate() {},
  async asyncData() {
    const {
      data
    } = await axios({
      url: '/api',
      method: 'get',
      proxy: {
        host: '127.0.0.1',
        port: 3000
      }
    })
    return {
      title: data.title
    }
  }
}
</script>

<style scoped>
.title {
  margin: 50px 0;
}
</style>
