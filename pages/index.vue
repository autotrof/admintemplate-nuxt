<template>
  <div class="grid grid-rows-4 grid-flow-col gap-4 md:grid-rows-2">
    <div class="box-info bg-gradient-to-r from-violet-500 to-fuchsia-500">
      Total Donasi Masuk
    </div>
    <div class="box-info bg-gradient-to-r from-violet-500 to-fuchsia-500">
      Total Donasi Disalurkan
    </div>
    <div class="box-info bg-gradient-to-r from-violet-500 to-fuchsia-500">
      Total Donasi Untuk Operasional
    </div>
    <div class="box-info bg-gradient-to-r from-violet-500 to-fuchsia-500">
      Total Pengeluaran
    </div>
  </div>
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