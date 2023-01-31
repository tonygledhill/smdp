<script setup lang="ts">
    defineProps<{
        title: string,
        videoSrc: string
    }>()
</script>

<template>
    <div class="videoblock">
        <div class="container">
            <h1>{{ title }}</h1>     
            <video width="320" height="240" controls>
            <source :src="videoSrc" type="video/mp4">
            Your browser does not support the video tag.
            </video>
        </div>
    </div>
</template>

<style scoped>
.videoBlock{
    display: flex;
}

.videoBlock video{
    object-fit: contain;
    align-self: flex-start;
}
</style>