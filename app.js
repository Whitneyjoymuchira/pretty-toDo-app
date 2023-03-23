
//selectors

let todoButton = document.querySelector('.todo-button')
let input = document.querySelector('.todo-input')
let ulList = document.querySelector('.todo-list')
let container = document.querySelector('.todo-container')
let filterOption=document.querySelector('.filter-todo')

//event-listeners

todoButton.addEventListener('click', addToDo)
ulList.addEventListener('click', deleteCheck)
 filterOption.addEventListener('click', filtertodo)

function addToDo(event) {
 


    event.preventDefault()

    let inputValue = input.value
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    ulList.appendChild(todoDiv);

    const liList = document.createElement('li')
    liList.classList.add('liList')
    liList.innerText = inputValue
    //create checked button
    const checkedButton = document.createElement('button')
    checkedButton.innerHTML = "<i class='fas fa-check'> </>"
    checkedButton.classList.add('checked-button')
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fas fa-trash"> </i>'
    deleteButton.classList.add('delete-button')


    todoDiv.appendChild(liList);
    todoDiv.appendChild(checkedButton);
    todoDiv.appendChild(deleteButton);

    //clear todo input value
    input.value = ''


}
function deleteCheck(event){
const item=event.target

if(item.classList[0]=== 'delete-button' ){
    const todo=item.parentElement
    //animation
    todo.classList.add("fall")
    //eventlistener to call when transitiion is done
    todo.addEventListener('transitionend', ()=>{
        todo.remove()
    })
   
}
if(item.classList[0]=='checked-button'){
     const todo=item.parentElement;
     todo.classList.toggle('completed')
   
// todo.style.textDecoration="line-through"-done in styles
}

}
 function filtertodo(event){
const todos=ulList.childNodes
todos.forEach(function(todo){
    switch(event.target.value){
        case "all":
            todo.style.display="flex"
        break
        case "completed":
            if(todo.classList.contains('completed')){
                todo.style.display='flex'
            }else{
                todo.style.display="none"
            }
            break;
            case "uncompleted":
                if(todo.classList.contains('completed')){
                    todo.style.display="none"
                }
            
             break;


    }
})
 }



//check if there's something in storage
//revisit*
