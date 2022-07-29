<template>
  <div class="alert" :class="type" ref="alert">
    <div v-if="enableIcon" class="icon" v-html="$feather.check.toSvg()"></div>
    <div class="alert-content">
      <slot></slot>
    </div>
    <button @click="closeAlert()" v-if="closable" class="btn-close" v-html="$feather.x.toSvg()"></button>
  </div>
</template>

<script>
export default {
	props:{
    type:{
      type: String,
      default:'secondary outlined'
    },
    enableIcon:{
      type:Boolean,
      default:true
    },
    closable: {
      type: Boolean,
      default: true
    }
  },
  computed:{
    icon(){
      if(this.type.includes('primary')){
        return $feather['check-circle'].toSvg()
      } else if (this.type.includes('secondary')){
        return $feather['check-circle'].toSvg()
      } else if (this.type.includes('success')){
        return $feather['check'].toSvg()
      } else if (this.type.includes('info')) {
        return $feather['info'].toSvg()
      } else if (this.type.includes('warning')) {
        return $feather['alert-triangle'].toSvg()
      } else if (this.type.includes('danger')) {
        return $feather['x'].toSvg()
      } else if (this.type.includes('accent')) {
        return $feather['check-square'].toSvg()
      }
    }
  },
  methods: {
    closeAlert(){
      const that = this
      that.$refs.alert.classList.add('opacity-0')
      setTimeout(function(){
        that.$refs.alert.remove()
      },300)
    }
  },
}
</script>
