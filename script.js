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

function todo(){
    let todoForm = document.querySelector(".todo-form")
let input = document.querySelector(".todo-form input")
let checkbox = document.querySelector(".todo-imp input")
let textarea = document.querySelector(".todo-form textarea")
let btn = document.querySelector("#todo-btn")

// localStorage.clear()
let tasklist = []
    tasklist = JSON.parse(localStorage.getItem("tasklist")) || []



function rendertask(){
    let alltask = document.querySelector('.todo-right')
    
    
    

var sum = ''
tasklist.forEach((elem,idx)=>{
    sum +=  `<div class="right-card">
                    <div class="class-top"> 
                    <h2>${elem.task}</h2>
                    <p>imp</p> 
                    </div>
                    <h3>${elem.desc}</h3>
                    <button id="${idx}">Completed</button>
                </div>`
})

alltask.innerHTML = sum
const tasklistString = JSON.stringify(tasklist);
    localStorage.setItem('tasklist',tasklistString)

let rightBtn = document.querySelectorAll('.right-card button')
    rightBtn.forEach((elem)=>{
        elem.addEventListener('click',function(){
            tasklist.splice(elem.id,1)
            rendertask()
        })
    })
    
}

rendertask()

todoForm.addEventListener('submit',function(e){
    e.preventDefault()
    
    tasklist.push(
        {
        task:input.value,
        desc:textarea.value,
        important:checkbox.checked
        }
    )
    rendertask()
    
    
    input.value =''
    textarea.value = ''
    checkbox.checked  = ''
    
    
})
}

todo()




 