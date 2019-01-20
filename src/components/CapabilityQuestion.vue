<template>
    <div id="" class="capability-question">
        <input type="radio" value="Not difficult" v-model="difficulty">
        <label for="Not difficult">Not difficult</label>
        <br>
        <input type="radio" value="A little difficult" v-model="difficulty">
        <label for="A little difficult">A little difficult</label>
        <br>
        <input type="radio" value="Very difficult" v-model="difficulty">
        <label for="Very difficult">Very difficult</label>
        <br>
        <input type="radio" value="Cannot Perform" v-model="difficulty">
        <label for="Cannot Perform">Cannot Perform</label>
        <br>
        <span>Picked: {{ difficulty }}</span>
        <br />
        <br />
    </div>
</template>

<script>

export default {
    name: 'CapabilityQuestion',
    props: [''],
    data: function() {
         return {
            difficulty: '',
         }
    },
}
</script>

<style scoped>
</style>