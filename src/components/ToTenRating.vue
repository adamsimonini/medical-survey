<template>
    <div class="toTenRating">
        <div class="scale">
            <div v-for="(item, i) in 10" v-bind:key="item.id">
                <input type="radio" name="ten" :value=i+1 />
                {{i+1}}
            </div>
        </div>
        <div class="markers">
            <span>Not at all</span>
            <span>Very much</span>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ToTenRating',
    data: function() {
         return {
         }
    },
}
</script>

<style scoped>
.toTenRating{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.scale{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}
.markers{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
}
@media only screen and (max-width: 800px) {
    .scale{
        flex-direction: column;
        height: 100%;
    }
    .markers{
        display: none;
    }
}
</style>