<template>
    <div class="home">
        
        <home-header></home-header>
        <home-swiper :swiperList='swiperList'></home-swiper>
        <home-icons :iconsList='iconsList'></home-icons>
        <home-like :likeList='likeList'></home-like>
        <com-dialog v-show="showDialog"></com-dialog>
    </div>
</template>

<script>

import {mapState} from 'vuex'

import HomeHeader from './pages/Header.vue'
import HomeSwiper from './pages/Swiper.vue'
import HomeIcons from './pages/IconList.vue'
import HomeLike from './pages/Like.vue'

import ComDialog from '../common/dialog'

export default {
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeLike,

        ComDialog
    },

    data(){
        return {
          swiperList: [],
          iconsList: [],
          likeList: [],
          changedCity:'',
          showDialog: false
        }
    },

    computed:{
        ...mapState(['city'])
    },

    methods:{
        loadData(){
            this.$http.get( '//localhost:8080/static/mock/dataHome.json' )
                .then((res) => {
                    const data = res.data.data;
                    this.swiperList = '';
                    this.iconsList  = '';
                    this.likeList   = '';
                    data.forEach((item,index) => {
            
                        if( this.city === item.city ){
                            this.swiperList = item.swiperList;
                            this.iconsList  = item.iconsList;
                            this.likeList   = item.likeList;

                            return;
                        } 
                    })

                    if( this.swiperList == '' && this.iconsList == '' && this.likeList == ''){
                        this.showDialog = true;
                        setTimeout(() => {
                            this.showDialog = false;
                        }, 2500);
                    } else{
                        this.showDialog = false;
                    }
                
            })
        }
    },

    mounted(){
        this.changedCity = this.city;
        this.loadData();
    },

    activated(){
        if( this.city != this.changedCity ){
            this.loadData();
            this.changedCity = this.city;
        }
    }


}
</script>

<style lang="scss" scoped>
    .home{
        background: #f0efed;
        overflow-x: hidden;
    }
</style>




