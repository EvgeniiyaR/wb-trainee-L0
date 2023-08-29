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
    newPrice: 522,
    oldPrice: 1051,
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
    newPrice: 10500.235,
    oldPrice: 11500.235,
  },
  {
    title: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
    image: templateThree,
    attributes: {
      color: '',
      size: '',
    },
    stock: 'Коледино WB',
    company: 'OOO Вайлдберриз',
    amount: 2,
    count: 2,
    newPrice: 247,
    oldPrice: 475,
  },
];

export const body = document.querySelector('.body');
export const amountProductsAll = body.querySelector('.header__amount');
export const templateAvailableProduct = body.querySelector('#available-product');
export const templateMissingProduct = body.querySelector('#missing-product');
export const cards = body.querySelector('.main__cards');
export const missingCards = body.querySelector('.main__cards_type_missing-product');
export const checkboxChooseAll = body.querySelector('.main__checkbox-label_choose-all');
export const buttonUpAvailableProducts = body.querySelector('.main__button-up_type_available-product');
export const buttonUpMissingProducts = body.querySelector('.main__button-up_type_missing-product');
export const previewAvailableProducts = body.querySelector('.main__preview');
export const name = body.querySelector('.main__name_type_choose-all');
export const buttonEditDelivery = body.querySelector('.main__button-card_type_delivery');
export const buttonEditPayment = body.querySelector('.main__button-card_type_payment');
export const popupDelivery = body.querySelector('.popup_type_delivery');
export const popupPayment = body.querySelector('.popup_type_payment');
export const buttonClosePopupDelivery = body.querySelector('.popup__button-close_type_delivery');
export const buttonClosePopupPayment = body.querySelector('.popup__button-close_type_payment');
export const checkboxChoosePayment = body.querySelector('.main__checkbox-input_choose_payment');
export const buttonTotal = body.querySelector('.main__total-button');
export const buttonEditDeliveryExtra = body.querySelector('.main__button-edit_type_delivery');
export const buttonEditPaymentExtra = body.querySelector('.main__button-edit_type_payment');
export const totalPrice = body.querySelector('.main__total-text_type_total');
export const countAmount = body.querySelector('.main__total-text_type_amount');
export const oldTotalPrice = body.querySelector('.main__total-text_type_old-price');
export const discount = body.querySelector('.main__total-text_type_discount');
