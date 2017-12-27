<template>
  <div v-if="phones" class="books row">
    <div v-for="(phone, index) in phones" :key="phone.id" class="col-sm-4 col-lg-4 col-md-4 book-list">
      <div class="thumbnail">
        <img class="img-thumbnail" :src="phone.image" :alt="phone.name">
        <div class="caption">
          <h4 class="pull-right">{{phone.price | currency}}</h4>
          <h4>
            <router-link :to="{ name: 'Item', params: {id: index} }">{{phone.name}}</router-link>
          </h4>
          <p>{{phone.description | readMore(70, '...')}}</p>
          <div class="itemButton">
            <button class="btn btn-primary">Купить</button>
            <router-link :to="{ name: 'Item', params: {id: index} }" class="btn btn-default">Подробнее</router-link>
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
  filters: {
    currency(value) {
      return '$' + value
    },
    readMore(text, length, suffix) {
      return text.substring(0, length) + suffix;
    }
  },
  created() {
    axios.get("http://localhost:3000/phones").then(response => {
      this.phones = response.data;
    });
  }
};
</script>

<style>
.book-list {
  margin-bottom: 20px;
}
</style>
