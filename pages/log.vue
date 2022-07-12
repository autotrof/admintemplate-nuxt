<template>
  <div></div>
</template>

<script>
const feather = require('feather-icons')
export default {
  created(){
    const page_title_data = {
      title:'Log Aktifitas',
      icon:feather.icons['clipboard'].toSvg({
        class:"mr-1 text-primary",
        width:20,
        height:20
      })
    }
    this.$store.commit('changePageTitle',page_title_data)
  }
}
</script>