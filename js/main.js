
var elform = document.querySelector(".js-form")
var elInputem = document.querySelector(".email")
var elInputps = document.querySelector(".password")
elform.addEventListener("submit", function (evt) {
    evt.preventDefault();
    console.log("hello");
    if (elInputem.value == "jalol@gmail.com" && elInputps.value == "jalol") {
        location.href = "../main.html"
    }
})
