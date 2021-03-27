var hamBugerMenu = document.getElementById('hambuger-expand')
var dropDownMenu = document.getElementById('drop-down-menu')

var removeDropDown = () =>{
    dropDownMenu.style.display='none',
    dropDown.removeEventListener('click',removeDropDown);
    dropDown.addEventListener('click',showDropDown);
}

var showDropDown = () => {
    dropDownMenu.style.display='block';
    dropDown.removeEventListener('click',showDropDown);
    dropDown.addEventListener('click',removeDropDown);
}
var dropDown = document.getElementById('drop-down');
dropDown.addEventListener('click',showDropDown);

var removeHamMenu = () =>{
    hamBugerMenu.style.display='none';
    hamBuger.removeEventListener('click',removeHamMenu);
    hamBuger.addEventListener('click',showhamMenu);
}

var showhamMenu = ()=>{
    hamBugerMenu.style.display='block';
    hamBuger.removeEventListener('click',showhamMenu);
    hamBuger.addEventListener('click',removeHamMenu);
}
var openModel = () =>{
    document.getElementById('mod-con').style.display='flex';
    document.body.style.overflow = 'hidden';
} 
var closeModel = () =>{
    document.getElementById('mod-con').style.display='none';
    document.body.style.overflow = 'auto';
} 
document.getElementById('mod-ok').addEventListener('click',closeModel)

var hamBuger = document.getElementById('hambuger');
hamBuger.addEventListener('click',showhamMenu)