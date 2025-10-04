let btn = document.getElementById("sarch-btn")
btn.addEventListener("click", function () {
     let search = document.getElementById("sarch-bar-pages");
     search.style.visibility = "visible"
     search.style.opacity = "1"
     search.style.transitionDelay = "0s"
     let dis = document.getElementById("search-bg").style.display = "block"
})
let btn2 = document.getElementById("search-cut-btn")
btn2.addEventListener("click", function () {
     let search = document.getElementById("sarch-bar-pages");
     search.style.visibility = "hidden"
     let dis = document.getElementById("search-bg").style.display = "none"
})
const settingsBtn = document.getElementById('setting');
const sidePanel = document.getElementById('sidePanel');

settingsBtn.addEventListener('click', () => {
     sidePanel.classList.toggle('open');
});

function closePanel() {
     sidePanel.classList.remove('open');
}

let val = document.getElementById("berger-btn")

val.addEventListener("click", function () {
     let sums = document.getElementById("berger-side-bar")
     sums.style.visibility = "visible"
     sums.style.left = "0px"
     sums.style.width = "calc(100% - 64px)"


})

let cutbtn = document.getElementById("berger-cut")
cutbtn.addEventListener("click", function () {
     let sum = document.getElementById("berger-side-bar")
     sum.style.width = "24px"
     sum.style.left = "-480px"



})
let num = document.getElementById("sums")
let shophover = document.getElementById("hover-shop")
shophover.addEventListener("mouseenter", function () {
     num.style.visibility = "visible"
     num.style.opacity = "1"
     num.style.transitionDelay = "0s"
})

num.addEventListener('mouseleave', () => {
     num.style.visibility = "hidden";
     num.style.opacity = "0";
     num.style.transition = " visibility 0s 0.1s, opacity 0.5s linear 0.1s";
});

let berderinnerpade = document.getElementById("berger-icons-btn")
let brdershoup = document.getElementById("berger-inner-btn")
berderinnerpade.addEventListener("click", function () {
     brdershoup.style.display = "block"
     brdershoup.style.width = "calc(100% - 64px)"
     brdershoup.style.left = "50px "

})
let exit = document.getElementById("exit")
exit.addEventListener("click", function () {
     brdershoup.style.display = "block"
     brdershoup.style.width = "0px"
     brdershoup.style.left = "0 "
     brdershoup.style.display = "none"
})