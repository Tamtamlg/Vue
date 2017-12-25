<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">MENU</div>
      <div class="col-md-9">
        <catalog/>
      </div>
    </div>
  </div>
</template>

<script>
import Catalog from '@/components/Catalog'
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'catalog': Catalog
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
