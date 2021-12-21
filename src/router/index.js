import Vue from 'vue'
import Router from 'vue-router'

import top from '@/components/top'
import room from '@/components/room'
import user from '@/components/user'
import history from '@/components/history'
import system from '@/components/system'
import setting from '@/components/setting'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Top',
            component: top
        },
        {
            path: '/room',
            name: 'Room',
            component: room
        },
        {
            path: '/user/:userId',
            name: 'User',
            component: user
        },
        {
            path: '/room/history',
            name: 'History',
            component: history
        },
        {
            path: '/system',
            name: 'System',
            component: system
        },
        {
            path: '/setting',
            name: 'Setting',
            component: setting
        }
    ]
})
