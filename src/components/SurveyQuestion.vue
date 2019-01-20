<template>
    <div class='surveySection'>
        <h2 class="sectionTitle" @click="showContent()">{{title}}</h2>
        <slot name="content"></slot>
    </div>
</template>

<script>
export default {
  name: 'SurveyContainer',
  props: ['title'],
  data: function() {
      return {
          toggler: 2,
      }
  },
  methods: {
      showContent: function(){
          this.toggler++;
      }
  },
}
</script>

<style scoped>
.guide-links{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: red;
  font-weight: 900;
}

.surveySection {
    margin: 0 5%;
}
.sectionTitle{
    cursor: pointer;
    user-select: none;
    font-size: 2rem;
}
.sectionTitle:hover{
    cursor: pointer;
    color: purple;
}
</style>
