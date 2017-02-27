<template>
    <div>
        <h2>{{msg}}</h2>
        <Son></Son>
    </div>
</template>

<script>
    import Son from './components/Son.vue'
    export default {
        data() {
            return {
                msg: 'hello, vue_component'
            }
        },
        // 注册
        components: {
            Son
        }
    }
</script>

<style>
    h2 {
        color: skyblue;
    }
</style>