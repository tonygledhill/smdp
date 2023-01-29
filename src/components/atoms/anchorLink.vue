<script setup lang="ts">

defineProps<{
  linkUrl: string,
  linkTitle: string
}>()
</script>

<template>
  <a :href=linkUrl>{{ linkTitle}}</a>
</template>