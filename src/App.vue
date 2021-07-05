<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'
export default {
  name: 'app',
  components:{
    ProductListOne,
    ProductListTwo
  }
}
</script>

<style>
*{
  list-style: none;
}
</style>
