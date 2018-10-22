<template>
<div class="wjContent clear" id="survey_page">
<div class="content" id="begin_content" style="">


<div class="wjtitle mtop project_title">
<h1><p style="text-align: left;">{{suerveyTitle}}</p></h1>
</div>
<div class="wjintro mtop desc_begin">{{suerveyPrefix}}</div>
</div>
<div>
 <button class="btn-primary">提交</button>
</div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name:'preDisplay',
 data () {
 return {
 };
 },

 components: {},

 computed: {
    //  ...mapState({
    //      suerveyTitle:state =>state.survey_title,
    //      suerveyPrefix:state =>state.survey_prefix
	//  })
	suerveyTitle(){
		return window.localStorage.getItem('survey_title');
	},
	suerveyPrefix(){
		return window.localStorage.getItem('survey_prefix');
	}
 },


 methods: {}
}

</script>
<style  scoped>

.wjContent {
	width: 814px;
	margin: 0px auto 10px auto;
}
.wjContent.w100{
	width: 100%;
	margin: 0;
	border: none;
	padding-bottom: 0px;
	box-sizing: border-box;
	/* height: 150px; */
}
.w100 .conthank{
	margin-bottom: 0px;
}
.wjContent p {
	/* color: #4c4c4fc; */
}
</style>