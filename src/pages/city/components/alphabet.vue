<template>
	<div>
		<ul class="list">
			<li class="item" v-for="(item,key) of cities">{{key}}</li>
			 
		</ul>
	</div>
	
</template>
<script>
	export default {
		name:'CityAlphabet',
		props:{
			cities:Object
		}
	}
</script>
<style lang='stylus' scoped>
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"
.list
	display:flex
	flex-direction:column
	justify-content:center
	position:absolute
	top:1.8rem
	right:0
	left:auto
	bottom:0
	width:.4rem
	.item
		text-align:center
		line-height:.44rem
		color:$bgColor
</style>