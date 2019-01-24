<template>
    <div id="pagination" class="contentBox">
        <button id="back">Back</button>
        <button id="next">NEXT</button>
    </div>
</template>

<script>

export default {
    name: 'Pagination',
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
#pagination{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
#next{
    padding: 20px 50px;
    font-size: 1.1rem;
}
</style>