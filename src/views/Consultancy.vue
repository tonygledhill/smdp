<script setup lang="ts">
 import QuoteBlock from '../components/molecules/quoteBlock.vue';
 import ImageBlock from '../components/molecules/imageBlock.vue';
</script>

<template>
    <div class="consultancy">
        <div class="container">
            <p>Every business is expert in one or more areas.</p>
            <ul>
                <li>The Products you manufacture</li>
                <li>The Services you offer</li>
                <li>The value you give to your Clients when they buy from your business</li>
            </ul>
            <p>As businesses grow and expand their markets, the sales infrastructure often evolves to meet the specific needs of the time.  A crisis emerges and we fix it quickly.</p>
        </div>
    </div>
    <ImageBlock imageSrc="/src/assets/img/wpf984991c_05_06.jpg" />
    <QuoteBlock content="We bring proven techniques and strategies in Sales Management and Selling to your business" />
    <div class="consultancy">
        <div class="container">
            <p>In many cases, businesses do not have the time to audit the productivity of their Sales Teams - because we are too busy selling.  The risk we run is that the sales organisation created is not as EFFECTIVE as it could be with its time and resources, and it is not as EFFICIENT as it could be when it is in front of your Clients.</p>
            <p>SMDP may not have your specific expertise, but we do have our own.  We understand how to make Sales Organisations more productive and we bring our expertise to you by researching your existing organisation and laying options to improve in front of you, and then supporting our recommendations with experts able to work with your team to implement these strategies for improvement.</p>
        </div>
    </div>
    <QuoteBlock content="HELPING BUSINESSES TO DELIVER BUSINESS GOALS BY IMPROVING YOUR PEOPLE" />
</template>

<style scoped>
.consultancy{
    padding: 4em;
}

.consultancy p{
    padding: 1em;
}

 </style>