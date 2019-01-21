<template>
    <div id="stiffness" class="contentBox" slot="content">
        <p>
            When you get up in the morning do you feel stiff?  YES  NO
            If you answer NO please go to item number 4.
            If you answer YES, please write the number of minutes: , OR number of hours:
            until you are as limber as you will be for the day?
        </p>
    </div>
</template>

<script>

// import CapabilityQuestion from './CapabilityQuestion.vue';

export default {
    name: 'Stiffness',
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