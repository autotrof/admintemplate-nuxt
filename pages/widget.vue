<script>

</script>

<template>
  <div>
    <div class="w-ful mb-2">
      <h2>Widget</h2>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div class="info-box">
        <div class="icon-wrapper bg-primary" v-html="$feather['message-square'].toSvg({class:'text-white'})"></div>
        <div class="info">
          <div>Messages</div>
          <strong>1,430</strong>
        </div>
      </div>
      <div class="info-box">
        <div class="icon-wrapper bg-danger" v-html="$feather['alert-triangle'].toSvg({class:'text-white'})"></div>
        <div class="info">
          <div>Alert</div>
          <strong>1,430</strong>
        </div>
      </div>
      <div class="info-box">
        <div class="icon-wrapper bg-green-500" v-html="$feather['bookmark'].toSvg({class:'text-white'})"></div>
        <div class="info">
          <div>Bookmart</div>
          <strong>10</strong>
        </div>
      </div>
      <div class="info-box">
        <div class="icon-wrapper bg-secondary" v-html="$feather['thumbs-up'].toSvg({class:'text-white'})"></div>
        <div class="info">
          <div>Likes</div>
          <strong>1,213</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>