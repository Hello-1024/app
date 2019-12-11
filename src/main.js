import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

//------屏幕适应-----
import 'lib-flexible'
//---------vant组件----------
import { Swipe, SwipeItem } from "vant";
import { CountDown } from 'vant';
import { Toast } from 'vant';
import { Dialog } from 'vant';

Vue.use(Swipe).use(SwipeItem).use(Toast).use(CountDown).use(Dialog);

Vue.config.productionTip = false

Vue.prototype.$ajax = axios

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')