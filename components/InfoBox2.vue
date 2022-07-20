<script>
export default {
  props:[
    'color',
    'icon',
    'gradient'
  ]
}
</script>

<template>
  <div class="info-box2" :class="`${color||''} ${gradient?'gradient':''}`">
    <div class="icon-wrapper" v-html="icon" v-if="icon">
    </div>
    <div class="icon-wrapper" v-else>
      <slot name="icon"></slot>
    </div>
    <div class="info">
      <slot></slot>
    </div>
  </div>
</template>
