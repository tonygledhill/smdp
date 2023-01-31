<script setup lang="ts">
import ParagraphBlock from '../atoms/paragraphBlock.vue';
    defineProps<{
      title: string,
      content: string
    }>()
</script>

<template>
  <div class="textBanner--fullWidth">
    <div class="container">
      <h1>{{ title }}</h1>
      <ParagraphBlock :content="content" />
    </div>
  </div>
</template>

<style scoped>
.textBanner--fullWidth{
    background-color: #0e243c;
    min-height: 500px;
    color: white;
    position: relative;
}



</style>