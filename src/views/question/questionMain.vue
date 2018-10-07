<template>
 <div class="animated fadeIn">
   <div class="container-fluid">
     <div class="row q_main">
       <div class="col-md-3 col-md-offset-3 q_left" >
         <qustion-left-nav/>
       </div>
       <div class="col-md-9 q_right" >
          <div class="container-fluid">
               <div class="row">
                  <div class="col-md-8 " style="border:1px solid">
                    main
                  </div>
                  <div class="col-md-4" style="border:1px solid">sss
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
export default {
name:'Question',
 data () {
 return {
 };
 },

 components: {qustionLeftNav},

 computed: {},


 methods: {}
}

</script>
<style  scoped>
.q_main{
  margin-left:0px;
}
.q_left{
 padding-left: 0px;
 
}
.q_right{
  max-width:100%;
  border:1px solid red;
}
  .survey_main {
   margin-left: 0px;
   min-width: 560px;
   height:  435px;
   border:1px solid red;
  }

</style>