import { createRouter, createWebHistory } from '@ionic/vue-router';
import LandingPage from '../views/LandingPage';
import AboutPage from '../views/AboutPage';
import SignupPage from '../views/SignupPage';
import PostsPage from '../views/PostsPage';


const routes = [
  {
    path: '/',
    redirect: '/landing',
  },
  {
    path: '/landing',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/about/:id?',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignupPage
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

  console.log("To=> ", to);
  if (to.name == 'About'){
    next({name: 'Landing'})
  } else next();

});

export default router
