<script setup lang="ts">
    import anchorLink from '../atoms/anchorLink.vue';
    
</script>

<template>  
    <nav class="navbar">
        <ul class="menu">
            <li><anchorLink css-class="navigation-menu-item" link-title="About" link-url="/about/" /></li>
            <li><anchorLink css-class="navigation-menu-item" link-title="Contact" link-url="/contact/" /></li>
            <li><anchorLink css-class="navigation-menu-item" link-title="consultancy" link-url="/consultancy/" /></li>
            <li><anchorLink css-class="navigation-menu-item" link-title="Sales Campaigns" link-url="/sales-campaigns/" /></li>
            <li>
                <a href="javascript:void(0);" class="navigation-menu-item--hasmenu" aria-hasmenu="true">Training programmes</a>
                <ul class="mega-menu">
                    <li>
                        <div class="mega-menu-container">
                            <div class="row">
                                <div class="col-sm-4">
                                    <anchorLink css-class="navigation-menu-header" link-title="Sales Directors" link-url="/sales-directors/" />
                                        <anchorLink css-class="mega-menu-item" link-title="Leading the sales team" link-url="/sales-directors/leading-the-sales-team/" />
                                        <anchorLink css-class="mega-menu-item" link-title="Developing a strategic plan" link-url="/sales-directors/develop-a-strategic-plan/" />
                                        <anchorLink css-class="mega-menu-item" link-title="Coaching and mentoring" link-url="/sales-directors/coaching-and-mentoring/"/>
                                  
                                </div>
                                <div class="col-sm-4">
                                    <anchorLink css-class="navigation-menu-header" link-title="Sales Manager" link-url="/sales-managers/" />
                                    <ul class="menu menu-list">
                                        <li><anchorLink css-class="menu-link menu-list-link" link-title="Sales activity plans" link-url="/sales-managers/sales-activity-plans/" /></li>
                                        <li><anchorLink css-class="menu-link menu-list-link" link-title="Leading A Team Of Sales People" link-url="/sales-managers/leading-a-team-of-sales-people/" /></li>
                                        <li><anchorLink css-class="menu-link menu-list-link" link-title="Managing The Performance Of Sales People" link-url="/sales-managers/managing-the-performance-of-sales-people/" /></li>
                                    </ul> 
                                </div>
                                <div class="col-sm-4">
                                    <anchorLink css-class="navigation-menu-header" link-title="Sales People" link-url="/sales-people/" />
                                    <ul class="menu menu-list">
                                        <li><anchorLink css-class="menu-link menu-list-link" link-title="Sales Process" link-url="/sales-people/sales-process/" /></li>
                                        <li><anchorLink css-class="menu-link menu-list-link" link-title="Client Meetings" link-url="/sales-people/client-meetings" /></li>
                                        <li><anchorLink css-class="menu-link menu-list-link" link-title="Negotiation Skills" link-url="/sales-people/negotiation-skills" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>   
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
</template>

<style scoped>

.navbar{
    display: flex;
    justify-content: center;
}
.navigation-menu-item--hasmenu:hover ~ .mega-menu{
    display:block;
}

.menu{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.menu li {
    margin: 0 1rem;
}

.mega-menu{
    display: none;
    position:absolute;
    top:100%;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: green;
}

.mega-menu-container{
    width:80%;
    margin: 0 auto;
}
.row{
    display: flex;
    flex-wrap: wrap;
}

.col-sm-4{
    width: 33.33%;
    padding: 1rem;
}


</style>