index.js

$('.submit-button').on('click', function(){
  $('ul').append(`<li>${('.user-message').val()}</li>`)
})
