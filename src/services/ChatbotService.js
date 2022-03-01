import {api} from './api.js'

export default {
  model () {
    return api('/model')
  }
}
