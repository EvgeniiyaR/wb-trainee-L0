import './index.css';
import './validation';
import {
  amountProductsAll,
  products,
  templateAvailableProduct,
  templateMissingProduct,
  cards,
  missingCards,
  checkboxChooseAll,
  buttonUpAvailableProducts,
  buttonUpMissingProducts,
  name,
  buttonEditDelivery,
  buttonEditPayment,
  popupDelivery,
  popupPayment,
  buttonClosePopupDelivery,
  buttonClosePopupPayment,
  checkboxChoosePayment,
  buttonTotal } from '../utils/constants';

amountProductsAll.textContent = products.length;

const generateAvailableProduct = (products) => {
  products.forEach((product, index) =>  {
    const clone = templateAvailableProduct.content.cloneNode(true);
    const element =  clone.querySelector('.main__card');
    element.dataset.id = index;
    const image = clone.querySelector('.main__image');
    const name = clone.querySelector('.main__name');
    const color = clone.querySelector('.main__attribute_type_color');
    const size = clone.querySelector('.main__attribute_type_size');
    const stock = clone.querySelector('.main__stock');
    const company = clone.querySelector('.main__company');
    const count = clone.querySelector('.main__count');
    const countLeftovers = clone.querySelector('.main__leftovers');
    const attributes = clone.querySelector('.main__attributes');
    const buttonCountMinus = clone.querySelector('.main__button-count_type_minus');
    const buttonCountPlus = clone.querySelector('.main__button-count_type_plus');
    const newPrice = clone.querySelector('.main__new-price_type_price');
    const oldPrice = clone.querySelector('.main__old-price');

    image.src = product.image;
    name.textContent = product.title;

    if (product.attributes.color !== '' || product.attributes.size !== '') {
      if (product.attributes.color !== '') {
        color.textContent = `Цвет: ${product.attributes.color}`;
      }
      if (product.attributes.size !== '') {
        size.textContent = `Размер: ${product.attributes.size}`;
      }
    } else {
      attributes.style.display = 'none';
    }

    stock.textContent = product.stock;
    company.textContent = product.company;

    const differenceCount = product.amount - product.count;

    if (differenceCount < 2) {
      countLeftovers.textContent = `Осталось ${product.amount} шт.`;
    } else {
      countLeftovers.style.display = 'none';
    }

    if (product.count === 1) {
      buttonCountMinus.disabled = true;
    }

    if (product.count === product.amount) {
      buttonCountPlus.disabled = true;
    }

    count.textContent = product.count;

    if (String(product.newPrice).length <= 3) {
      newPrice.classList.add('main__new-price_type_size');
    }
    newPrice.textContent = (product.newPrice * product.count).toLocaleString();
    oldPrice.textContent = `${(product.oldPrice * product.count).toLocaleString()} сом`;

    cards.append(clone);
  })
}

generateAvailableProduct(products);

const generateMissingProduct = (products) => {
  products.forEach((product, index) =>  {
    const clone = templateMissingProduct.content.cloneNode(true);
    const element =  clone.querySelector('.main__card');
    element.dataset.id = index;
    const image = clone.querySelector('.main__image');
    const name = clone.querySelector('.main__name');
    const color = clone.querySelector('.main__attribute_type_color');
    const size = clone.querySelector('.main__attribute_type_size');
    const attributes = clone.querySelector('.main__attributes');

    image.src = product.image;
    name.textContent = product.title;

    if (product.attributes.color !== '' || product.attributes.size !== '') {
      if (product.attributes.color !== '') {
        color.textContent = `Цвет: ${product.attributes.color}`;
      }
      if (product.attributes.size !== '') {
        size.textContent = `Размер: ${product.attributes.size}`;
      }
    } else {
      attributes.style.display = 'none';
    }

    missingCards.append(clone);
  })
}

generateMissingProduct(products);

export const checkboxChooseProducts = document.querySelectorAll('.main__checkbox-input_choose-product');

const chooseAll = (e) => {
  if (e.target.checked === true) {
    checkboxChooseProducts.forEach((checkbox) => {
      checkbox.checked = true;
    });
  } else {
    checkboxChooseProducts.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
};

const hiddenAvailableProducts = () => {
  cards.classList.toggle('main__card_inactive');
  buttonUpAvailableProducts.classList.toggle('main__button-up_inactive');
  checkboxChooseAll.classList.toggle('main__checkbox-label_inactive');

  const amount = products.reduce((countAll, currentProduct) => countAll + currentProduct.count, 0);
  const price = products.reduce((countAll, currentProduct) => countAll + (currentProduct.newPrice * currentProduct.count), 0);

  name.classList.toggle('main__name_type_hidden');
  if (name.classList.contains('main__name_type_hidden')) {
    name.textContent = `${amount.toLocaleString()} товара · ${price.toLocaleString()} сом`;
  } else {
    name.textContent = 'Выбрать все';
  }
};

const hiddenMissingProducts = () => {
  missingCards.classList.toggle('main__card_inactive');
  buttonUpMissingProducts.classList.toggle('main__button-up_inactive');
};

export const buttonsPlus = document.querySelectorAll('.main__button-count_type_plus');
export const buttonsMinus = document.querySelectorAll('.main__button-count_type_minus');

const incrementCount = (e) => {
  const buttonPlus = e.target;
  const element = e.target.parentElement.parentElement.parentElement.parentElement;
  const buttonMinus = element.querySelector('.main__button-count_type_minus');
  const id = Number(element.dataset.id);
  const table = element.querySelector('.main__count');
  const name = element.querySelector('.main__name');
  if (products[id].title === name.textContent) {
    table.textContent = Number(table.textContent) + 1;
    if (products[id].amount === Number(table.textContent)) {
      buttonPlus.disabled = true;
    }
    if (table.textContent !== '1') {
      buttonMinus.disabled = false;
    }
  }
};

const decrementCount = (e) => {
  const buttonMinus = e.target;
  const element = e.target.parentElement.parentElement.parentElement.parentElement;
  const buttonPlus = element.querySelector('.main__button-count_type_plus');
  const id = Number(element.dataset.id);
  const table = element.querySelector('.main__count');
  const name = element.querySelector('.main__name');
  if (products[id].title === name.textContent) {
    table.textContent = Number(table.textContent) - 1;
    if (table.textContent === '1') {
      buttonMinus.disabled = true;
    }
    if (products[id].amount !== Number(table.textContent)) {
      buttonPlus.disabled = false;
    }
  }
};

buttonsPlus.forEach((button) => {
  button.addEventListener('click', incrementCount);
});

buttonsMinus.forEach((button) => {
  button.addEventListener('click', decrementCount);
});

checkboxChooseAll.addEventListener('input', chooseAll);
buttonUpAvailableProducts.addEventListener('click', hiddenAvailableProducts);
buttonUpMissingProducts.addEventListener('click',hiddenMissingProducts);

const openPopupDelivery = () => {
  popupDelivery.classList.add('popup__opened');
};

const openPopupPayment = () => {
  popupPayment.classList.add('popup__opened');
};

const closePopupDelivery = () => {
  popupDelivery.classList.remove('popup__opened');
};

const closePopupPayment = () => {
  popupPayment.classList.remove('popup__opened');
};

buttonEditDelivery.addEventListener('click', openPopupDelivery);
buttonEditPayment.addEventListener('click', openPopupPayment);

buttonClosePopupDelivery.addEventListener('click', closePopupDelivery);
buttonClosePopupPayment.addEventListener('click', closePopupPayment);

const changeChoosePayment = (e) => {
  if (e.target.checked === true) {
    const price = document.querySelector('.main__total-text_type_total').textContent;
    buttonTotal.textContent = `Оплатить ${price}`;
  } else {
    buttonTotal.textContent = 'Заказать';
  }
};

checkboxChoosePayment.addEventListener('input', changeChoosePayment);
