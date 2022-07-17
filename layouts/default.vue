
<script>
  const img_profile_src = require('../static/user.jpg')

  export default {
    data(){
      return {
        img_profile_src,
        profile_menu_opened:false,
        sidebar_shown:false
      }
    },
    methods:{
      documentClickHandler(event){
        // PROFILE MENU TOGGLER
        if(event.target==this.$refs.img_profile){
          this.profile_menu_opened=!this.profile_menu_opened
        }
        else if(this.$refs.profile_menu_section && event.target!=this.$refs.img_profile){
          if (!this.$refs.profile_menu_section.contains(event.target) && this.profile_menu_opened) this.profile_menu_opened = false
        }

        // SIDEBAR TOGGLER
        if(event.target.tagName=='svg' && event.target.classList.contains('toggler-sidebar')){
          this.sidebar_shown=!this.sidebar_shown
        }else if(this.sidebar_shown){
          this.sidebar_shown = false
        }
      },
      logout(){
        this.$store.dispatch('logout')
      }
    },
    computed:{
      menu_icons_attrs(){
        return {
          width:14,
          height:14,
          'stroke-width':2
        }
      },
      title_prop(){
        return {
          page_title:this.$store.state.page_title,
          page_title_icon:this.$store.state.page_title_icon
        }
      },
      year(){ 
        return (new Date()).getFullYear()
      },
      triangle_icon(){
        return this.$feather.triangle.toSvg({
          class:"text-white",
          width:16,
          height:16,
          fill:'#FFF',
          "stroke-width":0
        })
      },
      menu_icon(){
        if(!this.sidebar_shown){
          return this.$feather['align-left'].toSvg({
            "stroke-width":1,
            'class':'cursor-pointer toggler-sidebar'
          })
        }else{
          return this.$feather['align-justify'].toSvg({
            "stroke-width":1,
            'class':'cursor-pointer toggler-sidebar'
          })
        }
      },
      sidebar_dashboard_icon(){
        return this.$feather['bar-chart-2'].toSvg(this.menu_icons_attrs)
      },
      sidebar_chart_icon(){
        return this.$feather['pie-chart'].toSvg(this.menu_icons_attrs)
      },
      sidebar_users_icon(){
        return this.$feather['users'].toSvg(this.menu_icons_attrs)
      },
      sidebar_table_icon(){
        return this.$feather.table.toSvg(this.menu_icons_attrs)
      },
      sidebar_widget_icon(){
        return this.$feather.grid.toSvg(this.menu_icons_attrs)
      },
      sidebar_modal_icon(){
        return this.$feather.copy.toSvg(this.menu_icons_attrs)
      }
    },
    mounted(){
      const that = this
      this.$nextTick(()=>{
        document.addEventListener("click", that.documentClickHandler);
      })
    },
    beforeUnmount() {
      document.removeEventListener('click', this.documentClickHandler)
    },
  }
</script>

<template>
  <main>
    <header>
      <div class="w-10 xl:hidden" v-html="menu_icon"></div>
      <div class="page-title">
        <div class="font-bold flex items-start">
          <div v-html="title_prop.page_title_icon"></div>
          <h1>{{title_prop.page_title}}</h1>
        </div>
      </div>
      <div class="w-10">
        <img :src="img_profile_src" alt="IMAGE PROFILE" ref="img_profile" class="img-profile">
        <div class="profile-menu-wrapper" v-show="profile_menu_opened" ref="profile_menu_section">
          <div v-html="triangle_icon" class="absolute -top-[13px] right-7"></div>
          <ul>
            <li><NuxtLink active-class="active" exact to="/profil">Akun</NuxtLink></li>
            <li><NuxtLink active-class="active" exact to="/log">Log</NuxtLink></li>
            <li><a href="#" class="danger" v-on:click="logout">Logout</a></li>
          </ul>
        </div>
      </div>
    </header>
    <div id="main-content-wrapper">
      <aside ref="sidebar_menu" :class="{'show':sidebar_shown}">
        <ul class="side-menu-wrapper">
          <li><NuxtLink active-class="active" exact to="/"><i class="mr-2" v-html="sidebar_dashboard_icon"></i> Dashboard</NuxtLink></li>
          <li><NuxtLink active-class="active" to="/table"><i class="mr-2" v-html="sidebar_table_icon"></i> Table</NuxtLink></li>
          <li><NuxtLink active-class="active" to="/widget"><i class="mr-2" v-html="sidebar_widget_icon"></i> Widget</NuxtLink></li>
          <li><NuxtLink active-class="active" to="/modal"><i class="mr-2" v-html="sidebar_modal_icon"></i> Modal & Alert</NuxtLink></li>
          <li><NuxtLink active-class="active" to="/chart"><i class="mr-2" v-html="sidebar_chart_icon"></i> Chart</NuxtLink></li>
        </ul>
      </aside>
      <div id="main-content">
        <Nuxt />
      </div>
    </div>
    <footer>
      <span class="text-xs flex-1 text-slate-400">Designed by <a class="font-semibold text-white hover:underline" href="karuniaaplikasi.com">Karunia Aplikasi</a></span>
      <strong class="text-slate-400 text-xs">Copyrights &copy; {{year}}</strong>
    </footer>
  </main>
</template>

<style scoped>
  main{
    @apply flex flex-col bg-gray-50;
    height:calc(100vh + 64px);
  }
  header{
    @apply w-full bg-slate-800 px-4 py-3 flex items-center text-white z-[1] border-b-4 border-primary-dark relative;
  }
  header .page-title{
    @apply flex-1 flex items-center text-center justify-center xl:justify-start xl:text-left;
  }
  header .page-title h1{
    @apply text-lg;
  }
  #main-content-wrapper{
    @apply flex-1 xl:flex xl:items-start;
  }
  #main-content{
    @apply p-4 w-full;
  }
  .img-profile{
    @apply rounded-full w-9 h-9 ring-2 ring-primary duration-200 ring-opacity-50 hover:ring-primary-light hover:ring-opacity-70 cursor-pointer;
  }
  footer{
    @apply w-full bg-gray-900 p-4 z-[1] flex items-center;
  }
  .profile-menu-wrapper{
    @apply absolute w-36 top-16 right-1 bg-white rounded-sm overflow-visible text-slate-800 shadow-sm shadow-slate-400;
  }
  .profile-menu-wrapper ul{
    @apply divide-y divide-slate-300 bg-white;
  }
  .profile-menu-wrapper ul li{
    @apply hover:bg-primary hover:bg-opacity-10 duration-100;
  }
  .profile-menu-wrapper ul li a{
    @apply px-4 py-2 inline-block w-full duration-200 font-medium;
  }
  .profile-menu-wrapper ul li a:not(.danger){
    @apply hover:text-primary-dark;
  }
  .profile-menu-wrapper ul li a.danger{
    @apply text-danger hover:bg-danger hover:bg-opacity-20 hover:text-danger;
  }
  .profile-menu-wrapper ul li a.active{
    @apply font-semibold underline;
  }
  aside{
    @apply absolute z-50 xl:relative bg-slate-700 h-full -left-[200px] xl:left-0 duration-200 w-[200px];
  }
  aside.show{
    @apply left-0;
  }
  .side-menu-wrapper{
    @apply divide-y divide-zinc-600 text-white;
  }
  .side-menu-wrapper li{
    @apply hover:text-gray-50 text-base;
  }
  .side-menu-wrapper li a{
    font-family: 'Rajdhani', sans-serif;
    @apply inline-flex duration-100 p-3 hover:bg-primary-light hover:text-primary hover:bg-opacity-10 text-opacity-90 w-full items-center;
  }
  .side-menu-wrapper li a.active{
    @apply text-primary-dark font-semibold;
  }
  .side-menu-wrapper li a.active svg{
    @apply text-primary;
  }
</style>