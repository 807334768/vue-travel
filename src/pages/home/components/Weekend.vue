<template>
	<div>
		<div class="recomend-title">周末去哪</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<div class='item-img-wrapper'>
						<img class="item-img" :src="item.imgUrl" alt="" />
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class='item-desc'>{{item.desc}}</p>
				</div>
			
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'HomeWeekend',
		data (){
			return {
				recommendList:[
					{
						id:'001',
						imgUrl:"http://via.placeholder.com/640x200",
						title:"大连圣亚海洋世界",
						desc:"http://via.placeholder.com/640x200",
						
					},
					{
						id:'002',
						imgUrl:"http://via.placeholder.com/640x200",
						title:"大连圣亚海洋世界",
						desc:"烂漫大连首站，烂漫的海洋主题乐园",
						
					},
					
				]
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import "~styles/mixins.styl"
	.recomend-title
		line-height:.8rem
		background:#eee
		text-indent:.2rem
		margin-top:.2rem
	.item-img-wrapper
		overflow:hidden
		height:0
		padding-bottom: 33.9%
	
	.item-img
		width:100%
	.item-info
		text-indent:.1rem
		min-width:0
		.item-title
			line-height:.54rem
			font-size:.32rem
			ellipsis()
		.item-desc
			line-height:.4rem
			font-size:.28rem
			color:#ccc
			ellipsis()
		
</style>