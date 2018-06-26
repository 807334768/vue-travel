<template>
	<div class="icons">
		
		<swiper :options="swiperOption" >
		    <!-- slides -->
		    <swiper-slide v-for="(page,index ) of pages" :key='index'>
		    	<div class="icon" v-for="item of page">
					<div class="icon-img">
						<img :src="item.imgUrl" />	
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
	 	</swiper>
		
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'HomeIcons',
		data (){
			return{
				iconList:[
					{
						id:'001',
						imgUrl:'http://via.placeholder.com/100x100',
						desc:'景点门票景点门票景点门票'
					},
					{
						id:'002',
						imgUrl:'http://via.placeholder.com/100x100',
						desc:'滑雪季节'
					},
					{
						id:'003',
						imgUrl:'http://via.placeholder.com/100x100',
						desc:'泡温泉'
					},
					{
						id:'004',
						imgUrl:'http://via.placeholder.com/100x100',
						desc:'动物植物园'
					},
					{
						id:'005',
						imgUrl:'http://via.placeholder.com/100x100',
						desc:'景点门票'
					},
					{
						id:'006',
						imgUrl:'http://via.placeholder.com/100x100',
						desc:'景点门票'
					},
					{
						id:'007',
						imgUrl:'http://via.placeholder.com/100x100',
						desc:'景点门票'
					},
					{
						id:'008',
						imgUrl:'http://via.placeholder.com/100x100',
						desc:'景点门票'
					},
					
				],
				swiperOption:{
					pagination:".swiper-pagination",
					 
				},
			}
		},
		computed:{
			 pages (){
			 	const pages=[]
				this.iconList.forEach((item,index)=>{
					const page=Math.floor(index/8)
					if(!pages[page]){
						pages[page]=[]
					}
					pages[page].push(item)
				})
				return pages
			 }
		}
	}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"
		 .swiper-slide-active
			height:0
			padding-bottom:50%
			background:green
			 
		.icon
			position:relative
			overflow:hidden
			width:25%
			height:0
			float:left
			padding-bottom: 25%
			background:red
			.icon-img
				position:absolute
				top:0
				left:0
				right:0
				bottom:0.44rem
				box-sizing:border-box
				padding:.1rem
				background:yellow
			.icon-img img
				width:100%
				display:block
				height:100%
				margin:  0 auto 
			.icon-desc
				position:absolute
				left:0
				right:0
				bottom:0
				height:.44rem
				line-height:.44rem
				color:$darkTextColor
				font-size:.12rem
				text-align:center
				ellipsis()
				
						
</style>