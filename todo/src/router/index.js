import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDo from '../components/Todo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ToDo',
    component: ToDo,
    meta:{ title:'ToDo Home'}
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
