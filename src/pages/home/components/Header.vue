<template>
		<div class='header'>
		 	<div class='header-left'>
		 		<span class="iconfont back-icon">&#xe624;</span>
		 	</div>
		 	<div class="header-input">
		 		<span class="iconfont">&#xe632;</span>
		 		输入游玩
		 	</div>
		 
		 	<router-link to='/city'>
		 		<div class="header-right">
			 		{{this.$store.state.city}}
			 		<span class="iconfont arrow-icon">&#xe65e;</span>
			 	</div>
		 	</router-link>
 		</div>
</template>
<script>
export default{
		name:'HomeHeader',
		props:{
			city:String
		}
}
</script>
<style lang='stylus' scoped>
@import "~styles/varibles.styl"
	.header
		display:flex
		height:$headerHeight
		background:$bgColor
		color:#fff
		line-height:$headerHeight
		.header-left
			width:.64rem
			float:left
			text-align:center
			.back-icon
				font-size:.4rem
		.header-input	
			flex:1
			background:#fff
			border-radius:0.1rem
			margin-top:.12rem
			height:0.64rem
			margin-left:.2rem
			color:#ccc
			line-height:0.64rem
			text-indent:0.1rem
		.header-right
			width:1.24rem
			float:right
			text-align:center
			color:#ffffff
			.arrow-icon
				font-size:.24rem
				
			
</style>