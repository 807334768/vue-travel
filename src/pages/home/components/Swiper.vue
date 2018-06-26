<template>
	<div class="wrapper">
	<swiper :options="swiperOption" >
	    <!-- slides -->
	    <swiper-slide v-for="item of swiperList" :key='item.id'>
	    	<img class='swiper-img' :src="item.imgUrl" alt="" />
	    </swiper-slide>
	 
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	
	  </swiper>
	</div>  
</template>
<script >
	export default{
		name:'HomeSwiper',
		data (){
			return {
				swiperList:[
						{
							id:"001",
							imgUrl:"http://via.placeholder.com/640x200"
						},
						{
							id:"002",
							imgUrl:"http://via.placeholder.com/640x200"
						}
				],
				swiperOption:{
					pagination:".swiper-pagination",
					loop:true
				},
			}
		}
	}
</script>
<style lang="stylus" scoped="scoped">
/*样式穿透 不收socped的限制*/
.wrapper >>> .swiper-pagination-bullet-active
	background:#fff!important
.wrapper
	width:100%
	height:0
	overflow:hidden
	padding-bottom:31.25%
	background:#eee
	.swiper-img
		width:100%
		height:auto
</style>