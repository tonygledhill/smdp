import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import ConsultancyView from '../views/Consultancy.vue';
import ContactView from '../views/Contact.vue';
import SalesCampaignsView from '../views/SalesCampaigns.vue';
import TrainingProgrammesView from '../views/TrainingProgrammes.vue';
import SalesDirectors from '../views/SalesDirectors.vue';
import SalesManagers from '../views/SalesManagers.vue';
import SalesPeople from '../views/SalesPeople.vue';
import LeadingTheSalesTeam from '../views/LeadingTheSalesTeam.vue';
import DevelopingAStrategicPlan from '../views/DevelopingAStrategicPlan.vue';
import CoachingAndMentoring from '../views/CoachingAndMentoring.vue';
import SalesActivityPlans from '../views/SalesActivityPlans.vue';
import LeadingATeamOfSalesPeople from '../views/LeadingATeamOfSalesPeople.vue';
import ManagingThePerformanceOfSalesPeople from '../views/ManagingThePerformanceOfSalesPeople.vue';
import SalesProcess from '../views/SalesProcess.vue';
import ClientMeetings from '../views/ClientMeetings.vue';
import NegotiationSkills from '../views/NegotiationSkills.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/consultancy',
      name: 'consultancy',
      component: ConsultancyView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/sales-campaigns',
      name: 'sales-campaigns',
      component: SalesCampaignsView
    },
    {
      path: '/training-programmes',
      name: 'training-programmes',
      component: TrainingProgrammesView
    },
    {
      path: '/sales-directors',
      name: 'sales-directors',
      component: SalesDirectors
    },
    {
      path: '/sales-directors/leading-the-sales-team',
      name: 'leading-the-sales-team',
      component: LeadingTheSalesTeam
    },
    {
      path: '/sales-directors/develop-a-strategic-plan',
      name: 'develop-a-strategic-plan',
      component: DevelopingAStrategicPlan
    },
    {
      path: '/sales-directors/coaching-and-mentoring',
      name: 'coaching-and-mentoring',
      component: CoachingAndMentoring
    },
    {
      path: '/sales-managers',
      name: 'sales-managers',
      component: SalesManagers
    },
    {
      path: '/sales-managers/sales-activity-plans',
      name: 'sales-managers',
      component: SalesActivityPlans
    },
    {
      path: '/sales-managers/leading-a-team-of-sales-people',
      name: 'sales-managers',
      component: LeadingATeamOfSalesPeople
    },
    {
      path: '/sales-managers/managing-the-performance-of-sales-people',
      name: 'sales-managers',
      component: ManagingThePerformanceOfSalesPeople
    },
    {
      path: '/sales-people',
      name: 'sales-people',
      component: SalesPeople 
    },
    {
      path: '/sales-people/sales-process',
      name: 'sales-process',
      component: SalesProcess 
    },
    {
      path: '/sales-people/client-meetings',
      name: 'client-meetings',
      component: ClientMeetings 
    },
    {
      path: '/sales-people/negotiation-skills',
      name: 'sales-people',
      component: NegotiationSkills 
    },
  ]
})

export default router
