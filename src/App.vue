<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/organisms/header.vue'
import Footer from './components/organisms/footer.vue'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
main{
  display: block;
  width: 100%;
}
</style>
