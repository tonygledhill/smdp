<script setup lang="ts">
    import anchorLink from '../atoms/anchorLink.vue';
</script>

<template>

<header>
    <nav>
        <ul class="navigation">
            <li><anchorLink css-class="navigation-menu-item" link-title="About" link-url="/about/" /></li>
            <li><anchorLink css-class="navigation-menu-item" link-title="Contact" link-url="/contact/" /></li>
            <li><anchorLink css-class="navigation-menu-item" link-title="consultancy" link-url="/consultancy/" /></li>
            <li><anchorLink css-class="navigation-menu-item" link-title="Sales Campaigns" link-url="/sales-campaigns/" /></li>
            <li>
                <a href="javascript:void(0);" class="navigation-menu-item" aria-hasmenu="true">Training programmes</a>
                <ul class="mega-menu">
                    <li>
                            <anchorLink css-class="navigation-menu-header" link-title="Sales Directors" link-url="/sales-directors/" />
                            <ul class="menu menu-list">
                                <li><anchorLink css-class="mega-menu-item" link-title="Leading the sales team" link-url="/sales-directors/leading-the-sales-team/" /></li>
                                <li><anchorLink css-class="mega-menu-item" link-title="Developing a strategic plan" link-url="/sales-directors/develop-a-strategic-plan/" /></li>
                                <li><anchorLink css-class="mega-menu-item" link-title="Coaching and mentoring" link-url="/sales-directors/coaching-and-mentoring/"/></li>
                            </ul>
                    </li>
                    <li>
                            <anchorLink css-class="navigation-menu-header" link-title="Sales Manager" link-url="/sales-managers/" />
                            <ul class="menu menu-list">
                                <li><anchorLink css-class="menu-link menu-list-link" link-title="Sales activity plans" link-url="/sales-managers/sales-activity-plans/" /></li>
                                <li><anchorLink css-class="menu-link menu-list-link" link-title="Leading A Team Of Sales People" link-url="/sales-managers/leading-a-team-of-sales-people/" /></li>
                                <li><anchorLink css-class="menu-link menu-list-link" link-title="Managing The Performance Of Sales People" link-url="/sales-managers/managing-the-performance-of-sales-people/" /></li>
                            </ul>     
                    </li>
                    <li>      
                            <anchorLink css-class="navigation-menu-header" link-title="Sales People" link-url="/sales-people/" />
                            <ul class="menu menu-list">
                                <li><anchorLink css-class="menu-link menu-list-link" link-title="Sales Process" link-url="/sales-people/sales-process/" /></li>
                                <li><anchorLink css-class="menu-link menu-list-link" link-title="Client Meetings" link-url="/sales-people/client-meetings" /></li>
                                <li><anchorLink css-class="menu-link menu-list-link" link-title="Negotiation Skills" link-url="/sales-people/negotiation-skills" /></li>
                            </ul>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
    </nav>
</header>
</template>

<style scoped>

.navigation{
    border-style: solid black 1px;
}

li{
    list-style-type: none;
    display: inline-block;
}

.mega-menu {
    background-color: aquamarine;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
}

.navigation-menu-item{
    padding: 1rem;
}

.navigation-menu-header{
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: bold;
}

.navigation > li > [aria-hasmenu="true"] ~ ul {
        display: none;
}


.navigation > li:hover > [aria-hasmenu="true"] ~ ul {
        display: block;
}
  
</style>