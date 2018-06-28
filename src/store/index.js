import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		city:'上海'
	},
	/*actions:{
		changeCity (ctx,city){
			ctx.commit('chagneCity2',city)
		}
	},*/
	mutations:{
		chagneCity2 (state,city){
			state.city=city
		}
	}
})
