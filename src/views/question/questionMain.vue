<template>
 <div class="animated fadeIn">
   <div class="container-fluid">
     <div class="row q_main">
       <div class="col-md-3 q_left" >
         <qustion-left-nav/>
       </div>
       <div class="col-md-9 q_right" >
          <div class="container-fluid">
               <div class="row q_right_row">
                  <div class="col-md-9 ">
                   <div class="q_title">
                      <div class="" id="title"   contenteditable="true" placeholder="问卷标题"/>
                      <div  class="" id="title_prefix"  contenteditable="true" placeholder="点击编辑欢迎语"/>
                   </div>
                   <div >
                     <draggable   v-model="questions" :options="{group:'single_q'}" @start="dragging=true" @end="dragging=false">
                        <div v-for="(q, key, index) in questions" :key="index">
                    
                          <single-q v-if="q.type==='S'" v-bind:order ="key"></single-q>
                          <multi-q  v-else-if="q.type==='M'"  v-bind:order ="key"></multi-q>
                          <pic-q v-else-if="q.type==='P'"  v-bind:order ="key"></pic-q>
                        </div>
                     </draggable>
                      
                   
                   </div>
                  </div>
                  <div class="col-md-3">
                  </div>    
              </div>
         </div>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import qustionLeftNav from './questionLeftNav'
import { mapGetters } from 'vuex'
import singleQ from './singleQues'
import multiQ from './multiQues'
import picQ from './picQues'
export default {
name:'Question',
 data () {
 return {
  
 };
 },

 components: {qustionLeftNav,singleQ,multiQ,picQ,draggable},

 computed: {

   questions:{
     get:function(){
       return this.$store.state.questions;
     },
     set:function(val){
      this.$store.dispatch('updateQuestions',val)
     }
   }
  //  ...mapGetters({
  // // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
  //     questions: 'questions'
  //  })
 },


 methods: {}
}

</script>
<style  scoped>
div:empty:before{
content: attr(placeholder);
color:#bbb;
}
div:focus:before{
content:none;
}
.q_main{
  margin:0;
}
.q_left{
 padding-left: 0px;
 margin-right: -58px;
 
}
.q_right{
  max-width:100%;
  padding-left: 20px
}

.q_right .q_title{
  height:120px;
  padding: 18px 20px;

  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
  .survey_main {
   margin-left: 0px;
   min-width: 560px;
   height:  435px;
   border:1px solid red;
  }
 .survey_prefix{
       margin: 6px 0 0;
 }

</style>