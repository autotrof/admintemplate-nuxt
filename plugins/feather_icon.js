import Vue from 'vue'
import feather from 'feather-icons'

export default ({ app }, inject) => {
  inject('feather', Vue.observable(feather.icons))
}