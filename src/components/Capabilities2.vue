<template>
    <div id="capabilities" class="contentBox" slot="content">
        <p>
            <b>AT THIS VERY MOMENT</b>, with what degree of difficulty can you do the following:
            <CapabilityQuestion v-for="(question, i) in questions" v-bind:questions="questions[i].name" v-bind:index="questions[i].index"/>
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
                    {name: "Get in and out of a car, bus, train, or airplane", index: "h"},
                    {name: "Walk two miles", index: "i"},
                    {name: "Participate in sports and games as you would like", index: "j"},
                    {name: "Get a good night’s sleep", index: "k"},
                    {name: "Deal with feelings of anxiety or being nervous", index: "l"},
                    {name: "Deal with feelings of depression or feeling blue", index: "m"},
             ]
         }
    },
}
</script>

<style scoped>
</style>