<script setup lang="ts">
import anchorLink from '../atoms/anchorLink.vue';
</script>

<template>
    <ul>
        <li><anchorLink link-title="About" link-url="/about/" /></li>
        <li><anchorLink link-title="Contact" link-url="/contact/" /></li>
        <li><anchorLink link-title="consultancy" link-url="/consultancy/" /></li>
        <li><anchorLink link-title="Sales Campaigns" link-url="/sales-campaigns/" /></li>
        <li><anchorLink link-title="Training programmes" link-url="/training-programmes/" />
        <ul>
            <li><anchorLink link-title="Sales Directors" link-url="/sales-directors/" />
                <ul>
                    <li><anchorLink link-title="Leading the sales team" link-url="/sales-directors/leading-the-sales-team/" /></li>
                    <li><anchorLink link-title="Developing a strategic plan" link-url="/sales-directors/develop-a-strategic-plan/" /></li>
                    <li><anchorLink link-title="Coaching and mentoring" link-url="/sales-directors/coaching-and-mentoring/"/></li>
                </ul>      
            </li>
            <li><anchorLink link-title="Sales Manager" link-url="/sales-managers/" />
                <ul>
                    <li><anchorLink link-title="Sales activity plans" link-url="/sales-managers/sales-activity-plans/" /></li>
                    <li><anchorLink link-title="Leading A Team Of Sales People" link-url="/sales-managers/leading-a-team-of-sales-people/" /></li>
                    <li><anchorLink link-title="Managing The Performance Of Sales People" link-url="/sales-managers/managing-the-performance-of-sales-people/" /></li>
                </ul>
            </li>
            <li><anchorLink link-title="Sales People" link-url="/sales-people/" />
                <ul>
                    <li><anchorLink link-title="Sales Process" link-url="/sales-people/sales-process/" /></li>
                    <li><anchorLink link-title="Client Meetings" link-url="/sales-people/client-meetings" /></li>
                    <li><anchorLink link-title="Negotiation Skills" link-url="/sales-people/negotiation-skills" /></li>
                </ul>
            </li>
        </ul>
        </li>
    </ul>
    
</template>