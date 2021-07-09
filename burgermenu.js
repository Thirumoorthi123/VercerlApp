const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Section hidden
document.getElementById("ham").addEventListener("click",function(){
    var hid = document.getElementById('contt');
    if(hid.style.display=="none"){
        hid.style.display="block";
    }
    else
    {
        hid.style.display="none";
    }
})

// list data part one
document.getElementById("list-click").addEventListener("click",function(){
    var show = document.getElementById('data');
    if(show.style.display=="none"){
        show.style.display="block";
    }
    else
    {
        show.style.display="none";   
    }
})
// list data part two
document.getElementById("list-click-two").addEventListener("click",function(){
    var show = document.getElementById('data-one');
    if(show.style.display=="none"){
        show.style.display="block";
    }
    else
    {
        show.style.display="none";   
    }
})
//Frame list data part
document.getElementById("fram-img").addEventListener("click",function(){
    var framelist = document.getElementById('fram-list');
    if(framelist.style.display=="none"){
        framelist.style.display="block";
    }
    else
    {
        framelist.style.display="none";   
    }
})
//Resource list data part
document.getElementById("Res-img").addEventListener("click",function(){
    var framelist = document.getElementById('Res-list');
    if(framelist.style.display=="none"){
        framelist.style.display="block";
    }
    else
    {
        framelist.style.display="none";   
    }
})
//Company list data part
document.getElementById("com-img").addEventListener("click",function(){
    var comlist = document.getElementById('com-list');
    if(comlist.style.display=="none"){
        comlist.style.display="block";
    }
    else
    {
        comlist.style.display="none";   
    }
})

//Legal list data part
document.getElementById("leg-img").addEventListener("click",function(){
    var leglist = document.getElementById('leg-data');
    if(leglist.style.display=="none"){
        leglist.style.display="block";
    }
    else
    {
        leglist.style.display="none";   
    }
})


//Image slider


