<template>
  <div class="bg-purple bg-darken-lg window-principal">
    <messages class="bg-dark"></messages>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Messages from './components/Messages'

export default {
  components: {
    Messages
  }
}
</script>

<style src="./global.css">
@import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
