<template>
    <div class="container">
        <server-header></server-header>
        <hr>
        <div class="row">
            <server-list></server-list>
            <server-details></server-details>
        </div>
        <hr>
        <server-footer></server-footer>
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
