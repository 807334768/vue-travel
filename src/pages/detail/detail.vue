<template>
	<div>
		
		<banner></banner>
		<detail-header></detail-header>
		 <detail-list :list="list"></detail-list>
	</div>
</template>
<script >
import banner from "./components/banner"
import detailHeader from "./components/header"
import detailList from "./components/list"
	export default {
		name:'Detail',
		components:{
			banner,
			detailHeader,
			detailList
		},
		data (){
			return {
				list:[
					{
						title:'成人票',
						children:[
							{
								title:"成人三馆联票",
								children:[{
									title:'成人三馆联票 - 01',
									children:[
										{
											title:'成人三馆联票 - 01-01'
										}
									]
								},{
									title:"成人三馆联票 - 00"
								}]
							}
						]
					},
					{
						title:'学生票',
						children:[
							{
								title:"学生三馆联票",
								childred:[{
									title:'学生三馆联票 - 01'
								},{
									title:'学生三馆联票 - 02'
								},{
									title:'学生三馆联票 - 03'
								}]
							}
						]
					},
					{
						title:'儿童票',
						children:[
							{
								title:"儿童三馆联票",
								childred:[{
									title:'儿童三馆联票 - 01'
								}]
							}
						]
					},
					{
						title:'特惠票',
						children:[
							{
								title:"特惠三馆联票",
								childred:[{
									title:'特惠三馆联票 - 01'
								},
								{
									title:'特惠三馆联票 - 01'
								},
								{
									title:'特惠三馆联票 - 01'
								},
								{
									title:'特惠三馆联票 - 01'
								},{
									title:'特惠三馆联票 - 01'
								}]
							}
						]
					}
				]
			}
		},
	}
</script>
<style lang="stylus" scoped>
	.content
		height:80rem
</style>