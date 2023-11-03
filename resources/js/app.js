// import './bootstrap';
// window.Vue = require('vue');
// window.axios = require('axios');
//
// Vue.component('login', require('./components/Login.vue').default);
//
// const app = new Vue({
//     el: '#app',
// });

import './bootstrap';

import { createApp } from 'vue';
import Login from "./components/Login.vue"
import Dashboard from "./components/Dashboard.vue"


const app = createApp({
    components: {
        Login,

    }
})

app.mount("#app")