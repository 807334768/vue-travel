<template>
	<div>
			 <router-link tag='div' 
			 	to="/home" class="header-abs"
			 	v-show="showAbs">
			 	<span class="iconfont header-abs-back">&#xe624;</span>
			 </router-link>
			 
			 <div class='header-fixed' v-show="!showAbs"
			 	:style="opacityStyle">
			 	 <router-link tag='div' 
			 	 	to="/home" >
				 	<span class="iconfont header-fixed-back">&#xe624;</span>
				 </router-link>
				 景点详情
			 </div>
			 
	</div>

</template>
<script>
 

	export default { 
		name:'DetailHeader',
		 data (){
		 	return {
		 		showAbs:true,
		 		opacityStyle:{opacity:1}
		 	}
		 },
		 
		 methods:{
		 	handleScroll(){
		 		const top =document.documentElement.scrollTop
		 		if(top > 42){
		 			console.log(top)
		 			this.showAbs=false
		 			const opacity =top/100
		 			
		 			this.opacityStyle={
		 				opacity:opacity
		 			}
		 		}else{
		 				this.showAbs=true
		 		}
		 		//console.log(document.documentElement.scrollTop)
		 	}
		 },
		 activated (){
		 	window.addEventListener('scroll',this.handleScroll)
		 },
		 deactivated(){
		 	window.removeEventListener('scroll',this.handleScroll)
		 },
	}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header-abs
	position:absolute
	left:.2rem
	top:.2rem
	width:.8rem
	height:.8rem
	border-radius:.4rem
	background:rgba(0,0,0,.3)
	text-align:center
	line-height:.8rem
	.header-abs-back
		font-size:.4rem
		color:#000
		
.header-fixed
	position:fixed
	top:0
	left:0
	right:0
	overflow:hidden
	line-height:$headerHeight	
	text-align:center
	color:#fff
	background:$bgColor
	z-index:1
	font-size:.32remall
	.header-fixed-back
		position:absolute
		top:0
		left:0
		width:.64rem
</style>