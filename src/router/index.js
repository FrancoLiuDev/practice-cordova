import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VgaDraw from '@/components/page/Vgadraw'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/vgadraw',
            name: 'VgaDraw',
            component: VgaDraw
        }
    ]
})