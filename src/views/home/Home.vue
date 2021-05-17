<template>
    <div id='home'>
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <h2>Home</h2>
    </div>
</template>


<script>
import NavBar from 'components/common/navbar/NavBar.vue'

import {getHomeMultidata} from 'network/home.js'

export default {
    name:'Home',
    components:{
        NavBar,
    },
    data(){
        return{
            banners: [],
            recommends:[],
        }
    },
    created(){
        //1请求多个数据
        getHomeMultidata().then(res=>{
            console.log(res);
            this.banners = res.data.banner;
            this.recommends = res.data.recommend;
        })
    }
}
</script>

<style scoped>
    .home-nav{
        background-color: var(--color-tint);
        color: #fff;
    }
</style>