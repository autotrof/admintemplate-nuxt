<template>
  <div></div>
</template>

<script>
const feather = require('feather-icons')
export default {
  created(){
    const page_title_data = {
      title:'Uang Keluar',
      icon:feather.icons['log-out'].toSvg({
        class:"mr-1 text-primary -rotate-90",
        width:20,
        height:20
      })
    }
    this.$store.commit('changePageTitle',page_title_data)
  }
}
</script>