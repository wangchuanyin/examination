// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import store from './store/index'
import _ from "lodash";
Object.defineProperty(Vue.prototype, '_.', { value: _ });
// todo
// cssVars()

Vue.use(BootstrapVue)
// Content editable component
// Vue.component('editable', {
//     template: `<div contenteditable="true" @input="$emit('update:content', $event.target.innerText)"></div>`,
//     props: ['content'],
//     mounted: function () {
//         this.$el.innerText = this.content;
//     },
//     watch: {
//         content: function () {
//             this.$el.innerText = this.content;
//         }
//     }
// });
Vue.component('editable',{
  template:'<div contenteditable="true" @input="update"></div>',
  props:['content'],
  mounted:function(){
    this.$el.innerText = this.content;
  },
  methods:{
    update:function(event){
      this.$emit('update',event.target.innerText);
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
