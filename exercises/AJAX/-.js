$(document).ready(function(){
  var body = $('body')

$.get('http://jsonplaceholder.typicode.com/users', function(users){
  var keys = Object.keys(users[0])
  console.log(keys);
  for (var i=0; i < users.length; i++){
    console.log(users[i].id);
    var id = users[i].id
    $.get('http://jsonplaceholder.typicode.com/todos', {userId: }, function(t){
      console.log(t)
      for (var i=0; i < t.length; i++){
        body.append('<div>'+t[i].title+'</div>')
    }
  });
})
}
})

// $.get('http://jsonplaceholder.typicode.com/todos', function(todos){
    // for (var i=0; i < todos.length; i++){
      // var div = document.createElement("div")
      // $(div).attr('id', todos[i].id)
      // $(div).text(todos[i].title)
      // $('body').append(div)
      // console.log(todos[i].userId);
    // }
  // });
