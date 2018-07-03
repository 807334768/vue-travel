<template>
	<div>
			<div class="banner" @click='handleClick'>
				<img class="banner-img" :src="bannerImg" alt="" />
				<div class='banner-info'>
					<div class="banner-title">
						{{sightName}}
					</div>
					<div class="banner-number">
						<span class="iconfont">&#xe604;</span>{{this.bannerImgs.length}}
					</div>
				</div>
			</div>
			<fade-animation>
				<common-gallary 
				:imgs="bannerImgs" v-show='showGallary'
				@close="handleGarllaryClose"></common-gallary>
			</fade-animation>
			
	</div>

</template>
<script>
import CommonGallary from 'common/gallary/gallary'
import fadeAnimation from 'common/fade/fade'
	export default { 
		name:'DetailBanner',
		components:{
			CommonGallary,fadeAnimation
		},
		props:{
			sightName:String,
			bannerImg:String,
			bannerImgs:Array
		},
		data (){
			return {
				showGallary:false,
				 
			}
		},
		methods:{
			handleClick(){
				this.showGallary=true
			},
			handleGarllaryClose(){
				this.showGallary=false
			}
		}
	}
</script>
<style lang="stylus" scoped>
.banner
	position:relative
	overflow:hidden
	height:0
	padding-bottom:43%
	.banner-img
		width:100%
	.banner-info
		position:absolute
		left:0
		right:0
		bottom:0
		display:flex
		color:#fff
		background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
		.banner-title
			flex:1
			font-size:.32rem
			text-indent:.2rem
		.banner-number
			line-height:.32rem
			height:.32rem
			/*margin-top:-.7rem*/
			padding:0 .32rem
			border-radius:.2rem
			background:rgba(1,1,1,.5)	
			font-size:.24rem
		.banner-icon
			font-size:.24rem	
				
</style>