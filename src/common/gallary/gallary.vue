<template>
	<div class="container" @click="handleGarllyClick">
		<div class="wrapper">
			<swiper :options="swiperOptions">
		    <!-- slides -->
		    <swiper-slide v-for="(item,index) in imgs" :key='index'>
		    	<img class='gallaryr-img' :src="item" alt="" />
		    </swiper-slide>
		  
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		
		  </swiper>
		</div>
	</div>
</template>
<script>
	export default{
		name:"CommonGallary",
		props:{
			imgs:{
				type:Array,
				
			},
		},
		data (){
			return {
				swiperOptions:{
					pagination:'.swiper-pagination',
					paginationType:'fraction',
					observeParents:true,
					observer:true
				}
			}
		},
		methods:{
			handleGarllyClick(){
				this.$emit('close')
			}
		}
	}
</script>
<style lang='stylus' scoped>
.container >>> .swiper-container
	overflow:inherit
.container
	display:flex
	flex-direction:column
	justify-content:center
	
	z-index:99
	position:fixed
	left:0
	right:0	
	top:0
	bottom:0
	background:#000
	.wrapper
		background:#fff
		width:100%
		height:0
		padding-bottom:100%
		/*overflow:hidden*/
		.gallaryr-img
			width:100%
		.swiper-pagination
			color:#fff	
			bottom:-1rem
</style>