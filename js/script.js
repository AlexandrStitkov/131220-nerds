var link = document.querySelector(".btn-map");
var popup = document.querySelector(".modal");
var close = document.querySelector(".close");
var form = popup.querySelector("form");
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
});
form.addEventListener("submit", function(evt){
  if (!name.value && !email.value) {
    evt.preventDefault();
    form.classList.add('form-invalid');
    console.log("Заполните пустые поля");
  }
});