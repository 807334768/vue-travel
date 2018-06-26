<template>
	<div>
		<div class="recomend-title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
					<img class="item-img" :src="item.imgUrl" alt="" />
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class='item-desc'>{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'HomeRecommend',
		data (){
			return {
				recommendList:[
					{
						id:'001',
						imgUrl:"http://via.placeholder.com/100x100",
						title:"大连圣亚海洋世界",
						desc:"http://via.placeholder.com/100x100",
						link:""
						
					},
					{
						id:'002',
						imgUrl:"http://via.placeholder.com/100x100",
						title:"大连圣亚海洋世界",
						desc:"烂漫大连首站，烂漫的海洋主题乐园",
						link:""
						
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
	
.item
	display:flex
	height:1.9rem
	overflow:hidden
	.item-img
		width:1.7rem
		height:1.7rem
		padding:.1rem
	.item-info
		flex:1
		padding:.1rem
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
		.item-button
			background:#ff9300
			padding: 0 .1rem
			border-radius:.06rem
			margin-top:.2rem;
			line-height:.44rem;
			color: #FFFFFF;
			text-align: center;	
			font-size: .12rem;
		
</style>