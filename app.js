// Scroll To Top

const btnTop=document.querySelector(".btntop");

btnTop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
})

// Tab

const list=document.querySelectorAll(".about-aside-list-item");


