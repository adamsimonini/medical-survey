import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Capabilities from './components/Capabilities.vue';
import Pain from './components/Pain.vue';
import Stiffness from './components/Stiffness.vue';
import Fatigue from './components/Fatigue.vue';
import Comparison from './components/Comparison.vue';
import Mood from './components/Mood.vue';

Vue.use(VueRouter);

const routes = [
  { 
    path: '/', 
    component: Home 
  },
  { 
    path: '/capabilities', 
    component: Capabilities 
  },
  { 
    path: '/pain', 
    component: Pain 
  },
  { 
    path: '/stiffness', 
    component: Stiffness 
  },
  { 
    path: '/fatigue',
    component: Fatigue 
  },
  { 
    path: '/comparison', 
    component: Comparison 
  },
  { 
    path: '/mood', 
    component: Mood 
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.config.productionTip = false
// Vue.config.js = {
//   devServer: {open:'chrome'}
// }

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')