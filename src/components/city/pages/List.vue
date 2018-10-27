<template>
<div class="con" ref='con'>
    <div>
        <!-- hot -->
        <div class="hot">
            <div class="hot-title">热门城市</div>
            <ul class="hot-list">
                <li class="hot-list-item" v-for='item in hotCities' :key='item.id' @click="selectCity(item.name)">
                    {{item.name}}
                </li>
            
            </ul>
        </div>

        <!-- sort -->
        <div class="sort">
            <div class="sort-title">字母排序</div>
            <ul class="sort-list">
                <li class="sort-list-item" v-for='(item,key,index) in cities' :key='index' @click="sortSelect(key)">
                    {{key}}
                </li>
            </ul>
        </div>

        <div class="list">
            <div  v-for='(Item, key, index) in cities' :key='index' :ref="key">
                <div class="list-title">{{key}}</div>
                <ul class="list-list">
                    <li class="list-list-item" v-for='item in Item' :key='item.id' @click='selectCity(item.name)'>
                        {{item.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapMutations} from 'vuex'

// better-scroll
import BScroll from 'better-scroll'

export default {
    props:[ 'cities', 'hotCities' ],
    components:{
    
    },
    mounted(){
        let con = this.$refs['con'];
        this.scroll = new BScroll(con, {click: true, tap: true });
    },
    data(){
        return {
            scroll: '',
        }
    },
    methods:{
        sortSelect(letter){
            this.scroll.scrollToElement( this.$refs[letter][0], 300 );
        },
        selectCity(cityName){
            this.cityChange(cityName);
            this.$router.push('/');
        },
        ...mapMutations(['cityChange'])
    }
   
}
</script>

<style lang="scss" scoped>

@import '../../../assets/css/var.scss';

.con{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 1.01rem;
    overflow: hidden;
    background: #f0efed;
}

// hot
.hot{
    width: 100%;

    &-title{
        font-size: 0.26rem;
        color: #333;
        padding: 0.3rem;
    }

    &-list{
        font-size: 0.28rem;
        background: #fff;
        overflow: hidden;

        &-item{
            float: left;
            width: 33%;
            height: 0.9rem;
            line-height: 0.9rem;
            text-align: center;
            border-bottom: 0.02rem solid #ddd;
            border-left: 0.02rem solid #ddd;
        }

        li:nth-child(3n+1){
            border-left: 0;
        }

    }
}


// sort
.sort{
    width: 100%;

    &-title{
        font-size: 0.26rem;
        color: #333;
        padding: 0.3rem;
    }

    &-list{
        font-size: 0.28rem;
        background: #fff;
        overflow: hidden;

        &-item{
            float: left;
            width: 20%;
            height: 0.9rem;
            line-height: 0.9rem;
            text-align: center;
        }
    }
}


// list
.list{
    width: 100%;

    &-title{
        font-size: 0.26rem;
        color: #333;
        padding: 0.3rem;
    }

    &-list{
        font-size: 0.28rem;
        background: #fff;
        overflow: hidden;

        &-item{
            float: left;
            width: 24.7%;
            height: 0.9rem;
            line-height: 0.9rem;
            text-align: center;
            border-bottom: 0.02rem solid #ddd;
            border-left: 0.02rem solid #ddd;
            @include textOverflow();
        }

        li:nth-child(4n+1){
            border-left: 0;
        }

        li:last-child:not(:nth-child(4n)){
            border-right: 0.02rem solid #ddd;
        }

    }
}

</style>
