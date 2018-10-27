
<template>
    <div class="city">
        <city-header></city-header>
    
        <city-list :cities='cities' :hotCities='hotCities'></city-list>
    </div>
</template>

<script>

import CityHeader from './pages/Header.vue'
import CityList from './pages/List.vue'
export default {
    data(){
        return {
            hotCities:[],
            cities   :[]
        }
    },
    components:{
        CityHeader,
        CityList
    },
    methods:{
        loadData(){
            this.$http.get('//localhost:8080/static/mock/dataCity.json')
                .then((res) => {
                    const data = res.data.data;
                    this.hotCities = data.hotCities;
                    this.cities = data.cities;
                })
        }
    },
    mounted(){
        this.loadData()
    }
}
</script>

<style lang="scss" scoped>
.city{
    background: #f0efed;
}
</style>


