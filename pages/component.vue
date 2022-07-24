<template>
  <div class="p-4">
    <div class="w-ful mb-2">
      <h2>Widget</h2>
    </div>
    <div>
      <h5>INFO BOX 1</h5>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-2">
      <div class="info-box1 primary">
        <div class="icon-wrapper" v-html="$feather['message-square'].toSvg()"></div>
        <div class="info">
          <div>Messages</div>
          <strong class="text-sm">1,430</strong>
        </div>
      </div>
      <div class="info-box1 danger">
        <div class="icon-wrapper" v-html="$feather['alert-triangle'].toSvg()"></div>
        <div class="info">
          <div>Alert</div>
          <strong class="text-sm">1,430</strong>
        </div>
      </div>
      <div class="info-box1 warning">
        <div class="icon-wrapper" v-html="$feather['bookmark'].toSvg()"></div>
        <div class="info">
          <div>Bookmark</div>
          <strong class="text-sm">10</strong>
        </div>
      </div>
      <div class="info-box1 secondary">
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()"></div>
        <div class="info">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
        </div>
      </div>
      <div class="info-box1 success">
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()"></div>
        <div class="info">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
        </div>
      </div>
      <div class="info-box1 info">
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()"></div>
        <div class="info">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
        </div>
      </div>
      <div class="info-box1 info">
        <LoadingOverlay />
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()"></div>
        <div class="info">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
        </div>
      </div>
      <div class="info-box1 accent">
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()"></div>
        <div class="info">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
        </div>
      </div>
    </div>

    <div>
      <h5>INFO BOX 2</h5>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-2">
      <div class="info-box2 primary">
        <div class="icon-wrapper" v-html="$feather['message-square'].toSvg()"></div>
        <div class="info">
          <div>Messages</div>
          <strong class="text-sm">1,430</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20" />
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 danger">
        <div class="icon-wrapper" v-html="$feather['alert-triangle'].toSvg()"></div>
        <div class="info">
          <div>Alert</div>
          <strong class="text-sm">1,430</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20" />
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 warning">
        <div class="icon-wrapper" v-html="$feather['bookmark'].toSvg()"></div>
        <div class="info">
          <div>Bookmark</div>
          <strong class="text-sm">10</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-white bg-opacity-30" fgClass="bg-slate-700" />
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 secondary">
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()"></div>
        <div class="info">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20" />
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 success">
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()"></div>
        <div class="info">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20" />
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 info">
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()"></div>
        <div class="info">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-white bg-opacity-30" fgClass="bg-slate-700" />
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 info">
        <LoadingOverlay />
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()"></div>
        <div class="info">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-white bg-opacity-30" fgClass="bg-slate-700" />
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 accent">
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()"></div>
        <div class="info">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20" />
          <small>70% increase in 30 days</small>
        </div>
      </div>
    </div>

    <div>
      <h5>INFO BOX 2 GRADIENT</h5>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-2">
      <div class="info-box2 gradient primary">
        <div class="icon-wrapper" v-html="$feather['message-square'].toSvg()"></div>
        <div class="info text-white">
          <div>Messages</div>
          <strong class="text-sm">1,430</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20" />
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 gradient danger">
        <div class="icon-wrapper" v-html="$feather['alert-triangle'].toSvg()"></div>
        <div class="info">
          <div>Alert</div>
          <strong class="text-sm">1,430</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20" />
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 gradient warning">
        <div class="icon-wrapper" v-html="$feather['bookmark'].toSvg()"></div>
        <div class="info">
          <div>Bookmark</div>
          <strong class="text-sm">10</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-white bg-opacity-30" fgClass="bg-slate-700" />
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 gradient secondary">
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()"></div>
        <div class="info">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20" />
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 gradient success">
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()"></div>
        <div class="info">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20" />
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 gradient info">
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()"></div>
        <div class="info">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-white bg-opacity-20" fgClass="bg-slate-700" />
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 gradient info">
        <LoadingOverlay />
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()"></div>
        <div class="info">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-white bg-opacity-20" fgClass="bg-slate-700" />
          <small>70% increase in 30 days</small>
        </div>
      </div>
      <div class="info-box2 gradient accent">
        <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()"></div>
        <div class="info">
          <div>Likes</div>
          <strong class="text-sm">1,213</strong>
          <Progress percentage="70" bgClass="mt-2 mb-1 bg-black bg-opacity-20" />
          <small>70% increase in 30 days</small>
        </div>
      </div>
    </div>

    <div>
      <h5>INFO BOX 3</h5>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-2">
      <div class="info-box3 primary">
        <div class="wrapper">
          <div class="info">
            <div class="text-3xl font-bold mb-2">1,430</div>
            <span>Messages</span>
          </div>
          <div class="icon-wrapper" v-html="$feather['message-square'].toSvg()">
          </div>
        </div>
        <NuxtLink class="link" to="/">More Info</NuxtLink>
      </div>
      <div class="info-box3 danger">
        <div class="wrapper">
          <div class="info">
            <div class="text-3xl font-bold mb-2">1,430</div>
            <span>Alert</span>
          </div>
          <div class="icon-wrapper" v-html="$feather['alert-triangle'].toSvg()">
          </div>
        </div>
        <NuxtLink class="link" to="/">More Info</NuxtLink>
      </div>
      <div class="info-box3 warning">
        <div class="wrapper">
          <div class="info">
            <div class="text-3xl font-bold mb-2">10</div>
            <span>Bookmark</span>
          </div>
          <div class="icon-wrapper" v-html="$feather['bookmark'].toSvg()">
          </div>
        </div>
        <NuxtLink class="link text-gray-800" to="/">More Info</NuxtLink>
      </div>
      <div class="info-box3 secondary">
        <div class="wrapper">
          <div class="info">
            <div class="text-3xl font-bold mb-2">1,213</div>
            <span>Likes</span>
          </div>
          <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()">
          </div>
        </div>
        <NuxtLink class="link" to="/">More Info</NuxtLink>
      </div>
      <div class="info-box3 success">
        <div class="wrapper">
          <div class="info">
            <div class="text-3xl font-bold mb-2">1,213</div>
            <span>Likes</span>
          </div>
          <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()">
          </div>
        </div>
        <NuxtLink class="link" to="/">More Info</NuxtLink>
      </div>
      <div class="info-box3 info">
        <div class="wrapper">
          <div class="info">
            <div class="text-3xl font-bold mb-2">1,213</div>
            <span>Likes</span>
          </div>
          <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()">
          </div>
        </div>
        <NuxtLink class="link" to="/">More Info</NuxtLink>
      </div>
      <div class="info-box3 info">
        <LoadingOverlay />
        <div class="wrapper">
          <div class="info">
            <div class="text-3xl font-bold mb-2">1,213</div>
            <span>Likes</span>
          </div>
          <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()">
          </div>
        </div>
        <NuxtLink class="link" to="/">More Info</NuxtLink>
      </div>
      <div class="info-box3 accent">
        <div class="wrapper">
          <div class="info">
            <div class="text-3xl font-bold mb-2">1,213</div>
            <span>Likes</span>
          </div>
          <div class="icon-wrapper" v-html="$feather['thumbs-up'].toSvg()">
          </div>
        </div>
        <NuxtLink class="link" to="/">More Info</NuxtLink>
      </div>
    </div>

    <div>
      <h5>ALERT</h5>
    </div>
    <div>
      <div class="alert primary soft mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Primary alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert secondary soft mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Secondary alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert accent soft mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Accent alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert warning soft mb-2">
        <div class="icon" v-html="$feather['alert-triangle'].toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Warning alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert danger soft mb-2">
        <div class="icon" v-html="$feather.x.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Danger alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert success soft mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Success alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert info soft mb-2">
        <div class="icon" v-html="$feather.info.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Info alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>

      <div class="alert primary outlined mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Primary alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert secondary outlined mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Secondary alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert accent outlined mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Accent alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert warning outlined mb-2">
        <div class="icon" v-html="$feather['alert-triangle'].toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Warning alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert danger outlined mb-2">
        <div class="icon" v-html="$feather.x.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Danger alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert success outlined mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Success alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert info outlined mb-2">
        <div class="icon" v-html="$feather.info.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Info alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>



      <div class="alert primary mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Primary alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert secondary mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Secondary alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert accent mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Accent alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert warning mb-2">
        <div class="icon" v-html="$feather['alert-triangle'].toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Warning alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert danger mb-2">
        <div class="icon" v-html="$feather.x.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Danger alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert success mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Success alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert info mb-2">
        <div class="icon" v-html="$feather.info.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Info alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>


      <div class="alert primary bordered mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Primary alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert secondary bordered mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Secondary alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert accent bordered mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Accent alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert warning bordered mb-2">
        <div class="icon" v-html="$feather['alert-triangle'].toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Warning alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert danger bordered mb-2">
        <div class="icon" v-html="$feather.x.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Danger alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert success bordered mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Success alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>
      <div class="alert info bordered mb-2">
        <div class="icon" v-html="$feather.info.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Info alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
      </div>




      <div class="alert primary soft mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Primary alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
        <button class="btn-close" v-html="$feather.x.toSvg()"></button>
      </div>
      <div class="alert secondary soft mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Secondary alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
        <button class="btn-close" v-html="$feather.x.toSvg()"></button>
      </div>
      <div class="alert accent soft mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Accent alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
        <button class="btn-close" v-html="$feather.x.toSvg()"></button>
      </div>
      <div class="alert warning soft mb-2">
        <div class="icon" v-html="$feather['alert-triangle'].toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Warning alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
        <button class="btn-close" v-html="$feather.x.toSvg()"></button>
      </div>
      <div class="alert danger soft mb-2">
        <div class="icon" v-html="$feather.x.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Danger alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
        <button class="btn-close" v-html="$feather.x.toSvg()"></button>
      </div>
      <div class="alert success soft mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Success alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
        <button class="btn-close" v-html="$feather.x.toSvg()"></button>
      </div>
      <div class="alert info soft mb-2">
        <div class="icon" v-html="$feather.info.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Info alert</strong>
          <p class="description"> Thank you for joining our newsletter </p>
        </div>
        <button class="btn-close" v-html="$feather.x.toSvg()"></button>
      </div>




      <div class="alert primary soft mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Primary alert</strong>
        </div>
        <button class="btn-close" v-html="$feather.x.toSvg()"></button>
      </div>
      <div class="alert secondary soft mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Secondary alert</strong>
        </div>
        <button class="btn-close" v-html="$feather.x.toSvg()"></button>
      </div>
      <div class="alert accent soft mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Accent alert</strong>
        </div>
        <button class="btn-close" v-html="$feather.x.toSvg()"></button>
      </div>
      <div class="alert warning soft mb-2">
        <div class="icon" v-html="$feather['alert-triangle'].toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Warning alert</strong>
        </div>
        <button class="btn-close" v-html="$feather.x.toSvg()"></button>
      </div>
      <div class="alert danger soft mb-2">
        <div class="icon" v-html="$feather.x.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Danger alert</strong>
        </div>
        <button class="btn-close" v-html="$feather.x.toSvg()"></button>
      </div>
      <div class="alert success soft mb-2">
        <div class="icon" v-html="$feather.check.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Success alert</strong>
        </div>
        <button class="btn-close" v-html="$feather.x.toSvg()"></button>
      </div>
      <div class="alert info soft mb-2">
        <div class="icon" v-html="$feather.info.toSvg()"></div>
        <div class="alert-content">
          <strong class="title">Info alert</strong>
        </div>
        <button class="btn-close" v-html="$feather.x.toSvg()"></button>
      </div>
    </div>
  </div>

</template>

<style>

</style>
