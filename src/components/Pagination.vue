<template>
    <div id="pagination" class="contentBox">
        <div class="text-xs-center">
            <v-pagination
            v-model="page"
            next-icon=">"
            prev-icon="<"
            :length="8"
            color="#988ABF"
            ></v-pagination>
        </div>
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
            routes: null,
            currentPath: this.$router.history.current.path,
            nextPath: this.paginate(),
            page: 1,
        }
    },
    watcher: {

    },
    methods: {
        paginate: function(id){
            // if (!this.paths){
            //     var array = [];
            //     for(var i=0; i < this.$router.options.routes.length; i++){
            //         array.push(this.$router.options.routes[i].path);
            //     }
            //     this.routes = array;
            //     console.log(this.routes);
            // }
            // // console.log(this.$router.history.current.path);
            // var index = this.routes.indexOf(this.currentPath);
            // console.log(index);
            // var nextPage = this.routes [index + 1]
            // console.log(nextPage);
            // this.currentPath = nextPage;
            // window.location.href = '/' + nextPage;
            // return nextPage;
        }
    },
}
</script>

<style scoped>
</style>