<template>
    <div id="pain" class="contentBox" slot="content">
        <p>
            How much <b>PAIN</b> have you had because of your illness in the <b>PAST WEEK</b>? Place a mark
            on the line below to indicate how severe your pain has been:
            *insert slider*
        </p>
    </div>
</template>

<script>

// import CapabilityQuestion from './CapabilityQuestion.vue';

export default {
    name: 'Pain',
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