<template>
    <div class="container">
  <div class="row">
    <div class="col-md-9">
      <div>
        <div class="table-responsive">
          <table class="table-bordered table-striped table-condensed cf">
            <tbody>
              <tr class="item-checout">
                <td class="first-column-checkout">
                  <img class="img-thumbnail" src="/src/assets/uploads/iphone5c-selection-hero-2013.png" alt="Apple iPhone 6">
                </td>
                <td>Apple iPhone 6</td>
                <td>
                  1000
                </td>
                <td>1</td>
                <td>
                  <span class="delete-cart">
                      <i class="fa fa-trash-o"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <div class="pull-right total-user-checkout">
            <b>Итого:</b>
            1000
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3 btn-user-checkout">
      <div>
        <router-link to="/" class="btn btn-info">
          <span class="glyphicon glyphicon-info-sign"></span>
          <span>Продолжить покупки</span>
        </router-link>
        <div>
          <button class="btn btn-danger">
             <i class="fa fa-trash-o"></i>
            Очистить корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style>

</style>
