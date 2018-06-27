<template>
	<div class="header">
		<router-link to="/home">
			<span class="iconfont back-icon">&#xe624;</span>
		</router-link>
		
		城市选择
	</div>
</template>
<script>
	export default {
		name:'CityHeader'
	}
</script>
<style lang="stylus" scoped="scoped">
@import "~styles/varibles.styl"
.header
	height:$headerHeight
	overflow:hidden
	line-height:$headerHeight
	text-align:center
	color:#fff
	background:$bgColor
	position:relative
	font-size:.34rem
	.back-icon
		width:.64rem 
		text-align:center  
		font-size:.4rem
		position:absolute
		left:.2rem
		top:0 
		bottom:0 
		right:auto
		color:#fff
</style>