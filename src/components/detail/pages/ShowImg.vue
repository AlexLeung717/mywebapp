
<template>

<div class="con">
    <div class="showimg" @click='showPics()'>
        <img :src="showimgUrl">
        <div class="desc">
            <h1 class="title">华莱士炸鸡汉堡</h1>
            <span class="explain">双人汉堡套餐，包间免费</span>
        </div>
    </div>

    <div class="pics" @click="reDetail()" v-show='showpics'>
         <swiper :options="swiperOption">
    
            <swiper-slide v-for="item in swiperList" :key='item.id'>
                <img :src="item.imgUrl">
            </swiper-slide>

        </swiper>

        <div class="swiper-pagination"  slot="pagination"></div>
    </div>
</div>
    

    
</template>


<script>
export default {
    data(){
        return{
             showpics: false,
             swiperOption:{
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
            },
            swiperList: [
                {
                    id: '01',
                    imgUrl: '//p1.meituan.net/deal/8c16103e9e78d9bc95eff16c778acd6f36752.jpg',
                },
                {
                    id: '02',
                    imgUrl: '//p1.meituan.net/440.0/dealwatera/9c7f9c54b3406195bde43bf47dfe14d117313.jpg',
                },
                {
                    id: '03',
                    imgUrl: '//p0.meituan.net/440.0/dealwatera/b4974d5878875b24f8437457c298f9dc35851.jpg',
                },
                {
                    id: '04',
                    imgUrl: '//p0.meituan.net/440.0/dealwatera/af3f3cf7fa9c77e52cdb62d1263c05bf23426.jpg',
                },
                {
                    id: '05',
                    imgUrl: '//p1.meituan.net/440.0/dealwatera/4e934d3560315b1a023a49cb71db371436752.jpg',
                },
                {
                    id: '06',
                    imgUrl: '//p1.meituan.net/440.0/dealwatera/00a1115376edade88768815b1e44ee2d28671.jpg',
                },
            ],
            showimgUrl: '//p1.meituan.net/deal/8c16103e9e78d9bc95eff16c778acd6f36752.jpg'
        }
    },
    methods:{
        reDetail(){
            this.showpics = false;
        },
        showPics(){
            this.showpics = true;
        }
    }
}
</script>


<style lang="scss" scoped>

@import '../../../assets/css/var.scss';

.showimg{
    width: 7.5rem;
    height: 3.9rem;
    position: relative;

    img{
        width: 100%;
        height: 100%;
    }

    .desc{
        position: absolute;
        z-index: 1;
        left: 0.3rem;
        right: 0.3rem;
        bottom: 0.25rem;
        color: #fff;

        .title{
            position: absolute;
            top: 0.1rem;
            font-size: 0.38rem;
            line-height: 0.4rem;
            @include textOverflow();
        }

        .explain{
            font-size: 0.28rem;
            line-height: 0.3rem;
            @include textOverflow();
        }

    }

    &:after{
        content: '';
        height: 2.22rem;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: -webkit-linear-gradient(bottom, rgba(0,0,0,0.58), rgba(0,0,0,0.3) 64%, transparent);
    }

}

.pics{
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #000;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width:100%;
        }

        .swiper-pagination{
            color: #fff;
            font-size: 0.34rem;
            bottom: 0.5rem;
        }
    }

</style>
