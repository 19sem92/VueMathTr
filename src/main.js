import Vue from 'vue'
import App from './App.vue'

import appMessage from './components/message.vue';
import appQuestion from './components/question.vue';
import appResult from './components/resultScreen.vue';
import appStart from './components/startScreen.vue';

Vue.component('messageApp', appMessage);
Vue.component('questionApp', appQuestion);
Vue.component('resultApp', appResult);
Vue.component('startApp', appStart);

new Vue({
  el: '#app',
  render: h => h(App)
});
