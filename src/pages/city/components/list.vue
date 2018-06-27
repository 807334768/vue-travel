<template>
	<div class="list" ref='wrapper'>
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper"  v-for="hot of hotCities" :key="hot.id">
						<div class="button">{{hot.name}}</div>
					</div>
					 
				</div>
			</div>
			<div class="area" v-for="(item,key) of cities"> 
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom"
						v-for="innerItem of item" :key="innerItem.id"
						>
						{{innerItem.name}}
					</div>
					
				</div>
				
				
			</div>
		</div>	
	</div>
</template>
<script>
import BScroll from 'better-scroll'
	export default {
		name:'CityList',
		props:['cities','hotCities'],
		mounted(){
			this.scroll=new BScroll(this.$refs.wrapper)
		}
	}
</script>
<style lang="stylus" scoped="scoped">
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"
	.border-topbottom 
		&::before  
			border-color:#ccc
		  &:after
		    border-color:#ccc
		.border-bottom
			&:before  
				border-color:#ccc
.list 
	position:absolute       
	left:0
	right:0
	top:1.58rem
	bottom:0
	overflow:hidden
	.title
		line-height:.54rem
		background:#eee 
		color:#666
		font-size:.26rem
	.button-list
		background:#fff
		overflow:hidden
		padding:.1rem .6rem .1rem .1rem
		.button-wrapper	
			width:33.3%
			float:left
			.button
				margin:.1rem
				height:.4rem
				line-height:.4rem
				text-align:center
				border:.02rem solid #ccc
				border-radius:.05rem
				ellipsis()
	.item-list		
		.item
			line-height:.76rem
			color:#666
			padding-left:.2rem
</style>