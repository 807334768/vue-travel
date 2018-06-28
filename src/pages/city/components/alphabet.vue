<template>
	<div>
		<ul class="list">
			<li class="item" v-for="item of letters"
				@click="handleLetterClick"
				@touchstart="handleTouchStart"
				@touchmove="handleTouchMove"
				@touchend="handleTouchEnd"
				:ref='item'
			>
				{{item}}
			</li>
		</ul>
	</div>
	
</template>
<script>
	export default {
		name:'CityAlphabet',
		props:{
			cities:Object,
		},
		data(){
			return {
				touchStatus:false,
				startY:0,
				timer:null
			}
		},
		updated:function (){//此组件数据发生改变时，这个组件会重新渲染，updated这个生命周期钩子就会执行
			this.startY=this.$refs['A'][0].offsetTop
		},
		computed:{
			letters (){
				const letters=[]
				for(let i in this.cities)(
					letters.push(i)
				)
				return letters
			}
		},
		methods:{
			handleLetterClick(e){
				console.log("执行1",e.target.innerText)
				this.$emit('change',e.target.innerText)
			},
			handleTouchStart (){
				this.touchStatus=true
			},
			handleTouchMove (e){
				if(this.touchStatus){
					if(this.timer){
						clearTimeout(this.timer)
					}
					this.timer=setTimeout(()=>{
						const touchY=e.touches[0].clientY - 79
							console.log(touchY)
							const index=Math.floor((touchY- this.startY )/20)
							console.log(index)
							if(index >= 0 && index < this.letters.length){
								this.$emit('change',this.letters[index])
							}
					},16)
				}
			},
			handleTouchEnd (){
				this.touchStatus=false
			},
		},
		
	}
</script>
<style lang='stylus' scoped>
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"
.list
	display:flex
	flex-direction:column
	justify-content:center
	position:absolute
	top:1.8rem
	right:0
	left:auto
	bottom:0
	width:.4rem
	.item
		text-align:center
		line-height:.44rem
		color:$bgColor
</style>