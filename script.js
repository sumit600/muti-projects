
let elem = document.querySelectorAll('.elem')

elem.forEach(function(elem){
    elem.addEventListener("click",function(){
        document.querySelectorAll(".fullPage")[elem.id].style.display = "block"
    })
})

