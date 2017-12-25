<template>
  <div v-if="phones" class="books row">
    <div v-for="phone in phones" :key="phone.id" class="col-sm-4 col-lg-4 col-md-4 book-list">
      <div class="thumbnail">
        <img class="img-thumbnail" :src="phone.image" :alt="phone.name">
        <div class="caption">
          <h4 class="pull-right">{{phone.price}}</h4>
          <h4>
            <a href="#">{{phone.name}}</a>
          </h4>
          <p>{{shortDescription(phone.description)}}</p>
          <div class="itemButton">
            <button class="btn btn-primary">Buy Now!</button>
            <a class="btn btn-default" href="#">More info</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "catalog",
  data: function() {
    return {
      phones: []
    };
  },
  methods: {
    shortDescription(string) {
      return `${R.take(60, string)}...`;
    }
  },
  created() {
    axios.get("http://localhost:3000/phones").then(response => {
      this.phones = response.data;
      console.log(this.phones);
    });
  }
};
</script>

<style>
.book-list {
  margin-bottom: 20px;
}
</style>
