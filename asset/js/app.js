let axtaris = document.querySelector("#axtaris")
let lupa_js = document.querySelector(".lupa-js")
let center = document.querySelector(".header-center")
axtaris.addEventListener("click", function(e){
    center.style.display="none"
    lupa_js.classList.toggle("active");
    
     e.preventDefault()
})


let span_x = document.querySelector("#span-x");
// let akula = document.querySelector(".akula")
span_x.addEventListener("click", ()=>{
    lupa_js.classList.remove("active");
    center.style.display="block"

})

let aze = document.querySelector("#languageAZ");

let azelang = document.querySelector(".languageJs");

aze.addEventListener("click" , (e) =>{
    azelang.classList.toggle("lang")
    document.getElementById("icon").classList.toggle("icon")
    e.preventDefault();
})

let bar = document.querySelector("#menubars");
let menu = document.querySelector(".menus")

bar.addEventListener("click" , function(e){
    menu.classList.toggle("mm")

    e.preventDefault()
})



