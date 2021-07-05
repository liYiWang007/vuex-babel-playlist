import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//export 后才能在外部正常引入
export const store = new Vuex.Store({
    state: { //存储数据
        products: [
            { name: "马云", price: 200 },
            { name: "马冬梅", price: 150 },
            { name: "马化腾", price: 100 },
            { name: "沈腾", price: 10 }
        ]
    },
    getters:{
        // state=楼上的state
        saleProducts:(state)=>{ //引入并操控数据，如数字除以2
            let saleProducts=state.products.map(object =>{
                return{
                    name: "**" + object.name + "**",
                    price: object.price/2
                }
            })
             //上面定义完后，记得return
            return saleProducts
        }
    },
    mutations:{
        reducePrice:(state,payload)=> { //es6写法
            // setTimeout(function(){ //不好用的延时
                state.products.forEach(object => {
                    object.price-=payload
                });
            // },2000)
        }
    },
    actions:{
        reducePriceAction:(context,payload)=>{
            setTimeout(function(){
                context.commit("reducePrice",payload)
            },2000)
            
        }
    }
})