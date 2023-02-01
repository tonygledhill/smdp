<script lang="ts">
    import anchorLink from '../atoms/anchorLink.vue';
    export default {
    methods: {
    openNav () {
    
        this.$refs.mainNav.display = "none";
      },
      closeNav()
      {
        alert('close the nav')
      }
    }
  }
</script>

<template>  
        <div class="hamburger" v-on:click="openNav()">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
    <div id="mainNav" class="navigation" ref="mainNav">
        <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">&times;</a>
        <div class="navigation__content">
            <ul class="menu">
                <li><anchorLink css-class="navigation-menu-item" link-title="About" link-url="/about/" /></li>
                <li><anchorLink css-class="navigation-menu-item" link-title="Contact" link-url="/contact/" /></li>
                <li><anchorLink css-class="navigation-menu-item" link-title="Consultancy" link-url="/consultancy/" /></li>
                <li><anchorLink css-class="navigation-menu-item" link-title="Sales Campaigns" link-url="/sales-campaigns/" /></li>
                <li><anchorLink css-class="navigation-menu-item" link-title="Training programmes" link-url="/training-programmes/" />
                    <ul>
                        <li><anchorLink css-class="navigation-menu-header" link-title="Sales Directors" link-url="/sales-directors/" />
                            <ul>
                                <li><anchorLink css-class="mega-menu-item" link-title="Leading the sales team" link-url="/sales-directors/leading-the-sales-team/" /></li>
                                <li><anchorLink css-class="mega-menu-item" link-title="Developing a strategic plan" link-url="/sales-directors/develop-a-strategic-plan/" /></li>
                                <li><anchorLink css-class="mega-menu-item" link-title="Coaching and mentoring" link-url="/sales-directors/coaching-and-mentoring/"/></li>
                            </ul>
                        </li>
                        <li>
                            <anchorLink css-class="navigation-menu-header" link-title="Sales Manager" link-url="/sales-managers/" />
                            <ul>
                                <li><anchorLink css-class="menu-link menu-list-link" link-title="Sales activity plans" link-url="/sales-managers/sales-activity-plans/" /></li>
                                <li><anchorLink css-class="menu-link menu-list-link" link-title="Leading A Team Of Sales People" link-url="/sales-managers/leading-a-team-of-sales-people/" /></li>
                                <li><anchorLink css-class="menu-link menu-list-link" link-title="Managing The Performance Of Sales People" link-url="/sales-managers/managing-the-performance-of-sales-people/" /></li>
                            </ul>
                        </li>
                        <li>
                            <anchorLink css-class="navigation-menu-header" link-title="Sales People" link-url="/sales-people/" />
                            <ul>
                                <li><anchorLink css-class="menu-link menu-list-link" link-title="Sales Process" link-url="/sales-people/sales-process/" /></li>
                                <li><anchorLink css-class="menu-link menu-list-link" link-title="Client Meetings" link-url="/sales-people/client-meetings" /></li>
                                <li><anchorLink css-class="menu-link menu-list-link" link-title="Negotiation Skills" link-url="/sales-people/negotiation-skills" /></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
.hamburger{
position: absolute;
z-index: 300;
    right:1em;
    top:1em;
}
.hamburger span{
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #cdcdcd;
    border-radius: 3px;
    z-index: 1;

}
.navigation{
    height: 100%;
  width: 100%;
  display: none;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
}
.navigation__content{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.navigation__content li{
    list-style: none;
}

.navigation__content a{
    text-decoration: none;
    font-size: 2em;
    color: white;
}

.closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

</style>