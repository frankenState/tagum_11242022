import { createRouter, createWebHistory } from '@ionic/vue-router';
import LandingPage from '../views/LandingPage';
import AboutPage from '../views/AboutPage';
import SignupPage from '../views/SignupPage';
import PostsPage from '../views/PostsPage';
import TabsPage from '../views/TabsPage';
import FirstPage from '../views/subviews/FirstPage';
import SecondPage from '../views/subviews/SecondPage';
import ThirdPage from '../views/subviews/ThirdPage';
import VuexPostsPage from '../views/VuexPostPage';
import VuexEditPage from '../views/VuexEditPage';
import Login from '../views/authentication/Login';
import Registration from '../views/authentication/Registration';
import Dashboard from '../views/authentication/Dashboard';
import UsersPage from '../views/crud/UsersPage';
import CreateGradePage from '../views/crud/CreateGradePage';

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
    path: '/users',
    name: 'UsersPage',
    component: UsersPage
  },
  {
    path: '/new-grade/:user_id',
    name: 'NewGradePage',
    component: CreateGradePage
  },
  {
    path:'/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/register',
    name: 'RegistrationPage',
    component: Registration,
  },
  {
    path: '/login',
    name: 'Loginpage',
    component: Login
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
    path: '/vuex-posts',
    name: 'VuexPost',
    component: VuexPostsPage
  },
  {
    path: '/vuex-edit-page/:id',
    name: 'VuexEditPage',
    component: VuexEditPage
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

  if (to.name == 'Dashboard' && localStorage.getItem('auth') == null)
    next({ name: 'Loginpage'});
  else if (localStorage.getItem('auth') != null && (to.name == 'RegistrationPage' || to.name == 'Loginpage'))
    next({ name: 'Dashboard' });
  else
    next();
    
});

export default router
