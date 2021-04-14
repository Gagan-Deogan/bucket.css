const removeMobileMenu = ()=>{
    document.querySelector("#mob-nav").style.display = "none"
    document.body.style.overflow = "auto";
    document.querySelector("#show-menu").removeEventListener("click",removeMobileMenu);
    document.querySelector("#show-menu").addEventListener("click",showMobileMenu);
    document.querySelector("#ham-icon").src = "../assests/menu.svg"
}
const showMobileMenu = ()=>{
    document.querySelector("#mob-nav").style.display = "flex"
    document.body.style.overflow = "hidden";
    document.querySelector("#show-menu").removeEventListener("click",showMobileMenu);
    document.querySelector("#show-menu").addEventListener("click",removeMobileMenu);
    document.querySelector("#ham-icon").src = "../assests/close-white.svg"
}

document.querySelector("#show-menu").addEventListener("click",showMobileMenu);

const elementInViewport2 = (el) => {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}
// nav bar setting


const onVisibilityChange = (el, callback) => {
    var old_visible;
    return function () {
        el.forEach((ele,index)=>{
            if(elementInViewport2(ele)){
                var visible = index;
                if (visible != old_visible && old_visible!==undefined ) {
                    if (typeof callback == "function") {
                        callback(visible,old_visible);
                        old_visible = visible;
                    }
                }else{
                    if(old_visible===undefined){
                        const options = document.querySelectorAll(".options");
                        const mobOptions = document.querySelectorAll(".mob-options");
                        if(options){
                            options[visible].classList.add("active_section");
                        }
                        if(mobOptions){
                            mobOptions[visible].classList.add("active_section");
                        }
                        old_visible = visible;
                    }
                }
            } 
        });
    }
}
const isActive = document.querySelectorAll(".is_active");

const handler = onVisibilityChange (isActive, function(visible,old_visible) {
    old_visible = old_visible || 0;
    const options = document.querySelectorAll(".options");
    const mobOptions = document.querySelectorAll(".mob-options");
    if(options){
        options[visible].classList.add("active_section");
        options[old_visible].classList.remove("active_section");
    }
    if(mobOptions){
        mobOptions[visible].classList.add("active_section");
        mobOptions[old_visible].classList.remove("active_section");
    }
});
if (window.addEventListener) {
    addEventListener("DOMContentLoaded", handler, false);
    addEventListener("load", handler, false);
    addEventListener("scroll", handler, false);
    addEventListener("resize", handler, false);
    handler();
} else if (window.attachEvent)  {
    attachEvent("onDOMContentLoaded", handler);
    attachEvent("onload", handler);
    attachEvent("onscroll", handler);
    attachEvent("onresize", handler);
    handler();
}