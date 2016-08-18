const $ = require('jquery')

$('.submit-button').on('click', function(){
  //prepending user message in input field
  $('.chat').prepend(`<li class='message'>${$('.user-message').val()}</li>`);
  //clearing out input field for new message
  $('.user-message').val('');
})

$('.user-message').on('keyup', function(){
  if ($('.user-message').val() === ''){
    return $('.submit-button').prop('disabled', true)}
    return $('.submit-button').prop('disabled', false)
});

function disableSend(){
  if ($('.user-message').val() === ''){
    return $('.submit-button').prop('disabled', true)
  }
};



disableSend();
