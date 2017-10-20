import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Home = resolve => require(['@/pages/Home/Home'], resolve),
      Color = resolve => require(['@/pages/color/color'], resolve),
      Love = resolve => require(['@/pages/love/love'], resolve),
      Dance = resolve => require(['@/pages/dance/dance'], resolve),
      Image = resolve => require(['@/pages/image/image'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/color',
      name: 'Color',
      component: Color,
    },
    {
      path: '/love',
      name: 'love',
      component: Love,
    },
    {
      path: '/dance',
      name: 'dance',
      component: Dance,
    },
    {
      path: '/image',
      name: 'image',
      component: Image,
    },
  ],
});
