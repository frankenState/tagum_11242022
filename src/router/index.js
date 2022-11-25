import { createRouter, createWebHistory } from '@ionic/vue-router';
import LandingPage from '../views/LandingPage';
import AboutPage from '../views/AboutPage';
import SignupPage from '../views/SignupPage';
import PostsPage from '../views/PostsPage';
import TabsPage from '../views/TabsPage';
import FirstPage from '../views/subviews/FirstPage';
import SecondPage from '../views/subviews/SecondPage';
import ThirdPage from '../views/subviews/ThirdPage';

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
  },
  {
    path: '/tabs',
    component: TabsPage,
    children: [
      { path: '/', redirect: '/tabs' },
      {
        path: '/tabs/first',
        name: 'tabs_first',
        component: FirstPage,
      },
      {
        path: '/tabs/second',
        name: 'tabs_second',
        component: SecondPage,
      },
      {
        path: '/tabs/third',
        name: 'tabs_third',
        component: ThirdPage,
      },

    ],
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
