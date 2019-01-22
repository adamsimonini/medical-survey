<template>
    <div id="comparison" class="contentBox" slot="content">
        <p>
            How do you feel today compared to TWO WEEKS AGO? Please check only one:
             MUCH BETTER(1)  BETTER(2) THE SAME(3) WORSE(4) MUCH WORSE(5)
        </p>
    </div>
</template>

<script>

// import CapabilityQuestion from './CapabilityQuestion.vue';

export default {
    name: 'Fatigue',
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