var body = document.body

var head2 = document.createElement('h2')
head2.innerHTML = "To-Do List"
body.appendChild(head2)

var userInput = document.createElement('input')
userInput.setAttribute('id', 'user-input')
userInput.placeholder = 'Things to do'
body.appendChild(userInput)

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
    var newItem = document.createElement('li')
    newItem.innerHTML = "<input type='checkbox'>" + userInput.value
    newItem.addEventListener('click', function(event) {
        if (this.querySelector("input").checked) {
          this.style.textDecoration = 'line-through';
          var text = this.textContent
          var todoArray = Array.from(todoList.children)
          var index = todoArray.filter(function(item, index){
            if (text === item.textContent){
              return index;
            }
          })
          console.log(index);
        } else {
          console.log("false");
          this.style.textDecoration = 'none';
        }
    })
    todoList.appendChild(newItem)
})
