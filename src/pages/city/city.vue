<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities" ></city-search>
		<city-list :cities="cities"  :hotCities="hotCities"
			:letter="letter"></city-list>
		<city-alphabet :cities="cities" 
			@change="handleLetterChange"
			
			></city-alphabet>
	</div>
</template>
<script>
import CityHeader from "./components/header"
import CitySearch from "./components/search"
import CityList from "./components/list"
import CityAlphabet from "./components/alphabet"
import axios from 'axios'
	export default {
		name:'City',
		components:{
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		data (){
			return {
				cities:{},
				hotCities:[],
				letter:''
			}
		},
		mounted(){
			this.getCityInfo();
		},
		methods:{
			getCityInfo(){
				axios.get('/api/home/city.json')
				.then(this.handleGetCity)
			},
			handleGetCity(res){
				res=res.data
				if(res.ret&&res.data){
					this.cities=res.data.cities
					this.hotCities=res.data.hotCities
				}
			},
			handleLetterChange(letter){
				console.log("执行2",letter)
				this.letter=letter
			},
		}
	}
</script>
<style lang="stylus" scoped="scoped">

</style>