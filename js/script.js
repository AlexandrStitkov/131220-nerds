var link = document.querySelector(".btn-map");
var popup = document.querySelector(".modal");
var close = document.querySelector(".close");
var form = popup.querySelector(".contact-form");
var name = form.querySelector("[name=name]");
var email = form.querySelector("[name=e-mail]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Открыть модальное окно");
  popup.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Закрыть модальное окно");
  popup.classList.remove("modal-show");
  form.classList.remove('form-invalid');
  form.classList.remove('modal-error');
});
form.addEventListener("submit", function(evt){
  if (!name.value && !email.value) {
    evt.preventDefault();
    form.classList.add('form-invalid');
    form.classList.add('modal-error');
    console.log("Заполните пустые поля");
  } else {
    localStorage.setItem("name", name.value);
  }
});
/*Переключение слайдов*/
var slides1 = document.querySelector("#slide-1");
var slides2 = document.querySelector("#slide-2");
var slides3 = document.querySelector("#slide-3");
/*Навигация слайдов*/
var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");
var slide3 = document.querySelector(".slide-3");

slide1.addEventListener("click", function(est) {
  est.preventDefault();
  console.log("вы нажали первый слайд");
  slides1.classList.remove("hidden");
  slides2.classList.add("hidden");
  slides3.classList.add("hidden");
  slide1.classList.add("active");
  slide2.classList.remove("active");
  slide3.classList.remove("active");
});
slide2.addEventListener("click", function(est) {
  est.preventDefault();
  console.log("вы нажали второй слайд");
  slides1.classList.add("hidden");
  slides2.classList.remove("hidden");
  slides3.classList.add("hidden");
  slide1.classList.remove("active");
  slide2.classList.add("active");
  slide3.classList.remove("active");
});
slide3.addEventListener("click", function(est) {
  est.preventDefault();
  console.log("вы нажали третий слайд");
  slides1.classList.add("hidden");
  slides2.classList.add("hidden");
  slides3.classList.remove("hidden");
  slide1.classList.remove("active");
  slide2.classList.remove("active");
  slide3.classList.add("active");
});