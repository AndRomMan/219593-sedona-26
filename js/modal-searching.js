var startSearching = document.querySelector(".hotel-searching__button");
var popup = document.querySelector(".modal-searching");
var arrivalDate = popup.querySelector("[name=arrival-date]");
var departureDate = popup.querySelector("[name=departure-date]");
var adults = popup.querySelector("[name=adults]");
var kids = popup.querySelector("[name=kids]");
var form = popup.querySelector("form");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("arrivalDate");
} catch (err) {
  isStorageSupport = false;
}

// popup.classList.remove("modal-hide");
popup.classList.add("modal-show");
// arrivalDate.focus();


startSearching.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-error");

  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-hide");
  } else {
    popup.classList.remove("modal-hide");
    popup.classList.add("modal-show");
    arrivalDate.focus();
  }
});

form.addEventListener("submit", function (evt) {
  // evt.preventDefault();
  if (!arrivalDate.value || !departureDate.value || !adults.value || !kids.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    // console.log("Нужно ввести логин и пароль");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("arrival date", arrivalDate.value);
      localStorage.setItem("departure date", departureDate.value);
      localStorage.setItem("number of adults", adults.value);
      localStorage.setItem("number of kids", kids.value);
      popup.classList.add("modal-hide");
      popup.classList.remove("modal-show");
    }
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    popup.classList.remove("modal-hide");
  }
});
