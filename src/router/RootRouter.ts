import Login from '../views/Login/LoginPage.vue';
import FindPw from '../views/FindPw/FindPwPage.vue';
import MainFrame from '../views/MainFrame/MainFrame.vue';
import Dashboard from '../views/Dashboard/DashboardPage.vue';
import List from '../views/List/ListPage.vue';
import Add from '../views/Add/AddPage.vue';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login',
        name: 'RootRouter'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/fpw',
        component: FindPw
    },
    {
        path: '/main',
        component: MainFrame,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'list',
                component: List,
            },
            {
                path: 'add',
                component: Add,
            }
        ]
    },
]

export default routes;