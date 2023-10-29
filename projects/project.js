const btnLeft = document.getElementById("left");     
const btnRight = document.getElementById("right");
const tongle = document.getElementById("tongle");

const show = document.getElementById("projectParent");

const macro_project_section = document.getElementById("macro-project-section");


btnLeft.addEventListener("click",rightClickHandler)
function leftClickHandler(){
    tongle.style.marginLeft = "153px";
    tongle.style.marginRight = "0";
    show.style.display = "none";
    macro_project_section.style.display = "block";
    btnRight.style.color = "#fff";
    btnLeft.style.color = "black"

}
btnRight.addEventListener("click",leftClickHandler)
function rightClickHandler(){
    tongle.style.marginRight = "151px";
    tongle.style.marginLeft = "0"; 
    show.style.display = "block";
    macro_project_section.style.display = "none";
    btnLeft.style.color = "#fff";
    btnRight.style.color = "black";
}