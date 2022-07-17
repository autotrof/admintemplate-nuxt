<script>
  export default {
    props:{
      percentage:{default:0},
      bgClass:{type:String, default:'bg-black bg-opacity-20'},
      fgClass:{type:String, default:'bg-white'},
      showLabel:{type:Boolean, default:false},
      labelType:{default:1}
    }
  }
</script>

<template>
  <div class="progress h-[1.5px]" :class="bgClass">
    <div class="fg" :style="`width:${percentage}%`" :class="fgClass"></div>
  </div>
</template>

<style scoped>
  .progress{
    @apply w-full transition-all duration-150;
  }
  .fg{
    @apply h-full;
  }
</style>