var elForm = document.querySelector(".form")
var elSelect = document.querySelector(".select")
var dolar = 11223;
var euro = 11631;
var rubl = 184;
var h1 = document.querySelector("h1")
var elinput = document.querySelector(".input")

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    console.log(elSelect.value);
    if (elSelect.value == "euro") {
        h1.textContent = (elinput.value / euro).toFixed(2) + " 💶"
    } else if (elSelect.value == "usd") {
        h1.textContent = (elinput.value / dolar).toFixed(2) + " 💵"
    } else if (elSelect.value == "rubl") {
        h1.textContent = (elinput.value / rubl).toFixed(2) + " ₽"
    } else if (isNaN(elinput)) {
        h1.textContent = "Son kiriting"
    } else if (elinput < 0) {
        h1.textContent = "Minus son kiritish munkun emas"
    }


});