<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <div class="thumbnail">
          <div class="row">
            <div class="col-md-6">
              <img class="img-thumbnail" :src="changeImage(phone.image)" :alt="phone.name">
            </div>
            <div class="col-md-6">
              <div class="column">
                <div class="ab-details-title">
                  <p>cpu</p>
                </div>
                <div class="ab-details-info">{{phone.cpu}}</div>
              </div>
              <div class="column">
                <div class="ab-details-title">
                  <p>camera</p>
                </div>
                <div class="ab-details-info">{{phone.camera}}</div>
              </div>
              <div class="column">
                <div class="ab-details-title">
                  <p>size</p>
                </div>
                <div class="ab-details-info">{{phone.size}}</div>
              </div>
              <div class="column">
                <div class="ab-details-title">
                  <p>weight</p>
                </div>
                <div class="ab-details-info">{{phone.weight}}</div>
              </div>
              <div class="column">
                <div class="ab-details-title">
                  <p>display</p>
                </div>
                <div class="ab-details-info">{{phone.display}}</div>
              </div>
              <div class="column">
                <div class="ab-details-title">
                  <p>battery</p>
                </div>
                <div class="ab-details-info">{{phone.battery}}</div>
              </div>
              <div class="column">
                <div class="ab-details-title">
                  <p>memory</p>
                </div>
                <div class="ab-details-info">{{phone.memory}}</div>
              </div>
            </div>
          </div>
          <div class="caption-full">
            <h4 class="pull-right">
              {{phone.price}}
            </h4>
            <h4>{{phone.name}}</h4>
            <p>{{phone.description}}</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div>
          <p class="lead">Quick shop</p>
          <div class="cart">
            <div class="dropdown">
              <a id="dLabel" class="btn btn-inverse btn-block btn-lg" href="#">
                <i class="fa fa-shopping-cart"></i>
                <span>
                  
                </span>
              </a>
            </div>
          </div>
          <div class="form-group">
            <h1>{{phone.name}}</h1>
            <h2>
              {{phone.price}}
            </h2>
          </div>
          <router-link to="/" class="btn btn-info btn-block">Back to store</router-link>
          <button type="button" class="btn btn-success btn-block">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  data: function() {
    return {
      phones: [],
      phone: ""
    };
  },
  methods: {
    changeImage(src) {
      return src = '../' + src;
    }
  },
  created() {
    var phoneId = this.$route.params.id;
    axios.get("http://localhost:3000/phones").then(response => {
      this.phone = response.data[phoneId];
    });
  }
};
</script>

<style>

</style>
