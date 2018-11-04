<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <server-header></server-header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <server-list></server-list>
            </div>
            <div class="col-xs-12 col-sm-6">
                <server-details></server-details>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <server-footer></server-footer>
            </div>
        </div>
    </div>
</template>

<script>
    import ServerList from './ServerList.vue';
    export default {
        components: {
            'server-list': ServerList
        }
    }
</script>

<style>

</style>
