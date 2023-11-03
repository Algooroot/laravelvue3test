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
import axios from 'axios';
import { createApp } from 'vue';
import Login from "./components/Login.vue"
// import Dashboard from "./components/Dashboard.vue"

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

const app = createApp({
    components: {
        Login,

    }
})

app.mount("#app")