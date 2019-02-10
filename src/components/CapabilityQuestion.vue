<template>
    <div id="" class="capability-question">
        <h3><span>{{index}}. </span>{{questions}}</h3>
        <div class="answersBox">
            <label class="radioLabel" for="Not difficult">
                <input type="radio" value="0" v-model="difficulty" />No difficulty
                <!-- <span class="customRadio"></span> -->
            </label>
            <label class="radioLabel" for="A little difficult">
                <input type="radio" value="1" v-model="difficulty" />Low difficulty
                <!-- <span class="customRadio"></span> -->
            </label>
            <label class="radioLabel" for="Very difficult">
                <input type="radio" value="2" v-model="difficulty" />High difficulty
                <!-- <span class="customRadio"></span> -->
            </label>
            <label class="radioLabel" for="Cannot Perform">
                <input type="radio" value="3" v-model="difficulty" />Cannot Perform
                <!-- <span class="customRadio"></span> -->
            </label>
        </div>
        <br />
            <!-- <span>Picked: {{ difficulty }}</span> -->
    </div>
</template>

<script>

export default {
    name: 'CapabilityQuestion',
    props: ['questions', 'index'],
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
.radioLabel{
    display:block;
    cursor:pointer;
}

input:checked {
    border-bottom: 1px solid purple;
}
h3{
    font-size: 1.1rem;
    margin: 2vh 0 0 0;
}
</style>