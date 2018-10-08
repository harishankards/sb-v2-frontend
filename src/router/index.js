import Vue from 'vue';
import Router from 'vue-router';
import Auth from './auth';

Vue.use(Router);

function generateRoutesFromMenu(menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i += 1) {
    const item = menu[i];
    if (item.path) {
      routes.push(item);
    }
  }
  return routes;
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...generateRoutesFromMenu(Auth),
  ],
});

