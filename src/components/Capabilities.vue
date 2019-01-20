<template>
    <div id="capabilities" class="contentBox" slot="content">
        <p>
            <b>AT THIS VERY MOMENT</b>, with what degree of difficulty can you do the following:
            <CapabilityQuestion v-for="(question, i) in questions" v-bind:questions="questions[i]"/>
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
                    "Dress yourself, including tying shoelaces and doing buttons",
                    "Get in and out of bed",
                    "Lift a full cup or glass to your mouth",
                    "Walk outdoors on flat ground",
                    "Wash and dry your entire body",
                    "Bend down and pick up clothing from the floor",
                    "Turn faucets on and off",
                    "Get in and out of a car, bus, train, or airplane",
                    "Walk two miles",
                    "Participate in sports and games as you would like",
                    "Get a good night’s sleep",
                    "Deal with feelings of anxiety or being nervous",
                    "Deal with feelings of depression or feeling blue",
             ]
         }
    },
}
</script>

<style scoped>
</style>