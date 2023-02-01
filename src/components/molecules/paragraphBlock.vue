<script setup lang="ts">
import ParagraphBlock from '../atoms/paragraph.vue';
    defineProps<{
      content: string
    }>()
</script>

<template>
  <div class="paragraphblock">
    <div class="container">
         <ParagraphBlock :content="content" />
    </div>
 
  </div>
</template>

<style scoped>
</style>