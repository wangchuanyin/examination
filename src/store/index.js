import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 定义状态
    state: {
        survey_title:'问卷标题',
        survey_prefix:'点击编辑欢迎语',
        singleQuestionModel: {
            id: null,
            type: 'S',
            subject: '单选题',
            options: [{ itemId: 0, itemName: '选项1' }, { itemId: 1, itemName: '选项2' }]
        },
        multiQuestionModel: {
            id: null,
            type: 'M',
            subject: '多选题',
            options: [{ itemId: 0, itemName: '选项1' }, { itemId: 1, itemName: '选项2' }]
        },
        picQuestionModel:{
            id:null,
            type:'P',
            subject:'图片选择',
            options:[]
        },
        questions: []
    },
    getters: {
        questions: state => {
            return state.questions;
        }
    },
    mutations: {
        updateSurveyTitle(state,title){
           
            state.survey_title = title;
            
        },
        updateSurveyPrefix(state,prefix){
            state.survey_title = prefix;

        },
        addQuestion(state, question) {
            state.questions.push(question);
        },
        removeQuestion(state, current_question) {
            this._.remove(state.qestions, function(question) {
                return current_question.id = question.id
            })
        },
        updateQuestions(state, list) {
            state.questions = list;
        }
    },
    actions: {
        updateSurveyTitle({commit},title){
            alert(title)
            commit('updateSurveyTitle',title);
        },
        updateSurveyPrefix({commit},prefix){
            commit('updateSurveyPrefix',prefix);
        },
        addQuestion({ commit }, question) {
            commit('addQuestion', question);
        },
        updateQuestions({ commit }, list) {
            commit('updateQuestions', list);
        }
    }

})

export default store