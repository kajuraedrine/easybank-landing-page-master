const menu = document.querySelector('.menu');
console.log(menu);
 menu.addEventListener('click',()=>{
    const navlistmobo=document.querySelector('.navlist-mobo');
    const close=document.querySelector('.close')
    menu.style.transform="scale(0)";
    close.style.transform="scale(1)";
    navlistmobo.style.transform ='scale(1)';
    close.addEventListener("click",()=>{
    navlistmobo.style.transform ='scale(0)';
    menu.style.transform="scale(1)"
    close.style.transform="scale(0)"
    })

})