<template>
    <div id="fatigue" class="contentBox" slot="content">
        <p>
            How much of a problem has <b>UNUSUAL</b> fatigue or tiredness been for you <b>OVER THE PAST
            WEEK?</b> Place a mark on the line below
        </p>
        <ToTenRating />
    </div>
</template>

<script>
import ToTenRating from './ToTenRating.vue';

export default {
    name: 'Fatigue',
    props: [''],
    components: {
        ToTenRating
    },  
    data: function() {
         return {
         }
    },
}
</script>

<style scoped>
</style>