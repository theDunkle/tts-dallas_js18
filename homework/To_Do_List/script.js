var body = document.body

var head2 = document.createElement('h2')
head2.innerHTML = "To-Do List"
body.appendChild(head2)

var input = document.createElement('input')
input.setAttribute('id', 'user-input')
input.placeholder = 'Things to do'
body.appendChild(input)

var button = document.createElement('button')
button.id = 'submit-item'
button.type = 'submit'
button.innerHTML = "Submit"
body.appendChild(button)

var div = document.createElement('div')
div.id = 'checklists'
body.appendChild(div)

var todoList = document.createElement('ul')
todoList.id = 'list'
div.appendChild(todoList)

button.addEventListener('click', function(event) {
    event.preventDefault()
    console.log(input.value)
    var newItem = document.createElement('li')
    newItem.innerHTML = "<input type='checkbox'>" + input.value
    newItem.addEventListener('click', function(event) {
        event.target.remove()
    })
    todoList.appendChild(newItem)
})