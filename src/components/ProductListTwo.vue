<template>
    <div class="product-list-two">
        <h2>Product List Two</h2>
        <ul>
            <li v-for="(item,index) in saleProducts" :key="index">
                <span class="name">{{ item.name }}</span>
                <p class="price">${{ item.price }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "ProductListTwo",
  computed: {
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
    //   products(){
    //       return this.$store.state.products
    //   }
  }
};
</script>
<style scoped>
.product-list-two {
  width: 300px;
  padding: 20px;
  background: #92d2ec;
}
.product-list-two h2 {
  color: #ffffff;
}
.product-list-two li {
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #d1effb;
}
.name {
  color: #145a75;
}
.price {
  font-weight: bold;
  color: #ff577e;
}
</style>