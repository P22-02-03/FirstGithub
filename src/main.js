import Vue from 'vue'
import App from './App'

//导入路由
import router from './router/index'
//导入ui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//映入第三方矢量库
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(router);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
