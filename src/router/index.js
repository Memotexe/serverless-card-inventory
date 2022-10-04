import { createRouter, createWebHashHistory } from "vue-router";
import AddCard from '../components/AddCard.vue';
import DeleteCard from '../components/DeleteCard.vue';
import Login from '../components/Login.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Login},
        {path: '/card/add', component: AddCard},
        {path: '/card/delete', component: DeleteCard},
    ],
});
