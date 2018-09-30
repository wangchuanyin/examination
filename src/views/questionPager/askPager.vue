<template>
<div class="row">
   <ask-left/>
   <ask-main/>
   <ask-setting/>
</div>
</template>
<script>
import askLeft from "./askLeft"
import askMain from "./askMain"
import askSetting from "./askSetting"

export default {
    name:'askPager',
    components:{askLeft,askMain,askSetting}
}
</script>
<style>

</style>
