<template>
	<div>
		
		<banner :sightName="sightName" :bannerImg='bannerImg'
			:bannerImgs="gallaryImgs"
			></banner>
		<detail-header></detail-header>
		 <detail-list :list="list"></detail-list>
		 <div class="content"></div>
	</div>
</template>
<script >
import banner from "./components/banner"
import detailHeader from "./components/header"
import detailList from "./components/list"
import axios from 'axios'
	export default {
		name:'detail',
		components:{
			banner,
			detailHeader,
			detailList
		},
		data (){
			return {
				sightName:'',
				bannerImg:'',
				gallaryImgs:[],
				list:[]
			}
		},
		mounted (){
			this.getDetailInfo()
		},
		methods:{
			getDetailInfo(){
				console.log(this.$route)
				axios.get('/api/returnJson',{
					params:{
						id:this.$route.id
					}
				}).then(this.handleGetDataSucc)
			},
			handleGetDataSucc(res){
			
				res=res.data 
				if(res.ret&&res.data){
						console.log(res)
						const data=res.data 
					this.sightName=data.sightName	
					this.bannerImg=data.bannerImg
					this.gallaryImgs=data.gallaryImgs
					this.list=data.categoryList
				}
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.content
		height:80rem
</style>