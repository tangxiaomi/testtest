import Vue from 'vue';
import App from './App.vue';
new Vue({
    el: '#app',
    // render: function(create) { create(App) }
    render: c => c(App)
})