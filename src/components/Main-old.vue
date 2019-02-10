<template>
  <main id='main'>
    <SideMenu />
    <div>
      <h1>RheumInfo Patient Wellbeing Form</h1>
      <router-view>

      </router-view>
      <SurveyQuestion class="" title="Home">
        <Home slot="content"/>
      </SurveyQuestion>
      <SurveyQuestion class="" title="Current Capabilities">
        <Capabilities slot="content"/>
      </SurveyQuestion>
      <SurveyQuestion class="" title="Pain in the Past Week">
        <Pain slot="content"/>
      </SurveyQuestion>
      <SurveyQuestion class="" title="Morning Stiffness">
        <Stiffness slot='content' />
      </SurveyQuestion>
      <SurveyQuestion class="" title="Fatigue">
        <Fatigue slot="content"/>
      </SurveyQuestion>
      <SurveyQuestion class="" title="Mood Comparison">
        <Mood slot="content"/>
      </SurveyQuestion>
      <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    </div>
  </main>
</template>

<script>
import SideMenu from './SideMenu.vue';
import SurveyQuestion from './SurveyQuestion.vue';
import Home from './Home.vue';
import Capabilities from './Capabilities.vue';
import Pain from './Pain.vue';
import Fatigue from './Fatigue.vue';
import Mood from './Mood.vue';
import Stiffness from './Stiffness.vue';

export default {
  name: 'Main',
  components: {
    SideMenu,
    SurveyQuestion,
    Home,
    Capabilities,
    Pain,
    Fatigue,
    Mood,
    Stiffness,
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
  grid-template-columns: 15% 1fr;
  grid-template-rows: auto;
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

h1{
  color: var(--primaryColor);
}
h2{
  font-size: 3rem;
}
</style>
