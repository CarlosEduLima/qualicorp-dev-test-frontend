import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';
import Profile from './views/Profile.vue';
import UserProfile from './views/UserProfile.vue'

Vue.use(Router);
export const router = new Router({
  routes: [
    { path: '/', name: 'home', component: Home},
    { path: '/login', name:'login', component: Login },
    { path: '/signup', name:'signup', component: SignUp},
    { path: '/profile/:id', name:'profile', component:Profile},
    { path: '/user-profile', name:'userProfile', component:UserProfile},
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user-token');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})
