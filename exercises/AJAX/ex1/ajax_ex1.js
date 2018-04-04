$(document).ready(function(){
  var body = $('body')

  $.ajax({
  	method: 'GET',
  	url: 'http://jsonplaceholder.typicode.com/posts/12/comments',
  	data: {   },
  	complete: function(response){
      console.log(response.responseJSON);

  		//handle response which usually includes the updated object.
  	}
  })
})
