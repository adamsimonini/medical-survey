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
                {name: "Dress yourself, including tying shoelaces and doing buttons", index: "a"},
                {name: "Get in and out of bed", index: "b"},
                {name: "Lift a full cup or glass to your mouth", index: "c"},
                {name: "Walk outdoors on flat ground", index: "d"},
                {name: "Wash and dry your entire body", index: "e"},
                {name: "Bend down and pick up clothing from the floor", index: "f"},
                {name: "Turn faucets on and off", index: "g"},
                {name: "Get in and out of a car, bus, train, or airplane", index: "h"},
             ]
         }
    },
}
</script>

<style scoped>
</style>