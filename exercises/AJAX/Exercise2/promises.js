$(document).ready(function(){
  var body = $('body')

  $('#button').on('click', function(){
    var self = $(this);
    // console.log('button clicked!');
    // self.html('FOO');
    // self.css('color', 'red');
    var nameInText = self.prev().val()
    var nameEntered = $('#name').val();
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(data){
        console.log(data)
        return data
        self.append('<p>'data'</p>')
      })
      .catch(function() {
        console.log("Booo");
      });
    console.log(nameInText, nameEntered);
    }
  });
});
