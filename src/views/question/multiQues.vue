<template>
    <div >
    
        <div class="single_q">
             {{order}} <div contenteditable="true" placeholder="多选题"/>
             <ul>
             
               <li>
                <div class="checkbox checkbox-xs">
                <label>
                    <input type="checkbox" value="">
                    <i class="fa fa-lg icon-checkbox"></i>
                    选项1
                </label>
                </div></li>

                 <li>
                <div class="checkbox checkbox-xs">
                <label>
                    <input type="checkbox" value="">
                    <i class="fa fa-lg icon-checkbox"></i>
                    选项2
                </label>
                </div></li>
             </ul>
        </div>
    </div>
        
</template>

<script>

    export default {
    
        name: 'MultiQue',
        props:['order'],
        data() {
    
            return {};
    
        },
    
    
    
        components: {},
    
    
    
        computed: {},
    
    
    
    
    
        methods: {}
    
    }
</script>
<style scoped>
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