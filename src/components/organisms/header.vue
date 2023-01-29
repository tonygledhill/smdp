<script setup lang="ts">
    import MainNavigation from '../molecules/mainNavigation.vue';
    import Image from '../atoms/image.vue';
</script>

<template>
  <div class="navigation">
    <Image imageSrc="/../src/assets/img/logo.jpg" altText="SMDP" />
    <MainNavigation />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {

    .navigation{
        width: 100%;
        display:block;
    }


}
</style>