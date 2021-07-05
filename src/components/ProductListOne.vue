<template>
    <div class="product-list-one">
        <h2>Product List One</h2>
        <ul>
            <li v-for="(item,index) in saleProducts" :key="index">
                <span class="name">{{ item.name }}</span>
                <p class="price">${{ item.price }}</p>
            </li>
        </ul>
        <button @click="reducePriceAction(3)">我要减价</button>
    </div>
</template>

<script>
import{mapGetters} from 'vuex'
import{mapActions} from 'vuex'
export default {
  name: "ProductListOne",
  computed: {
    // saleProducts() {
    //   return this.$store.getters.saleProducts;
    // },
    ...mapGetters([
        "saleProducts"
    ])
    //   products(){ //单纯调用数据
    //       return this.$store.state.products
    //   },
    
    //以下搬运到store.js内
    //   saleProducts(){ //引入并操控数据，如数字除以2
    //       const saleProducts=this.$store.state.products.map(object =>{
    //           return{
    //               name: "**" + object.name + "**",
    //               price: object.price/2
    //           }
    //       })
    //        //上面定义完后，记得return
    //       return saleProducts
    //   }
  },
  methods: {
      ...mapActions([
          "reducePriceAction"
      ]),
    // reducePriceAction: function(amount) {
    //     // 用actions方法写，随时随地异步
    //     this.$store.dispatch("reducePriceAction",amount)
    //   //用commit(Mutations)的方法去写
    // //   this.$store.commit("reducePrice");
    // }
    //   reducePrice:function() { //此方法已搬运到store.js内
    //       this.$store.state.products.forEach(object => {
    //           object.price-=1
    //       });
    //   }
  }
};
</script>
<style scoped>
.product-list-one {
  width: 300px;
  padding: 20px;
  background: #f3db87;
  margin-bottom: 20px;
}
.product-list-one h2 {
  color: #ffffff;
}
.product-list-one li {
  display: inline-block;
  padding: 10px;
  margin: 6px;
  background: #fff6d5;
}
.name {
  color: #4a3b05;
}
.price {
  font-weight: bold;
  color: #f38787;
}
</style>