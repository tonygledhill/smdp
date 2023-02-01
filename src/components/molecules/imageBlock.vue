<script setup lang="ts">
    defineProps<{
      imageSrc: string
    }>()
</script>

<template>
    <div class="imageBlock">
        <div class="container">
             <img :src="imageSrc" />
        </div>       
    </div>
</template>

<style scoped>
.imageBlock{
    min-height: 200px;
    color: white;
    padding:5rem;
}
.imageBlock img {
    margin: auto;
    display: block;
}
 </style>