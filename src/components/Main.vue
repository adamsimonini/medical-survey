<template>
  <main id='main'>
    <SideMenu class='menu'/>
    <h1 class="header">RheumInfo Patient Wellbeing Form</h1>
    <div class='main-content'>
      <router-view></router-view>
      <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    </div>
    <Pagination class='footer'/>
  </main>
</template>

<script>
import SideMenu from './SideMenu.vue';
import Pagination from './Pagination.vue';

export default {
  name: 'Main',
  components: {
    SideMenu,
    Pagination,
  },  
  data: function(){
    return {
    }
  },
}
</script>

<style scoped>
#main{
  display: grid;
  grid-template-areas:
    'menu header '
    'menu main'
    'menu footer';
  grid-template-columns: 15% 1fr;
  grid-template-rows: 1fr 7fr 1fr;
  grid-gap: 10px;
  border: 2px solid var(--primaryColor);
  border-radius: 10px;
  padding: 2% 0;
  margin: 2% 0;
  /* max-height: 90vh; */
  -webkit-box-shadow: 10px 10px 51px -14px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 51px -14px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 51px -14px rgba(0,0,0,0.75);
}
.main-content{
  grid-area: main;
}
.menu{
  grid-area: menu;
}
.footer{
  grid-area: footer;
}

h1{
  color: var(--primaryColor);
}
h2{
  font-size: 3rem;
}
</style>
