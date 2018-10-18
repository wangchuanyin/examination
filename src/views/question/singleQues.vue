<template>
    <div >
    
        <div class="single_q">
             {{order}} <div contenteditable="true" placeholder="单选题"/>
             <ul>
               <li><div contenteditable="true" placeholder="选项1" /></li>
               <li><div contenteditable="true" placeholder="选项2" /></li>
             </ul>
        </div>
    </div>
        
</template>

<script>

    export default {
    
        name: 'SingleQue',
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
div:empty:before{
content: attr(placeholder);
color:#bbb;
}
div:focus:before{
content:none;
}
</style>