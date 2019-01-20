<template>
    <div id="menu">
        <MenuItem v-for="(item, i) in menuList">
            <div slot="innards"> 
                <i v-bind:class="`fas fa-${menuList[i].icon}`"></i>
                <p class="menuTitle">{{menuList[i].title}}</p>
            </div>
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
                        {icon: 'home', title: 'Home'},
                        {icon: 'walking', title: 'Capability'},
                        {icon: 'fire', title: 'Pain'},
                        {icon: 'bed', title: 'Fatigue'},
                        {icon: 'smile', title: 'Mood'},
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
.fas{
    color: var(--primaryColor);
    font-size: 3rem;
}
.menuItem{
    text-align: center;
    width: 100%;
}
.menuItem:hover{
    background-color: var(--primaryColor);
    color: white;
    cursor: pointer;
}
.menuTitle{
    font-size: calc(10px + 1vw);
}
</style>