<template>
 <div class="question_type_wrap_">
   <div class="question_type_dl">
         <dl class="type_module">
        <dt>选择题</dt>
            <dd>
                <a @click="addSingleQuestion"><label class="type_item three_letter_spacing"> <span class="fa fa-dot-circle-o"></span>单选题</label></a>
                <label class="type_item three_letter_spacing"> <span class="fa fa-check-square"></span>多选题</label>
                <label class="type_item three_letter_spacing"> <span class="fa fa-briefcase"></span>文字投票</label>
                <label class="type_item three_letter_spacing"> <span class="fa fa-file-image-o"></span>图片选择</label>
            </dd>
        </dl> 
        
    </div>
 </div>
</template>

<script>
//import { mapActions } from 'vuex'
export default {
name:'qustionLeftNav',
 data () {
 return {
 };
 },

 components: {},

 computed: {},


 methods: {
     //...mapActions(['addQuestion'])
     addSingleQuestion(){
         let singleQuestion = {
             id:0,
             subject:'单选题',
             options:[{optionId:0,optionItem:'选项1'},{optionId:1,optionItem:'选项2'}]
         }

         this.$store.dispatch('addQuestion',singleQuestion);
     }
 }
}

</script>
<style  scoped>
.question_type_wrap_ {
    overflow: hidden;
    width: 223px;
    height: 435px;
    background-color: #fafafa;
    border-right: 1px solid #dde5ed;
}
.question_type_wrap_ .question_type_dl .type_module{
        padding-left: 12px;
        padding-top:10px;
}
.question_type_wrap_ .question_type_dl .type_module>dd .type_item{
    display: inline-block;
    width: 96px;
    height: 30px;
    line-height: 30px;
    color: #707070;
    font-size: 12px;
    padding-left: 12px;
    border: solid 1px #d8d8d8;
    background-color: #ffffff;
    border-radius: 2px;
    margin: 0 6px 6px 0;
    cursor: pointer;
    vertical-align: middle;
} 
.three_letter_spacing {
    letter-spacing: 4px;
} 
.question_type_wrap_ .question_type_dl .type_module>dd .type_item:hover{
 color: #20a8d8;
 border:1px solid #20a8d8;
}  
</style>