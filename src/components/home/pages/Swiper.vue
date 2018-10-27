
<template>
    <div class="header-swiper">
        <swiper :options="swiperOption">
    
            <swiper-slide v-for="item in swiperList" :key='item.id'>
                <img :src="item.imgUrl">
            </swiper-slide>
            
            <div class="swiper-pagination"  slot="pagination"></div>

        </swiper>
    </div>
</template>

<script>
export default {
    props: ['swiperList'],
    data(){
        return{
            swiperOption:{
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets'
                },
                autoplay: true
            },
        }
    }
}
</script>

<style lang="scss" scoped>

.header-swiper{
    width: 100%;
    height: 2rem;
    background: #fff;

    img{
        width: 100%;
        height: 100%;
    }
}

.header-swiper /deep/ .swiper-pagination-bullet-active{
    background: #fff;
}

</style>

