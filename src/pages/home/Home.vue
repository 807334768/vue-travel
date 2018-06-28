<template>
	<div>
		<home-header ></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list='iconList'></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>

 
</template>
<script type="text/javascript">
import HomeHeader from "./components/Header"
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from "./components/Weekend"
import axios from "axios"
	export default{
		name:'Home',
		data (){
			return {
//				city:'',
				swiperList:[],
				iconList:[],
				recommendList:[],
				weekendList:[]
			}
			
		},
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		mounted(){
			this.getHomeInfo()
		},
		methods:{
			getHomeInfo(){
				axios.get("/api/home/index.json").then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(res){
				console.log(res)
				res=res.data 
				if(res.ret&&res.data){
//					this.city=res.data.city
					this.swiperList=res.data.swiperList
					this.iconList=res.data.iconList
					this.recommendList=res.data.recommendList
					this.weekendList=res.data.weekendList
				}
			}
		}
	}
</script>
