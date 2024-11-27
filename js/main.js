
let nav=document.querySelector(".navbar");

window.onscroll=function(){
    if(document.documentElement.scrollTop>20)
    {
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

/*
/*=============scroll fix navbar ====================
let nav=document.querySelector(".navbar");

window.onscroll=function(){
    if(document.documentElement.scrollTop>20)
    {
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}
*/
let navbar = document.querySelectorAll(".nav-link");

let navcollapse = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navcollapse.classList.remove("show");
})
})

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })