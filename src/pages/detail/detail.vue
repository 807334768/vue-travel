<template>
	<div>
		
		<banner></banner>
		<detail-header></detail-header>
		<div class="content"></div>
	</div>
</template>
<script >
import banner from "./components/banner"
import detailHeader from "./components/header"
	export default {
		name:'Detail',
		components:{
			banner,
			detailHeader
		}
	}
</script>
<style lang="stylus" scoped>
	.content
		height:80rem
</style>