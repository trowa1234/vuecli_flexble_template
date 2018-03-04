
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick' //解决移动端点击有300毫秒的延迟
import 'lib-flexible'

//index页面重置CSS样式
require('!style-loader!css-loader!less-loader!./common/less/index.less');

fastclick.attach(document.body) //解决移动端点击有300毫秒的延迟

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

  //render: h => h(App)
})
