<template>
    <div class="like">
        <div class="like-title">猜你喜欢</div>
        <ul class="like-list">
            <li class="like-item" v-for='item in likeList' :key='item.id' @click="goDetail">
                <div class="img">
                    <img :src="item.imgUrl">
                </div>
                <div class="like-item-info">
                    <p class="name">{{item.title}}</p>
                    <p class="msg">{{item.msg}}</p>
                    <div class="price">
                        <b>{{item.pri}}</b>元
                        <span class="line-right">已售<span>{{item.sell}}</span></span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="more">
            查看更多
            <span class="line-right">></span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['likeList'],
    data(){
        return {
            
        }
    },
    methods:{
        goDetail(){
            this.$router.push('/detail');
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../../../assets/css/var.scss';

.like{
    padding-left: 0.2rem;
    margin-bottom: 0.5rem;
    background: #fff;
    overflow: hidden;

    &-title{
        font-size: 0.34rem;
        color: #333;
        padding: 0.22rem;
        border-bottom: 1px solid #DDD8CE;
    }

    &-list{
        width: 100%;
        // padding-bottom: 0.4rem;
    }

    &-item{
        width: 100%;
        height: 1.64rem;
        padding: 0.26rem 0.2rem;
        border-bottom: 1px solid #DDD8CE;
        overflow: hidden;

        .img{
            float: left;
            width: 1.8rem;
            height: 1.64rem;

            img{
                width: 100%;
                height: 100%;
            }
        }

        &-info{
            width: 60%;
            height: 100%;
            float: left;
            margin-left: 0.3rem;

            .name{
                padding-top: .1rem;
                margin-bottom: .12rem;
                font-size: .3rem;
                font-weight: 400;
                color: #333;
                @include textOverflow()
            }

            .msg{
                font-size: .24rem;
                height: .28rem;
                line-height: 0.28rem;
                margin-top: 0.2rem;
                margin-bottom: .45rem;
                color: #666;
                @include textOverflow()
            }

            .price{
                font-size: 0.20rem;
                color: #06c1ae;
                overflow: hidden;

                b{
                    font-size: 0.28rem;
                }

                .line-right{
                    float: right;
                    margin-top: 0.05rem;
                    color:#666;
                }
            }

        }
    }

    .more{
        position: relative;
        font-size: 0.3rem;
        color: $bgColor;
        padding: 0.28rem .3rem 0.2rem;
        width: 100%;
        border-bottom: 1px solid #DDD8CE;
        background: #fff;

        .line-right{
            float: right;
            width: 0.6rem;
            height: 0.6rem;
            margin-right: 0.5rem;
            font-size: 0.36rem;
            font-weight: bold;
        }
    }
}

</style>

