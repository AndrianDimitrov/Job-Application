import { createRouter, createWebHistory } from 'vue-router';
import AddJobPage from '../components/AddJobPage.vue';
import DisplayJobsPage from '../components/DisplayJobsPage.vue';

const routes = [
  { path: '/', redirect: '/display-jobs' },
  { path: '/add-job', component: AddJobPage },
  { path: '/display-jobs', component: DisplayJobsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
