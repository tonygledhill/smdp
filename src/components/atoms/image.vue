<script setup lang="ts">

defineProps<{
  imageSrc: string,
  altText: string
}>()
</script>

<template>
  <img :src=imageSrc :alt=altText />
</template>