const goods = [
  { title: 'iPhone 11', price: 21500, img: 'img/iphone11.png' },
  { title: 'iPhone 12', price: 22350, img: 'img/iphone12.png' },
  { title: 'iPhone 13', price: 38700, img: 'img/iphone13.png' },
  { title: 'iPhone 14', price: 50000, img: 'img/iphone13.png' },
];

const renderGoodsItem = ({ title = ' ', price = 0, img = '' }) =>
  `<div class="goods-item">
  <img src="${img}" alt="product">
  <div class="item_title">
  <h3>Модель: ${title}</h3>
  <p>Цена: ${price}</p>
  <button class="btn">В корзину</button>
  </div>
  </div>`

const renderGoodsList = (list = []) => {
  let goodsList = list.map(item => renderGoodsItem(item));
  document.querySelector('.goods-list').innerHTML = goodsList.join(" ");
  // Что бы убрать запятые, нужно превратить массив в строку и поставить 
  // разграничитель. 
}

renderGoodsList(goods);

/* const btn = document.querySelector('.btn');
document.querySelector('.goods-item').addEventListener('mouseover', (event) => {
  btn.classList.toggle('none');
}); 


пытался сделать, что бы кнопка появлялся при наведение на item, но времени не 
хватило. К след уроку поправлю.
*/