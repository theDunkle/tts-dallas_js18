$(document).ready(function(){
  var name = $('#name')
  var email = $('#email')
  var number = $('#phone')
  var message = $('textarea#message')
  var warnMsg = $('p#message')
  var required = [name,email,number,message]

  $('#submit').on('click', function(event){
    event.preventDefault()
    console.log(typeof name.val());
    console.log(typeof email.val());
    console.log(typeof number.val());

    for(var i=0; i < required.length; i++){
      if(required[i].val() === ''){
        required[i].prev().addClass('warning')
        $('.warning').css('color','red')
        $('.warning').append("something")
      }
      else {
        required[i].prev().removeClass('warning')
      }
    }

    function validateEmailAddress(emailAddress) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        // alert( pattern.test(emailAddress) );
        if(pattern.test(emailAddress)){
          $(warnMsg.append("text"))
        }
    };
    
    function validatePhoneNumber(phonenumber) {
      var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      return pattern.test(phonenumber)
    }

    var emailTest = validateEmailAddress(email.val())
    var phoneTest = validatePhoneNumber(number.val())
    console.log(emailTest, phoneTest)
    console.log(message.val());

    if(name.val() === ''){
      $('warn-msg')
    }
  })
})
