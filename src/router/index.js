import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '@/containers/About'
import interest from '@/containers/Interest'
import skill from '@/containers/Skill'
import blog from '@/containers/Blog'
import link from '@/containers/Link'
import contact from '@/containers/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: about
  },
  {
    path: '/interest',
    component: interest
  },
  {
    path: '/skill',
    component: skill
  },
  {
    path: '/blog',
    component: blog
  },
  {
    path: '/link',
    component: link
  },
  {
    path: '/contact',
    component: contact
  }
]

const router = new VueRouter({
  routes: routes
})
export default router
