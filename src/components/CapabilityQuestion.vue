<template>
    <div id="" class="capability-question">
        <h3>{{questions}}</h3>
        <div class="answersBox">
            <div class="radioButton">            
                <input type="radio" value="Not difficult" v-model="difficulty">
                <label for="Not difficult">No difficulty</label>
            </div>
            <div class="radioButton">            
                <input type="radio" value="A little difficult" v-model="difficulty">
                <label for="A little difficult">Low difficulty</label>
            </div>
            <div class="radioButton">            
                <input type="radio" value="Very difficult" v-model="difficulty">
                <label for="Very difficult">High difficulty</label>
            </div>
            <div class="radioButton">            
                <input type="radio" value="Cannot Perform" v-model="difficulty">
                <label for="Cannot Perform">Cannot Perform</label>
            </div>
        </div>
        <br />
            <!-- <span>Picked: {{ difficulty }}</span> -->
    </div>
</template>

<script>

export default {
    name: 'CapabilityQuestion',
    props: ['questions'],
    data: function() {
         return {
            difficulty: '',
         }
    },
}
</script>

<style scoped>
.answersBox{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.radioButton{
    text-align: left;
}
h3{
    font-size: 1.3rem;
}
</style>