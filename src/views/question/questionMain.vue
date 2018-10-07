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
                      <input class="form-control" id="title" type="text" placeholder="问卷标题">
                      <input class="form-control survey_prefix" id="title_prefix" type="text" placeholder="点击编辑欢迎语">
                   </div>
                   <div>
                     <ul>
                      <li v-for="(q, key, index) in questions" :key="index">
                          
                      </li>
                    </ul>
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
import qustionLeftNav from './questionLeftNav'
import { mapGetters } from 'vuex'
export default {
name:'Question',
 data () {
 return {
  
 };
 },

 components: {qustionLeftNav},

 computed: {
   ...mapGetters({
  // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
      questions: 'questions'
   })
 },


 methods: {}
}

</script>
<style  scoped>
.q_main{
  margin:0;
}
.q_left{
 padding-left: 0px;
 margin-right: -58px;
 
}
.q_right{
  max-width:100%;
 
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