<template>
	<div>
		<div class="search">
			 <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
		</div>
		<div v-show='keyword' 
			class="search-content" ref='search'> 
			<ul>
				<li  class='search-item border-bottom'
					 v-for="item of list" :key="item.id"
					 @click="handleCityClick(item.name)">{{item.name}}</li>
				<li v-show="hasNoData" class='search-item border-bottom'>
					没有找到匹配数据
				</li>
			</ul>
		</div>
	</div>
	
</template>
<script>
import BScroll from 'better-scroll'
	export default {
		name:'CitySearch',
		props:{
			cities:Object
		},
		data (){
			return {
				keyword:'',
				list:[],
				timer:null,
			 
			}
		},
		watch:{
			keyword (){
				if(this.timer){
					clearTimeout(this.timer)
				}
				if(!this.keyword){
					this.list=[]
				}else{
					this.timer=setTimeout(()=>{
						const result=[];
						for (let i in this.cities){
							this.cities[i].forEach((value)=>{
								if(value.spell.indexOf(this.keyword) >-1 || value.name.indexOf(this.keyword) > -1){
									result.push(value)
								}
							})
						this.list=result	
						}
					},100)
				}
				
			}
		},
		mounted (){
			new BScroll(this.$refs.search)
		},
		computed:{
			hasNoData (){
				return !this.list.length
			}
		},
		methods:{
			handleCityClick (city){
				alert(city)
		 		this.$store.commit('chagneCity2',city);
		 		//this.keyword=""
		 		this.$router.push('/home')
		 	}
		}
	}
</script>
<style lang="stylus" scoped="scoped">
@import "~styles/varibles.styl"
.search
	height:.72rem
	background:$bgColor
	padding: 0 .12rem
	.search-input 
		box-sizing:border-box;
		height:0.62rem 
		width:100%
		line-height:.62rem
		text-align:center
		border-radius:.06rem
		color:#666
		padding :0 .1rem
.search-content
	position:absolute
	left:0
	right:0
	top:1.58rem
	bottom:0
	z-index:1
	background:#fff
	overflow:hidden		
	.search-item
		line-height:.62rem
		width:94%
		color:#666
		margin:auto
</style>