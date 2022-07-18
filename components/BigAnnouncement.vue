<script>
  export default {
    props:{
      bgSrc:{
        default:require('@/assets/bg2.jpg')
      }
    }
  }
</script>

<template>
  <div class="wrapper" :style="`background-image:url(${bgSrc})`">
    <slot/>
  </div>
</template>

<style scoped>
  .wrapper{
    @apply w-full bg-gradient-to-br from-slate-600 to-slate-900 py-10 px-14 text-center text-white bg-no-repeat bg-center bg-cover min-h-[350px] justify-center items-center flex flex-col;
  }
</style>