(()=>{var t={80:()=>{var t=document.querySelector("#form-submit"),e=document.querySelector("#first-name"),n=document.querySelector("#last-name"),r=document.querySelector("#email"),a=document.querySelector("#phone-number"),o=document.querySelector("#inn-number"),i=function(t){var e=t.target.value,n=t.target.parentElement.querySelector(".main__input-text"),r=t.target;n.classList.contains("main__input-text_type_error")&&""!==e&&(n.textContent="",r.classList.remove("main__input_type_error"),n.classList.remove("main__input-text_type_error"))},c="",_="";t.addEventListener("submit",(function(t){t.preventDefault();var i=e.value,c=n.value,_=r.value,l=a.value,u=o.value;if(""===i){var s=e.parentElement.querySelector(".main__input-text");s.classList.add("main__input-text_type_error"),e.classList.add("main__input_type_error"),s.textContent="Укажите имя"}if(""===c){var p=n.parentElement.querySelector(".main__input-text");p.classList.add("main__input-text_type_error"),n.classList.add("main__input_type_error"),p.textContent="Введите фамилию"}if(""===_){var m=r.parentElement.querySelector(".main__input-text");m.classList.add("main__input-text_type_error"),r.classList.add("main__input_type_error"),m.textContent="Укажите электронную почту"}if(""===l){var d=a.parentElement.querySelector(".main__input-text");d.classList.add("main__input-text_type_error"),a.classList.add("main__input_type_error"),d.textContent="Укажите номер телефона"}if(""===u){var y=o.parentElement.querySelector(".main__input-text");y.classList.add("main__input-text_type_error"),o.classList.add("main__input_type_error"),y.textContent="Укажите ИНН"}})),e.addEventListener("blur",(function(t){var e=t.target.value,n=t.target.parentElement.querySelector(".main__input-text"),r=t.target;e&&(n.textContent="",n.classList.remove("main__input-text_type_error"),r.classList.remove("main__input_type_error"))})),e.addEventListener("input",i),n.addEventListener("blur",(function(t){var e=t.target.value,n=t.target.parentElement.querySelector(".main__input-text");e&&(n.textContent="")})),n.addEventListener("input",i),r.addEventListener("blur",(function(t){var e=t.target,n=t.target.value,r=t.target.parentElement.querySelector(".main__input-text");/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)||""===n?(r.textContent="",r.classList.remove("main__input-text_type_error"),e.classList.remove("main__input_type_error")):(r.textContent="Проверьте адрес электронной почты",r.classList.add("main__input-text_type_error"),e.classList.add("main__input_type_error"))})),r.addEventListener("input",(function(t){var e=t.target,n=t.target.value,r=t.target.parentElement.querySelector(".main__input-text");r.classList.contains("main__input-text_type_error")&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)||""===n?(r.textContent="",e.classList.remove("main__input_type_error"),r.classList.remove("main__input-text_type_error")):(r.textContent="Проверьте адрес электронной почты",r.classList.add("main__input-text_type_error"),e.classList.add("main__input_type_error")))})),a.addEventListener("blur",(function(t){var e=t.target,n=t.target.value,r=t.target.parentElement.querySelector(".main__input-text");/^\+7 \d{3} \d{3}-\d{2}-\d{2}$/.test(n)||""===n?(r.textContent="",r.classList.remove("main__input-text_type_error"),e.classList.remove("main__input_type_error")):(r.textContent="Формат: +7 999 999-99-99",r.classList.add("main__input-text_type_error"),e.classList.add("main__input_type_error"))})),a.addEventListener("input",(function(t){var e=t.target,n=t.target.value.replace(/\D/g,""),r=t.target.parentElement.querySelector(".main__input-text");1===n.length?c+="+7 "+n.slice(n.length-1,n.length):n.length>2&&n.length<12&&t.target.value.length<=16&&(c+=n.slice(n.length-1,n.length),4===n.length?c+=" ":n.length>4&&(7===n.length||9===n.length)&&(c+="-")),r.classList.contains("main__input-text_type_error")&&(/^\+7 \d{3} \d{3}-\d{2}-\d{2}$/.test(c)||""===n?(r.textContent="",e.classList.remove("main__input_type_error"),r.classList.remove("main__input-text_type_error")):(r.textContent="Формат: +7 999 999-99-99",r.classList.add("main__input-text_type_error"),e.classList.add("main__input_type_error"))),t.target.value=c})),a.addEventListener("keydown",(function(t){var e=1;"Backspace"===t.key&&(7!==a.value.length&&11!==a.value.length&&14!==a.value.length||(e=2),a.value=a.value.slice(0,c.length-e),c=a.value,t.preventDefault())})),o.addEventListener("blur",(function(t){var e=t.target,n=t.target.value,r=t.target.parentElement.querySelector(".main__input-text");/\d/g.test(n)&&14===n.length||""===n?(r.textContent="",r.classList.remove("main__input-text_type_error"),e.classList.remove("main__input_type_error")):(r.textContent="Проверьте ИНН",r.classList.add("main__input-text_type_error"),e.classList.add("main__input_type_error"))})),o.addEventListener("input",(function(t){var e=t.target,n=t.target.value.replace(/\D/g,""),r=t.target.parentElement.querySelector(".main__input-text");n.length>=15?_+="":_=n,r.classList.contains("main__input-text_type_error")&&(/\d/g.test(_)&&14===_.length||""===_?(r.textContent="",r.classList.remove("main__input-text_type_error"),e.classList.remove("main__input_type_error")):(r.textContent="Проверьте ИНН",r.classList.add("main__input-text_type_error"),e.classList.add("main__input_type_error"))),t.target.value=_}))}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.p="",(()=>{"use strict";n(80);var t=[{title:"Футболка UZcotton мужская",image:n.p+"images/template-1.22f711a8ebb2ee05e910.jpg",attributes:{color:"белый",size:"56"},stock:"Коледино WB",company:"OOO Вайлдберриз",amount:2,count:1,newPrice:522,oldPrice:1051},{title:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",image:n.p+"images/template-2.292b5cb7199fafa437ee.jpg",attributes:{color:"прозрачный",size:""},stock:"Коледино WB",company:"OOO Мегапрофстиль",amount:300,count:200,newPrice:10500.235,oldPrice:11500.235},{title:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',image:n.p+"images/template-3.db6483fd172a863bb17d.jpg",attributes:{color:"",size:""},stock:"Коледино WB",company:"OOO Вайлдберриз",amount:2,count:2,newPrice:247,oldPrice:475}],e=document.querySelector(".body"),r=e.querySelector(".header__amount"),a=e.querySelector("#available-product"),o=e.querySelector("#missing-product"),i=e.querySelector(".main__cards"),c=e.querySelector(".main__cards_type_missing-product"),_=e.querySelector(".main__checkbox-label_choose-all"),l=e.querySelector(".main__button-up_type_available-product"),u=e.querySelector(".main__button-up_type_missing-product"),s=(e.querySelector(".main__preview"),e.querySelector(".main__name_type_choose-all")),p=e.querySelector(".main__button-card_type_delivery"),m=e.querySelector(".main__button-card_type_payment"),d=e.querySelector(".popup_type_delivery"),y=e.querySelector(".popup_type_payment"),x=e.querySelector(".popup__button-close_type_delivery"),v=e.querySelector(".popup__button-close_type_payment"),g=e.querySelector(".main__checkbox-input_choose_payment"),b=e.querySelector(".main__total-button"),S=e.querySelector(".main__button-edit_type_delivery"),L=e.querySelector(".main__button-edit_type_payment"),C=e.querySelector(".main__total-text_type_total"),q=e.querySelector(".main__total-text_type_amount"),f=e.querySelector(".main__total-text_type_old-price"),E=e.querySelector(".main__total-text_type_discount");r.textContent=t.length,function(t){t.forEach((function(t,e){var n=a.content.cloneNode(!0),r=n.querySelector(".main__card");r.dataset.id=e;var o=n.querySelector(".main__image"),c=n.querySelector(".main__name"),_=n.querySelector(".main__attribute_type_color"),l=n.querySelector(".main__attribute_type_size"),u=n.querySelector(".main__attribute_type_size-mobile"),s=n.querySelector(".main__stock"),p=n.querySelector(".main__company"),m=n.querySelector(".main__count"),d=n.querySelector(".main__leftovers"),y=n.querySelector(".main__attributes"),x=n.querySelector(".main__button-count_type_minus"),v=n.querySelector(".main__button-count_type_plus"),g=n.querySelector(".main__new-price_type_price"),b=n.querySelector(".main__new-price_type_mobile"),S=n.querySelector(".main__old-price_type_desktop"),L=n.querySelector(".main__old-price_type_mobile");o.src=t.image,c.textContent=t.title,c.textContent.length>25&&r.classList.add("main__card_type_mobile-two-row"),""!==t.attributes.color||""!==t.attributes.size?(""!==t.attributes.color&&(_.textContent="Цвет: ".concat(t.attributes.color)),""!==t.attributes.size&&(l.textContent="Размер: ".concat(t.attributes.size),u.textContent=t.attributes.size,u.classList.add("main__attribute_type_visibility-mobile"))):(y.style.display="none",r.classList.add("main__card_type_mobile-two-row-without-attributes")),s.textContent=t.stock,p.textContent=t.company,t.amount-t.count<2?d.textContent="Осталось ".concat(t.amount," шт."):d.style.display="none",1===t.count&&(x.disabled=!0),t.count===t.amount&&(v.disabled=!0),m.textContent=t.count;var h=q.textContent.indexOf("т"),k=Number(q.textContent.slice(0,h).replace(/\s/g,""));q.textContent="".concat((k+t.count).toLocaleString()," товара"),String(t.newPrice).length<=3&&g.classList.add("main__new-price_type_size"),g.textContent=(t.newPrice*t.count).toLocaleString(),b.textContent=(t.newPrice*t.count).toLocaleString(),S.textContent="".concat((t.oldPrice*t.count).toLocaleString()," сом"),L.textContent="".concat((t.oldPrice*t.count).toLocaleString()," сом");var w=f.textContent.indexOf("сом"),N=Number(f.textContent.slice(0,w).replace(/\s/g,""));f.textContent="".concat((N+t.oldPrice*t.count).toLocaleString()," сом");var O=C.textContent.indexOf("сом"),P=Number(C.textContent.slice(0,O).replace(/\s/g,""));C.textContent="".concat((P+t.newPrice*t.count).toLocaleString()," сом");var z=E.textContent.indexOf("сом"),A=Number(E.textContent.slice(0,z).replace(/\s/g,""));E.textContent="".concat((A+(t.newPrice*t.count-t.oldPrice*t.count)).toLocaleString()," сом"),i.append(n)}))}(t),function(t){t.forEach((function(t,e){var n=o.content.cloneNode(!0);n.querySelector(".main__card").dataset.id=e;var r=n.querySelector(".main__image"),a=n.querySelector(".main__name"),i=n.querySelector(".main__attribute_type_color"),_=n.querySelector(".main__attribute_type_size"),l=n.querySelector(".main__attribute_type_size-mobile"),u=n.querySelector(".main__attributes");r.src=t.image,a.textContent=t.title,""!==t.attributes.color||""!==t.attributes.size?(""!==t.attributes.color&&(i.textContent="Цвет: ".concat(t.attributes.color)),""!==t.attributes.size&&(_.textContent="Размер: ".concat(t.attributes.size),l.textContent=t.attributes.size,l.classList.add("main__attribute_type_visibility-mobile"))):u.style.display="none",c.append(n)}))}(t);var h=document.querySelectorAll(".main__checkbox-input_choose-product");h.forEach((function(t){t.addEventListener("input",(function(t){var e=t.target,n=e.parentElement.parentElement.parentElement.parentElement,r=n.querySelector(".main__new-price_type_price"),a=n.querySelector(".main__old-price"),o=n.querySelector(".main__count").textContent,i=C.textContent.indexOf("сом"),c=a.textContent.indexOf("сом"),_=Number(C.textContent.slice(0,i).replace(/\s/g,"")),l=Number(r.textContent.replace(/\s/g,"")),u=Number(a.textContent.slice(0,c).replace(/\s/g,"")),s=q.textContent.indexOf("т"),p=Number(q.textContent.slice(0,s).replace(/\s/g,"")),m=f.textContent.indexOf("сом"),d=Number(f.textContent.slice(0,m).replace(/\s/g,"")),y=E.textContent.indexOf("сом"),x=Number(E.textContent.slice(0,y).replace(/\s/g,""));!0===e.checked?(C.textContent="".concat((_+l).toLocaleString()," сом"),f.textContent="".concat((d+u).toLocaleString()," сом"),q.textContent="".concat((p+Number(o)).toLocaleString()," товара"),E.textContent="".concat((x+(l-u)).toLocaleString()," сом")):(C.textContent="".concat((_-l).toLocaleString()," сом"),f.textContent="".concat((d-u).toLocaleString()," сом"),q.textContent="".concat((p-Number(o)).toLocaleString()," товара"),E.textContent="".concat((x-(l-u)).toLocaleString()," сом"))}))}));var k=document.querySelectorAll(".main__button-count_type_plus"),w=document.querySelectorAll(".main__button-count_type_minus"),N=function(e){var n=e.target,r=e.target.parentElement.parentElement.parentElement.parentElement,a=r.querySelector(".main__button-count_type_minus"),o=Number(r.dataset.id),i=r.querySelector(".main__count"),c=r.querySelector(".main__name");t[o].title===c.textContent&&(i.textContent=Number(i.textContent)+1,t[o].amount===Number(i.textContent)&&(n.disabled=!0),"1"!==i.textContent&&(a.disabled=!1))},O=function(e){var n=e.target,r=e.target.parentElement.parentElement.parentElement.parentElement,a=r.querySelector(".main__button-count_type_plus"),o=Number(r.dataset.id),i=r.querySelector(".main__count"),c=r.querySelector(".main__name");t[o].title===c.textContent&&(i.textContent=Number(i.textContent)-1,"1"===i.textContent&&(n.disabled=!0),t[o].amount!==Number(i.textContent)&&(a.disabled=!1))};k.forEach((function(t){t.addEventListener("click",N)})),w.forEach((function(t){t.addEventListener("click",O)})),_.addEventListener("input",(function(t){!0===t.target.checked?h.forEach((function(t){t.checked=!0})):h.forEach((function(t){t.checked=!1}))})),l.addEventListener("click",(function(){i.classList.toggle("main__card_inactive"),l.classList.toggle("main__button-up_inactive"),_.classList.toggle("main__checkbox-label_inactive");var e=t.reduce((function(t,e){return t+e.count}),0),n=t.reduce((function(t,e){return t+e.newPrice*e.count}),0);s.classList.toggle("main__name_type_hidden"),s.classList.contains("main__name_type_hidden")?s.textContent="".concat(e.toLocaleString()," товара · ").concat(n.toLocaleString()," сом"):s.textContent="Выбрать все"})),u.addEventListener("click",(function(){c.classList.toggle("main__card_inactive"),u.classList.toggle("main__button-up_inactive")}));var P=function(){d.classList.add("popup__opened"),e.style.overflow="hidden"},z=function(){y.classList.add("popup__opened"),e.style.overflow="hidden"};p.addEventListener("click",P),S.addEventListener("click",P),m.addEventListener("click",z),L.addEventListener("click",z),x.addEventListener("click",(function(){d.classList.remove("popup__opened"),e.style.overflow="visible"})),v.addEventListener("click",(function(){y.classList.remove("popup__opened"),e.style.overflow="visible"})),g.addEventListener("input",(function(t){if(!0===t.target.checked){var e=document.querySelector(".main__total-text_type_total").textContent;b.textContent="Оплатить ".concat(e)}else b.textContent="Заказать"}))})()})();