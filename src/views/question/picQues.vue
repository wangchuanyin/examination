<template>
 <div >
    
        <div class="single_q">
             {{order}} <div contenteditable="true" placeholder="图片选择"/>
             <ul>
               <li><div class="radio">
                    <label>
                        <button class="btn-primary">上传图片</button>
                    </label>
                    </div>
                    
               </li>
             </ul>
        </div>
    </div>
        
</template>

<script>
export default {
name:'picQues',
props:['order'],
 data () {
 return {
 };
 },

 components: {},

 computed: {},


 methods: {}
}

</script>
<style  scoped>
.single_q {
    border-radius: 4px;
    height:200px;
    background-color:#fff;
    margin-top:10px;
}
.single_q>ul  li{ list-style-type:none; } 
div:empty:before{
content: attr(placeholder);
color:#bbb;
}
div:focus:before{
content:none;
}
</style>