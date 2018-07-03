<template>
	<div class="list" ref='wrapper'>
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper"
						@click="handleCityClick($store.state.city)"
						>
						<div class="button">{{this.$store.state.city}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper"  
						v-for="hot of hotCities" :key="hot.id"
						@click="handleCityClick(hot.name)">
						<div class="button">{{hot.name}}</div>
					</div>
					 
				</div>
			</div>
			<div class="area area-city" 
				v-for="(item,key) of cities"
				 :key="key" :ref='key'> 
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom"
						v-for="innerItem of item" :key="innerItem.id"
						@click="handleCityClick(innerItem.name)">
						 
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
		props:{
			cities:Object,
			hotCities:Array,
			letter:String
		},
		data (){
			return {
				myscroll:null,
			}
		},
		watch:{
			letter:function (){
				console.log("我我我我我",this.letter)
				this.$nextTick(function () {
			  	 if(this.letter){//如果this.letter不为空
			  		console.log(this.$refs[this.letter])
					console.log('===',this.$refs[this.letter][0])
			 		this.myscroll.scrollToElement(this.$refs[this.letter][0])//BScroll的方法
				}
			  })
			  
			},
		},	
		mounted (){
			  this.$nextTick(function () {
			  	this.myscroll=new BScroll(this.$refs.wrapper)
			  })
			
		},
		 methods:{
		 	handleCityClick (city){
//		 		this.$store.dispatch('changeCity',city)
		 	this.$store.commit('chagneCity2',city)
		 	this.$router.push('/home')
		 	}
		 },
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
		text-indent:.1rem
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