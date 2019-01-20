<template>
    <div id="capabilities" class="contentBox" slot="content">
        <p>
            <b>AT THIS VERY MOMENT</b>, you are able to do the following:
            <CapabilityQuestion v-for="question in questions"/>
        </p>
    </div>
</template>

<script>

import CapabilityQuestion from './CapabilityQuestion.vue';

export default {
    name: 'Capabilities',
    props: [''],
    components: {
        CapabilityQuestion,
    },  
    data: function() {
         return {
             questions: [
                 "Question 1",
                 "Question 2",
                 "Questioni 3",
             ]
         }
    },
}
</script>

<style scoped>
</style>