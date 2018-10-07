import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
const store = new Vuex.Store({
  // 定义状态
  state: {
    questions:[]
  },
  getters: {
    questions: state => {
      return state.questions;
    }
  },
  mutations:{
    addQuestion(state,question){
        state.questions.push(question);
      },
      removeQuestion(state,current_question){
        this._.remove(state.qestions,function(question){
            return current_question.id = question.id
        })
      }
  },
  actions:{
    addQuestion({commit},question){
        commit('addQuestion',question);
    }
  }
  
})
 
export default store