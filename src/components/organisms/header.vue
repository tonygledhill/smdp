<script setup lang="ts">
    import MainNavigation from '../molecules/mainNavigation.vue';
    import Image from '../atoms/image.vue';
</script>

<template>
  <header class="header">
    <div class="container">
      <Image imageSrc="/../src/assets/img/logo.jpg" altText="SMDP" />
      <MainNavigation />
    </div>
  </header>
</template>

<style scoped>
.header{
  position: relative;
  background-color: lightgrey;
  display: flex;
}
</style>