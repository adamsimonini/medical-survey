<template>
    <div class="menuItem">
        <slot name="innards"></slot>
    </div>
</template>

<script>

export default {
    name: 'MenuItem',
    props: [''],
    data: function() {
            return {
            }
    },
    methods: {
    },
}
</script>

<style scoped>
/* .fas:hover{
    color: purple;
} */

</style>