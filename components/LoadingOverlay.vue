<script>
  export default{

  }
</script>

<template>
  <div class="overlay">
    <div class="w-full h-full items-center justify-center flex" v-html="$feather['refresh-cw'].toSvg({class:'text-white mx-auto animate-spin-slow duration-200',width:40,height:40})"></div>
  </div>
</template>

<style scoped>
  .overlay{
    @apply left-0 top-0 w-full h-full z-10 bg-black bg-opacity-60 absolute;
  }
</style>