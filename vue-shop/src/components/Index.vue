<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="cart">
          <div class="dropdown">
            <router-link to="/cart"  id="dLabel" class="btn btn-inverse btn-block btn-lg">
              <i class="fa fa-shopping-cart"></i>
              <span></span>
            </router-link>
          </div>
        </div>

        <div class="well blosd">
          <h3 class="lead">Поиск</h3>
          <div class="input-group">
            <form>
              <input type="text" class="form-control" disabled>
            </form>
            <span class="input-group-btn">
              <button class="btn btn-default" disabled>
                <span class="glyphicon glyphicon-search"></span>
              </button>
            </span>
          </div>
        </div>

        <div class="well">
          <h4>Бренды</h4>
          <div class="list-group">
            <a class="list-group-item active" href="/">All</a>
            <a class="list-group-item" href="/categories/1">Apple</a>
            <a class="list-group-item" href="/categories/2">Samsung</a>
            <a class="list-group-item" href="/categories/3">Htc</a>
            <a class="list-group-item" href="/categories/4">Lenovo</a>
            <a class="list-group-item" href="/categories/5">Microsoft</a>
          </div>
        </div>
      </div>

      <div class="col-md-9">
        <catalog/>
      </div>
    </div>
  </div>
</template>

<script>
import Catalog from "@/components/Catalog";
export default {
  name: "Index",
  data() {
    return {
      search: ''
    };
  },
  components: {
    catalog: Catalog
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
