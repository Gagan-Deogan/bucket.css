const removeMoblieMenu = ()=>{
    document.getElementById('mob-nav').style.display = 'none'
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.getElementById('show-menu').removeEventListener('click',removeMoblieMenu);
    document.getElementById('show-menu').addEventListener('click',showMobileMenu);
}

const showMobileMenu = ()=>{
    document.getElementById('mob-nav').style.display = 'block'
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.getElementById('show-menu').removeEventListener('click',showMobileMenu);
    document.getElementById('show-menu').addEventListener('click',removeMoblieMenu);
}

document.getElementById('show-menu').addEventListener('click',showMobileMenu);

const toggleTheme = () =>{
    const body = document.body.classList;
    const toogleImage = document.getElementById('toogle-img');
    const bodyClasses = Array.from(body)
    if(!bodyClasses.includes('dark-theme')){
        body.add('dark-theme')
        toogleImage.src = '../assests/sun.svg';
    }else{
        body.remove('dark-theme');
        toogleImage.src = '../assests/moon.svg';

    }
}


// 
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
                    if (typeof callback == 'function') {
                        callback(visible,old_visible);
                        old_visible = visible;
                    }
                }else{
                    if(old_visible===undefined){
                        const underlines = document.querySelectorAll('.options');
                        // const resposive_underline = document.querySelectorAll('.options_mob');
                        if(underlines){
                            underlines[visible].classList.add('active_section');
                            // underlines[visible].style.width = '110%';
                        }
                        // if(resposive_underline){
                        //     resposive_underline[visible].classList.add('nav_active');
                        // }
                        old_visible = visible;
                    }
                }
            } 
        });
    }
}
const isActive = document.querySelectorAll('.is_active');

const handler = onVisibilityChange (isActive, function(visible,old_visible) {
    old_visible = old_visible || 0;
    const underlines = document.querySelectorAll('.options');
    // const resposive_underline = document.querySelectorAll('.options_mob');
    if(underlines){
        underlines[visible].classList.add('active_section');
        underlines[old_visible].classList.remove('active_section');
    }
    // if(resposive_underline){
    //     resposive_underline[visible].classList.add('nav_active');
    //     resposive_underline[old_visible].classList.remove('nav_active');
    // }
});
if (window.addEventListener) {
    addEventListener('DOMContentLoaded', handler, false);
    addEventListener('load', handler, false);
    addEventListener('scroll', handler, false);
    addEventListener('resize', handler, false);
    handler();
} else if (window.attachEvent)  {
    attachEvent('onDOMContentLoaded', handler);
    attachEvent('onload', handler);
    attachEvent('onscroll', handler);
    attachEvent('onresize', handler);
    handler();
}