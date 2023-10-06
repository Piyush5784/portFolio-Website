const btnLeft = document.getElementById("left");     
const btnRight = document.getElementById("right");
const tongle = document.getElementById("tongle");

const show = document.getElementById("projectParent");


btnLeft.addEventListener("click",rightClickHandler)
function leftClickHandler(){
    tongle.style.marginLeft = "153px";
    tongle.style.marginRight = "0";
    show.style.display = "none";
    btnRight.style.color = "#fff";
    btnLeft.style.color = "black"

}
btnRight.addEventListener("click",leftClickHandler)
function rightClickHandler(){
    tongle.style.marginRight = "151px";
    tongle.style.marginLeft = "0";
    
    show.style.display = "block";
    btnLeft.style.color = "#fff";
    btnRight.style.color = "black";
}