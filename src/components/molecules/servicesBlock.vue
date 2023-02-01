<script setup lang="ts">

</script>

<template>
    <div class="servicesBlock">
        <div class="container">
            <h1>What we do</h1>
            <p>We help business owners to maximise the productivity of their sales teams by creating bespoke training and coaching programmes, which will deliver measurable results.  We can also help you to stimulate sales activity in specific strategically important areas, resulting in increased sales, revenues and profit.</p>
            <p>Meet with us to discuss your specific needs and let us discuss the options available to you and establish if your business will benefit by working with us.</p>

            <div class="row">
                <div class="col-sm-3">
                    <span class="material-symbols-outlined">key</span>
                    <h4>Training</h4>
                    <p>We work with businesses of all sizes to support their planned development plans for key personnel</p>
                </div>
                <div class="col-sm-3">
                    <span class="material-symbols-outlined">subdirectory_arrow_right</span>
                    <h4>Sales Campaigns</h4>
                    <p>We help businesses create campaigns to focus on strategically important products and services</p>
                </div>
                <div class="col-sm-3">
                    <span class="material-symbols-outlined">select_check_box</span>
                    <h4>Consultancy</h4>
                    <p>We guide businesses on how to implement strategies which deliver strategic corporate goals</p>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.servicesBlock{
    text-align: center;
    padding: 2rem 0;
}
.servicesBlock h1{
    font-weight: 800; 
    font-style: normal; 
    line-height: initial; 
    font-stretch: normal;
    font-size: 10em;
}

.servicesBlock p{
    text-align:justify;
    padding:1rem;
}
.row{
    display: flex;
    flex-wrap: wrap;
}

.col-sm-3{
    width: 33.33%;
    padding: 1rem;
    text-align: left;
}


</style>