<template>
  <main id='main'>
    <SideMenu />
    <div>
      <h1>RheumInfo Patient Wellbeing Form</h1>
      <SurveyQuestion class="" title="Home">
        <Home slot="content"/>
      </SurveyQuestion>
      <SurveyQuestion class="" title="Current Capabilities">
        <Capabilities slot="content"/>
      </SurveyQuestion>
      <!-- <SurveyQuestion class="SurveyQuestion" title="Event Propagation">
      
      </SurveyQuestion>
      <SurveyQuestion class="SurveyQuestion" title="Key & Mouse Modifiers">
      
      </SurveyQuestion> -->
      <SurveyQuestion class="" title="Pain in the Past Week">
      </SurveyQuestion>
      <SurveyQuestion class="" title="Morning Stiffness">
      </SurveyQuestion>
      <SurveyQuestion class="" title="Fatigue">
      </SurveyQuestion>
      <SurveyQuestion class="" title="Mood Comparison">
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

export default {
  name: 'Main',
  components: {
    SideMenu,
    SurveyQuestion,
    Home,
    Capabilities,
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
  grid-template-columns: 10% 1fr;
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
