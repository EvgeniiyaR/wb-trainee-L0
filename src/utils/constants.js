import templateOne from '../assets/images/templates/template-1.jpg';
import templateTwo from '../assets/images/templates/template-2.jpg';
import templateThree from '../assets/images/templates/template-3.jpg';

export const products = [
  {
    title: 'Футболка UZcotton мужская',
    image: templateOne,
    attributes: {
      color: 'белый',
      size: '56',
    },
    stock: 'Коледино WB',
    company: 'OOO Вайлдберриз',
    amount: 2,
    count: 1,
    newPrice: '522',
    oldPrice: '1051',
  },
  {
    title: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
    image: templateTwo,
    attributes: {
      color: 'прозрачный',
      size: '',
    },
    stock: 'Коледино WB',
    company: 'OOO Мегапрофстиль',
    amount: 300,
    count: 200,
    newPrice: '2 100 047',
    oldPrice: '2 300 047',
  },
  {
    title: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, \u00A0\u00A0\u00A0\u00A0\u00A0 Faber-Castell',
    image: templateThree,
    attributes: {
      color: '',
      size: '',
    },
    stock: 'Коледино WB',
    company: 'OOO Вайлдберриз',
    amount: 2,
    count: 2,
    newPrice: '494',
    oldPrice: '950',
  },
];

const body = document.querySelector('.body');
export const amountProductsAll = body.querySelector('.header__amount');
export const templateAvailableProduct = body.querySelector('#available-product');
export const cards = body.querySelector('.main__cards');
export const checkboxChooseAll = body.querySelector('.main__checkbox-label_choose-all');
export const buttonUp = body.querySelector('.main__button-up');
