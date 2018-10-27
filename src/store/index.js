
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let defaultCity = localStorage.city || '深圳'

const state = {
    city: defaultCity
}

const mutations = {
    cityChange(state, cityName){
        state.city = cityName;
        localStorage.city = cityName;
    }
}

let store = new Vuex.Store({
    state,mutations

})


export default store

