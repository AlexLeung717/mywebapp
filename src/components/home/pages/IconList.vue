

<template>
    <div class="icons">
        <swiper :options="swiperOption" >

            <swiper-slide v-for='(Item, index) in page' :key='index'>
                <div class="icon-item" v-for='item in Item' :key='item.id'>
                    <img :src="item.imgUrl">
                    <p>{{item.title}}</p>
                </div>
               
            </swiper-slide>
             
        </swiper>
        <div class="swiper-pagination"  slot="pagination"></div>
        
        
    </div>
</template>

<script>
export default {
    props: ['iconsList'],
    data(){
        return {
            swiperOption:{
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets'
                }
            }
        }
    },
     computed:{
        page(){
            let pages = [];
            for( let i = 0; i < this.iconsList.length; i++ ){
                let idx = Math.floor( i / 8 );
                if( !pages[idx] ){
                    pages[idx] = [];
                }
                pages[idx].push( this.iconsList[i] );
            }
            return pages;
        }        
    }
}
</script>

<style lang="scss" scoped>

    @import '../../../assets/css/var.scss';
    .icons{
        width: 100%;
        background: #fff;
        position: relative;
        padding-bottom: 0.3rem;
        margin-bottom: 0.2rem;
        border-top: 1px solid #DDD8CE;
    }

    .icon-item{
        width: 25%;
        float:left;

        img{
           display: block;
           width: 0.8rem;
           height: 0.8rem;
           margin: 0 auto;
           padding-top: 0.2rem;
           padding-bottom: 0.2rem;
        }

        p{
            text-align: center;
            font-size: 0.24rem;
            color: #666;
            padding-bottom: 0.2rem;
        }
    }

    .icons /deep/ .swiper-pagination-bullet-active{
        background: $bgColor;
    }

    .icons .swiper-pagination-bullets{
        bottom: 4px;
        width: 100%;
    }

    .icons /deep/ .swiper-pagination-bullet{
        margin: 0 6px;
    }
</style>


