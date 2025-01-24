import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './assets/views/Confirm.vue'
import OutputPage from './assets/views/Output.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/output',
    name: 'Output',
    component: OutputPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
