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

let todoForm = document.querySelector(".todo-form")
let input = document.querySelector(".todo-form input")
let checkbox = document.querySelector(".todo-imp input")
let textarea = document.querySelector(".todo-form textarea")
let btn = document.querySelector("#todo-btn")
let tasklist = [
    {task:'do push ups',
    desc:'3 set 1st set 30reps 2nd set 15rep 3rd set 10rep',
    important:'true'},
    {task:'start learning',
    desc:'web development',
    important:'true'},
]

function rendertask(){
    let alltask = document.querySelector('.todo-right')

var sum = ''
tasklist.forEach((elem)=>{
    sum +=  `<div class="right-card">
                    <div class="class-top"> 
                    <h2>${elem.task}</h2>
                    <p>imp</p> 
                    </div>
                    <h3>${elem.desc}</h3>
                    <button>Completed</button>
                </div>`
})

alltask.innerHTML = sum
}

rendertask()

todoForm.addEventListener('submit',function(e){
    e.preventDefault()
    

    console.log()
    console.log()
    console.log()

    tasklist.push(
        {
        task:input.value,
        desc:textarea.value,
        important:checkbox.checked
        }
    )
    input.value =''
    textarea.value = ''
    checkbox.checked  = ''
    rendertask()
})
