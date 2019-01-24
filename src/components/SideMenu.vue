<template>
    <div id="menu">
        <MenuItem v-for="(item, i) in menuList">
            <router-link v-bind:to="`${menuList[i].link}`" slot="innards"> 
                <i v-bind:class="`fas fa-${menuList[i].icon}`"></i>
                <p class="menuTitle">{{menuList[i].title}}</p>
            </router-link>
        </MenuItem>
        <!-- <i class="fas fa-walking"></i>
        <i class="fas fa-fire"></i>
        <i class="fas fa-bed"></i> -->
    </div>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
    name: 'Menu',
    props: [''],
    data: function() {
            return {
                menuList:
                    [
                        {icon: 'home', title: 'Home', link: '/'},
                        {icon: 'walking', title: 'Capability', link: '/capabilities'},
                        {icon: 'fire', title: 'Pain', link: '/pain'},
                        {icon: 'bone', title: 'Stiffness', link: '/stiffness'},
                        {icon: 'bed', title: 'Fatigue', link: '/fatigue'},
                        {icon: 'history', title: 'Comparison', link: '/comparison'},
                        {icon: 'smile', title: 'Wellbeing', link: '/wellbeing'},
                    ],
            }
    },
    methods: {
    },
    components: {
        MenuItem,
    }
}
</script>

<style scoped>
#menu{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center; 
    border-right: 1px solid var(--primaryColor);
}

#menu a{
    color: var(--primaryColor);
    text-decoration: none;
}
#menu a:hover{
    color: white;
    text-decoration: none;
}
.fas{
    color: var(--primaryColor);
    font-size: 2.5rem;
}
.menuItem{
    text-align: center;
    width: 100%;
}
.menuItem:hover{
    background-color: var(--primaryColor);
    color: white !important;
    cursor: pointer;
}
.menuItem *:hover{
    color: white !important;
}
.menuItem:hover .fas, .menuItem:hover .menuTitle {
    color: white !important;
}
.menuTitle{
    font-size: calc(10px + 0.5vw);
}
.router-link-active p {
     font-size: calc(16px + 0.5vw) !important;
}
.router-link-active i {
     font-size: calc(40px + 0.5vw) !important;
}
</style>