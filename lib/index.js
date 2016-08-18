const $ = require('jquery')

$('.send-button').on('click', function(){
  //prepending user message in input field
  $('.chat').prepend(`<p>${$('.user-message').val()}<p>`);
  //clearing out input field for new message
  $('.user-message').val('');
});

$('.user-message').on('keyup', function() {
    enableSend();
});

function enableSend() {
  var fieldIsEmpty = $('.user-message').val() === ''
  $('.send-button').attr('disabled', fieldIsEmpty)
};
