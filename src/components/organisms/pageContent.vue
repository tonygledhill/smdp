<script setup lang="ts">
    import ParagraphBlock from '../molecules/paragraphBlock.vue';
    defineProps<{
        title: string,
        content: string
    }>()
</script>

<template>
    <div class="pageContent">
        <h1>{{ title }}</h1>
        <ParagraphBlock :content="content" />
    </div>
</template>

<style scoped>

</style>