<script setup lang="ts">
import ParagraphBlock from '../atoms/paragraphBlock.vue';
    defineProps<{
      content: string
    }>()
</script>

<template>
  <div class="quoteblock">
    <div class="container">
      <h2>{{ content }}</h2>
    </div>
  </div>
</template>

<style scoped>
.quoteblock{
    background-color: #0e243c;
    min-height: 200px;
    color: white;
    position: relative;
}
.quoteblock h2 {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>