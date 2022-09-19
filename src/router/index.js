import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from '../components/MainPage.vue';
import AddCard from '../components/AddCard.vue';
import DeleteCard from '../components/DeleteCard.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: MainPage},
        {path: '/card/add', component: AddCard},
        {path: '/card/delete', component: DeleteCard},
    ],
});
