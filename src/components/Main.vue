<template>
  <main id='main'>
    <SideMenu />
    <div>
      <h1>RheumInfo Patient Wellbeing Form</h1>
      <SurveyQuestion class="SurveyQuestion" title="Home">
        <Home slot="content"/>
      </SurveyQuestion>
      <SurveyQuestion class="SurveyQuestion" title="Current Capabilities">
      </SurveyQuestion>
      <!-- <SurveyQuestion class="SurveyQuestion" title="Event Propagation">
      
      </SurveyQuestion>
      <SurveyQuestion class="SurveyQuestion" title="Key & Mouse Modifiers">
      
      </SurveyQuestion> -->
      <SurveyQuestion class="SurveyQuestion" title="Pain in the Past Week">
      </SurveyQuestion>
      <SurveyQuestion class="SurveyQuestion" title="Morning Stiffness">
      </SurveyQuestion>
      <SurveyQuestion class="SurveyQuestion" title="Fatigue">
      </SurveyQuestion>
      <SurveyQuestion class="SurveyQuestion" title="Mood Comparison">
      </SurveyQuestion>
      <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    </div>
  </main>
</template>

<script>
import SideMenu from './SideMenu.vue';
import SurveyQuestion from './SurveyQuestion.vue';
import Home from './Home.vue';

export default {
  name: 'Main',
  components: {
    SideMenu,
    SurveyQuestion,
  },  
  data: function(){
    return {
      modifierChart: '../assets/vue-modifiers.jpg',
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
  max-height: 90vh;
  -webkit-box-shadow: 10px 10px 51px -14px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 51px -14px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 51px -14px rgba(0,0,0,0.75);
}

h1{
  color: var(--primaryColor);
}
</style>
