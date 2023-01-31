<script setup lang="ts">
    import FooterLinks from '../molecules/footerLinks.vue';
    import FooterAddress from '../molecules/footerAddress.vue';
</script>

<template>
    <footer>
        <div class="container">
            <FooterAddress />
            <FooterLinks />
        </div>
    </footer> 
</template>

<style scoped>
    footer{
        background-color: lightgrey;
        bottom: 0;
        width:100%;
        min-height:1rem;
        position: relative;  
        flex-grow: 0;
        flex-shrink: 0;
    }
 </style>