var list = document.querySelector("#list")

list.children[1].innerHTML = "Fair Trade Coffee"

list.children[3].remove()

var newLi = document.createElement('li')
newLi.innerHTML = 'Cheese Whiz'
list.append(newLi)

var newItems = ['protein powder', 'muscle milk', 'power bars']
Array.from(list.children).map(function(item, index) {
    item.remove()
    if (newItems[index]) {
        newItem = document.createElement('li')
        newItem.innerHTML = newItems[index]
        list.append(newItem)
    }
})

list[1].className = "Important"