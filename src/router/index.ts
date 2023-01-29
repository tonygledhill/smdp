import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import ConsultancyView from '../views/Consultancy.vue';
import ContactView from '../views/Contact.vue';
import SalesCampaignsView from '../views/SalesCampaigns.vue';
import TrainingProgrammesView from '../views/TrainingProgrammes.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/',
      name: 'consultancy',
      component: ConsultancyView
    },
    {
      path: '/',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/',
      name: 'sales-campaigns',
      component: SalesCampaignsView
    },
    {
      path: '/',
      name: 'training-programmes',
      component: TrainingProgrammesView
    },
  ]
})

export default router
