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
		 
	 	</swiper>
		
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'HomeIcons',
		props:{
			list:Array
		},
		data (){
			return{
				swiperOption:{
					autoplay:false
				},
			}
		},
		computed:{
			 pages (){
			 	const pages=[]
				this.list.forEach((item,index)=>{
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
			 
		.icon
			position:relative
			overflow:hidden
			width:25%
			height:0
			float:left
			padding-bottom: 25%
			.icon-img
				position:absolute
				top:0
				left:0
				right:0
				bottom:0.44rem
				box-sizing:border-box
				padding:.1rem
			.icon-img img
				width:auto
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