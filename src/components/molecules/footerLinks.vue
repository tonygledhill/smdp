<script setup lang="ts">
    import anchorLink from '../atoms/anchorLink.vue';
</script>

<template>
    <ul>
        <li><anchorLink css-class="footer__item" link-title="About" link-url="/about/" /></li>
        <li><anchorLink css-class="footer__item" link-title="Contact" link-url="/contact/" /></li>
        <li><anchorLink css-class="footer__item" link-title="consultancy" link-url="/consultancy/" /></li>
        <li><anchorLink css-class="footer__item" link-title="Sales Campaigns" link-url="/sales-campaigns/" /></li>
    </ul>
</template>

<style scoped>
 </style>