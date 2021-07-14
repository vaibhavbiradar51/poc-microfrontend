import Vue from 'vue'
import VueRouter from 'vue-router'
import Done from '../components/Done'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Done',
    component: Done,
    meta:{ title:'Done Page'}
  },
  
]

const router = new VueRouter({
  routes
})
const DEFAULT_TITLE = 'Some Default Title';
router.afterEach((to) => {
        Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router
