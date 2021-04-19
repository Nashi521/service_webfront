import Vue from 'vue'
import VueRouter from 'vue-router'
import Entry from '@/layout/Entry.vue'
import Basic from '@/layout/Basic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Entry,
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/about',
    redirect: '/about/index',
    component: Basic,
    children: [
      {
        path: '/about/index',
        component: () => import('@/views/About/index.vue')
      },
      {
        path: '/about/input',
        redirect: '/about/index/1',
        component: () => import('@/views/About/input.vue'),
        children: [
          {
            path: '/about/input/1',
            component: () => import('@/views/About/_form/form1.vue')
          },
          {
            path: '/about/input/2',
            component: () => import('@/views/About/_form/form2.vue')
          },
          {
            path: '/about/input/3',
            component: () => import('@/views/About/_form/form3.vue')
          }
        ]
      },
      {
        path: '/about/upload',
        name: 'upload',
        component: () => import('@/views/About/upload.vue'),
      }
    ]
  },
  {
    path: '/show',
    redirect: '/show/index',
    component: Basic,
    children: [
      {
        path: '/show/index',
        component: () => import('@/views/Show.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
