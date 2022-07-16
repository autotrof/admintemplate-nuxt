<template>
  <div>HALO GUYS</div>
</template>

<script>
const feather = require('feather-icons')
export default {
  created(){
    const page_title_data = {
      title:'DASHBOARD',
      icon:feather.icons['bar-chart-2'].toSvg({
        class:"mr-1 text-primary",
        width:20,
        height:20
      })
    }
    // this.$store.commit('changePageTitle',page_title_data)
  }
}
</script>