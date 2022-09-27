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

const goods = [
  { title: 'iPhone 11', price: 21500, img: 'img/iphone11.png' },
  { title: 'iPhone 12', price: 22350, img: 'img/iphone12.png' },
  { title: 'iPhone 13', price: 38700, img: 'img/iphone13.png' },
  { title: 'iPhone 14', price: 50000, img: 'img/iphone13.png' },
];

class GoodsItem {
  constructor({ product_name = ' ', price = 0, img = '' }) {
    this.title = product_name;
    this.price = price;
    this.img = img;
  }
  render() {
    return `<div class="goods-item">
  <img src="${this.img}" alt="product">
  <div class="item_title">
  <h3>Модель: ${this.title}</h3>
  <p>Цена: ${this.price}</p>
  <button class="btn">В корзину</button>
  </div>
  </div>`
  }
}

class GoodsList {
  list = [];
  fetchGoods() {
    return new Promise((resolve) => {
      service(mockUrl).then((data) => {
        this.list = data;
        resolve();
      });
    })
  }
  getAllPrice() {
    return this.list.reduce((acc, curr) => { return acc + curr.price; }, 0);
  }
  render() {
    const resultList = this.list.map(item => {
      const goodsItem = new GoodsItem(item);
      return goodsItem.render();
    });
    document.querySelector('.goods-list').innerHTML = resultList.join(" ");
  }
}

const goodsList = new GoodsList();
goodsList.fetchGoods().then(() => {
  goodsList.render();
});
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