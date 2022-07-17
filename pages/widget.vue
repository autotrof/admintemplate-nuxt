<script>

</script>

<template>
  <div>
    <div class="w-ful mb-2">
      <h2>Widget</h2>
    </div>
    <div><h5>INFO BOX 1</h5></div>
    <div class="grid grid-cols-4 gap-4 mb-2">
      <div class="info-box1">
        <div class="icon-wrapper bg-primary" v-html="$feather['message-square'].toSvg({class:'text-white'})"></div>
        <div class="info">
          <div>Messages</div>
          <strong class="text-sm">1,430</strong>
        </div>
      </div>
      <div class="info-box1">
        <div class="icon-wrapper bg-danger" v-html="$feather['alert-triangle'].toSvg({class:'text-white'})"></div>
        <div class="info">
          <div>Alert</div>
          <strong class="text-sm">1,430</strong>
        </div>
      </div>
      <div class="info-box1">
        <div class="icon-wrapper bg-yellow-500" v-html="$feather['bookmark'].toSvg({class:'text-white'})"></div>
        <div class="info">
          <div>Bookmart</div>
          <strong class="text-sm">10</strong>
        </div>
      </div>
      <div class="info-box1">
        <div class="icon-wrapper bg-secondary" v-html="$feather['thumbs-up'].toSvg({class:'text-white'})"></div>
        <div class="info">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
        </div>
      </div>
    </div>

    <div><h5>INFO BOX 2</h5></div>
    <div class="grid grid-cols-4 gap-4 mb-2">
      <div class="info-box2 bg-primary">
        <div class="icon-wrapper" v-html="$feather['message-square'].toSvg({class:'text-white',width:33,height:33})"></div>
        <div class="info text-white">
          <div>Messages</div>
          <strong class="text-sm">1,430</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20"/>
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 bg-danger">
        <div class="icon-wrapper" v-html="$feather['alert-triangle'].toSvg({class:'text-white',width:33,height:33})"></div>
        <div class="info text-white">
          <div>Alert</div>
          <strong class="text-sm">1,430</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20"/>
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 bg-yellow-500">
        <div class="icon-wrapper" v-html="$feather['bookmark'].toSvg({class:'text-white',width:33,height:33})"></div>
        <div class="info">
          <div>Bookmart</div>
          <strong class="text-sm">10</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20"/>
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 bg-secondary">
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg({class:'text-white',width:33,height:33})"></div>
        <div class="info text-white">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20"/>
          <small>70% increase in 30 days</small>
        </div>
      </div>
    </div>

    <div><h5>INFO BOX 2 GRADIENT</h5></div>
    <div class="grid grid-cols-4 gap-4 mb-2">
      <div class="info-box2 bg-gradient-to-bl from-primary-light to-primary-dark">
        <div class="icon-wrapper" v-html="$feather['message-square'].toSvg({class:'text-white',width:33,height:33})"></div>
        <div class="info text-white">
          <div>Messages</div>
          <strong class="text-sm">1,430</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20"/>
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 bg-gradient-to-bl from-danger-light to-danger-dark">
        <div class="icon-wrapper" v-html="$feather['alert-triangle'].toSvg({class:'text-white',width:33,height:33})"></div>
        <div class="info text-white">
          <div>Alert</div>
          <strong class="text-sm">1,430</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20"/>
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 bg-gradient-to-bl from-yellow-400 to-yellow-600">
        <div class="icon-wrapper" v-html="$feather['bookmark'].toSvg({class:'text-white',width:33,height:33})"></div>
        <div class="info">
          <div>Bookmart</div>
          <strong class="text-sm">10</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20"/>
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 bg-gradient-to-bl from-secondary-light to-secondary-dark">
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg({class:'text-white',width:33,height:33})"></div>
        <div class="info text-white">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20"/>
          <small>70% increase in 30 days</small>
        </div>
      </div>
    </div>

    <div><h5>INFO BOX 3</h5></div>
    <div class="grid grid-cols-4 gap-4 mb-2">
      <div class="info-box3 bg-primary">
        <div class="icon-wrapper" v-html="$feather['message-square'].toSvg({class:'text-slat opacity-30',width:45,height:45})"></div>
        <div class="info">

        </div>
      </div>
      <div class="info-box3 bg-danger">
        <div class="icon-wrapper" v-html="$feather['alert-triangle'].toSvg({class:'text-slat opacity-30',width:45,height:45})"></div>

      </div>
      <div class="info-box3 bg-yellow-500">
        <div class="icon-wrapper" v-html="$feather['bookmark'].toSvg({class:'text-slat opacity-30',width:45,height:45})"></div>

      </div>
      <div class="info-box3 bg-secondary">
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg({class:'text-slat opacity-30',width:45,height:45})"></div>

      </div>
    </div>
  </div>
</template>

<style>

</style>