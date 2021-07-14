import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../components/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About,
    meta:{ title:'About Page'}
  },
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})
const DEFAULT_TITLE = 'Some Default Title';
router.afterEach((to) => {
        Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router
