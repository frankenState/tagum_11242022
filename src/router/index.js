import { createRouter, createWebHistory } from '@ionic/vue-router';
import LandingPage from '../views/LandingPage';


const routes = [
  {
    path: '/',
    redirect: '/landing'
  },
  {
    path: '/landing',
    name: 'Landing',
    component: LandingPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
