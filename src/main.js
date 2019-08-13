// 入口文件，创建vue实例，引入各种依赖资源
// index.vue 单页面组件=====>index.js 根路由=====>main.js 入口文件=====>App.vue 根组件=====>index.html(最后还是在.htnl文件中汇集输出)

import Vue from 'vue'
import App from './App.vue'

// 产品级别提示，false不开启：在开发这个项目时，控制台会产生一些日志，越详细越好；而上线环节true开启：开发日志会减少以增加性能
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
