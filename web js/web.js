let btn=document.getElementById("sarch-btn")
btn.addEventListener("click",function(){
    let search=document.getElementById("sarch-bar-pages");
    search.style.visibility="visible"
     search.style.opacity="1"
     search.style. transitionDelay="0s"
     let dis=document.getElementById("search-bg").style.display="block"
})
let btn2=document.getElementById("search-cut-btn")
btn2.addEventListener("click",function(){
     let search=document.getElementById("sarch-bar-pages");
    search.style.visibility="hidden"
      let dis=document.getElementById("search-bg").style.display="none"
})
const settingsBtn = document.getElementById('setting');
const sidePanel = document.getElementById('sidePanel');

settingsBtn.addEventListener('click', () => {
     sidePanel.classList.toggle('open');
});

function closePanel() {
     sidePanel.classList.remove('open');
}