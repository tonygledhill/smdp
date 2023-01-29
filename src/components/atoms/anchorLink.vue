<script setup lang="ts">

defineProps<{
  linkUrl: string,
  linkTitle: string,
  cssClass: string
}>()
</script>

<template>
  <a :href=linkUrl :class=cssClass>{{ linkTitle}}</a>
</template>