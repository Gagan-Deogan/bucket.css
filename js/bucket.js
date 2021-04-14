const hamBugerMenu = document.getElementById("hambuger-expand")
const dropDownMenu = document.getElementById("drop-down-menu")

const removeDropDown = () =>{
    dropDownMenu.style.display="none",
    dropDown.removeEventListener("click",removeDropDown);
    dropDown.addEventListener("click",showDropDown);
}

const showDropDown = () => {
    dropDownMenu.style.display="block";
    dropDown.removeEventListener("click",showDropDown);
    dropDown.addEventListener("click",removeDropDown);
}
const dropDown = document.getElementById("drop-down");
dropDown.addEventListener("click",showDropDown);

const removeHamMenu = () =>{
    hamBugerMenu.style.display="none";
    hamBuger.removeEventListener("click",removeHamMenu);
    hamBuger.addEventListener("click",showhamMenu);
}

const showhamMenu = ()=>{
    hamBugerMenu.style.display="block";
    hamBuger.removeEventListener("click",showhamMenu);
    hamBuger.addEventListener("click",removeHamMenu);
}
const openModel = () =>{
    document.getElementById("model-container").style.display="flex";
    document.body.style.overflow = "hidden";
} 
const closeModel = () =>{
    document.getElementById("model-container").style.display="none";
    document.body.style.overflow = "auto";
} 
document.getElementById("model-ok").addEventListener("click",closeModel)

const hamBuger = document.getElementById("hambuger");
hamBuger.addEventListener("click",showhamMenu)