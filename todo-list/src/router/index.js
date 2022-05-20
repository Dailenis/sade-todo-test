import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter)

import Home from '@/views/Home.vue'

const routes = [
    {   
        path: "/",  
        name: "Home",    
        component: Home,
        props:{
            state: 'all'
        }    
    },
    {   
        path: "/active",  
        name: "Active",    
        component: Home,
        props:{
            state: 'active'
        }     
    },
    {   
        path: "/completed",  
        name: "Completed",    
        component: Home,
        props:{
            state: 'completed'
        }     
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'selected',
    routes
  })


export default router;