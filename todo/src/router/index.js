import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDo from '../components/Todo'
import Done from '../components/Done'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ToDo',
    component: ToDo,
    meta:{ title:'ToDo Home'}
  },
  {
    path: '/done',
    name: 'Done',
    component: Done,
    meta:{ title:'Done Home'}
  },
  
]

const router = new VueRouter({
  mode:'history',
  routes
})
const DEFAULT_TITLE = 'Some Default Title';
router.afterEach((to) => {
        Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router
