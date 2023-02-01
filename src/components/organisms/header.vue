<script setup lang="ts">
    import MainNavigation from '../molecules/mainNavigation.vue';
    import Image from '../atoms/image.vue';
</script>

<template>
  <header class="header">
    <a href ="/">
      <Image imageSrc="/../src/assets/img/logo.jpg" altText="SMDP" />
    </a>
    <MainNavigation />
  </header>
</template>

<style scoped>
.header{
  position: relative;
  display: flex;
}
</style>