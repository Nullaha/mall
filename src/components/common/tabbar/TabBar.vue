<template>
  <div id="tab-bar" >
    <slot></slot>
  </div>
</template>

<script>
// import TabBarItem from "./TabBarItem.vue"
export default {
  name: 'TabBar',
  components: {
      
  }
}
</script>
<style>
#tab-bar{
    display: flex;
    background-color: antiquewhite;

    position:fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -2px 10px rgba(100, 100, 100, 0.8);

}

#tab-bar img{
  width: 24px;
  height: 24px;
}

</style>