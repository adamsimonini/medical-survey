<template>
    <div id="mood" class="contentBox" slot="content">
        <p>
            Considering all the ways in which illness and health conditions may affect you at this time,
            please make a mark on the line below to show how you are doing:
            *insert slider*
        </p>
    </div>
</template>

<script>

// import CapabilityQuestion from './CapabilityQuestion.vue';

export default {
    name: 'Mood',
    props: [''],
    components: {

    },  
    data: function() {
         return {
         }
    },
}
</script>

<style scoped>
</style>