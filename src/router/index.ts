import {createRouter, createWebHashHistory} from 'vue-router';

// 路由列表
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/home.vue')
    }
]

// 导出路由
export default createRouter({
    history: createWebHashHistory(),
    routes
})


