const goodsUrl = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const goodsUrlList = '/catalogData.json';
const urlGoods = `${goodsUrl}${goodsUrlList}`;
const mockUrl = 'https://run.mocky.io/v3/89b4964a-7fbf-4de2-9ce7-deb5d22eb4f9';

function service(url) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      const result = JSON.parse(xhr.response)
      resolve(result)
    };
    xhr.send();
  })
}

Vue.component('box', {
  props: ['item'],
  template: `
         <div class="basket">
          <div class="basketRow basketHeader">
              <div>Название товара</div>
              <div class="closed" @click="$emit('close')"><i class="fa fa-solid fa-xmark"></i></div>
          </div>
          <div class="basketTotal">
              Товаров в корзине на сумму:$<span class="basketTotalValue">0</span>
          </div>
        </div>
  `
})

Vue.component('search', {
  props: [
    'value'
  ],
  template: `
  <input class="search" type="search" placeholder="Search" 
  v-bind:value="value"
  v-on:input="$emit('input', $event.target.value)"/>
  `
})

Vue.component('custom_button', {
  template: `
  <div class="baskets icon_item" v-on:click="$emit('click')">
  <slot></slot>
  </div>`
})

Vue.component('goods_item', {
  props: [
    'item'
  ],
  template: `
  <div class= "goods-item"><img :src="item.img" alt="product">
  <div class="item_title">
  <h3>Модель: {{ item.product_name }}</h3>
  <p>Цена: {{ item.price }}</p>
  <button class="btn">В корзину</button>
  </div>
  </div>`
})

const app = new Vue({
  el: '#root',
  data: {
    goods: [],
    search: '',
    isVisibleCart: false,
    emptyList: false
  },
  mounted() {
    setTimeout(() => {
      return new Promise((resolve) => {
        service(mockUrl).then((data) => {
          this.goods = data;
          resolve();
        });
      })
    }, 1000)
  },
  methods: {
    setVisibleCart() {
      this.isVisibleCart = !this.isVisibleCart;
    }
  },
  computed: {
    filterGoods() {
      return this.goods.filter((item) => {
        const regExp = new RegExp(this.search, 'i');
        return regExp.test(item.product_name);
      })
    },
  }
})

















/* 
  goodsList.fetchGoods().then(() => {
  goodsList.render();
  console.log(goodsList.getAllPrice());
});
*/
// console.log(goodsList.getAllPrice());




// ---------------- Home Work 4 ------------------------------------------------


// 1) Какие виды областей видимости вы знаете? Написать ответ ниже

// Глобаьная, Локальная, Блочная


// 2) Исправьте код так чтобы в консоль выводились числа от 0 до 10
for (let i = 0; i <= 10; i++) {
  console.log(i);
}



// 3) Исправьте код так чтобы в консоль выводилось "John"
const firstName = "Elena"
const obj = {
  firstName: 'John',
  sayFirstName: () => {
    console.log(obj.firstName)
  }
}
obj.sayFirstName();



// 4) Исправьте код так чтобы в консоль не выводилась ошибка (нельзя исправлять тело функции getArrowFunction)
const user = {
  age: 20
}

function getArrowFunction() {
  "use strict"
  return () => {
    console.log(this.age)
  }
}

const arrowFunction = getArrowFunction.call(user);
arrowFunction();