<template>
    <div class='surveySection'>
        <h2 class="sectionTitle" @click="showContent()">{{title}}</h2>
        <div v-show="1==1">
            <slot name="content"></slot>
        </div>
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

.surveySection section{
    margin-left: 5%;
}
.sectionTitle{
    cursor: pointer;
    user-select: none;
}
.sectionTitle:hover{
    cursor: pointer;
    color: purple;
}
</style>
