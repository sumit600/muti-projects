function openFeature(){
    
let elem = document.querySelectorAll('.elem')

elem.forEach(function(elem){
    elem.addEventListener("click",function(){
        document.querySelectorAll(".fullPage")[elem.id].style.display = "block"
    })
})

let backbtn = document.querySelectorAll(".back")

backbtn.forEach(function(elem){
   elem.addEventListener('click',function(){
    document.querySelectorAll(".fullPage")[elem.id].style.display = "none"

   })
})
}

openFeature()

