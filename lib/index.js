const $ = require('jquery')
var $userInput = $('.user-input')


$('.send-button').on('click', function(){
  //prepending user message in input field
  $('.chat').prepend(`<p class="user-message" style="color:#FF0000";>${$userInput.val()}<p>`);
  //clearing out input field for new message
  $userInput.val('');
  $('.send-button').attr('disabled', true);
});

$userInput.on('keyup', function() {
    enableSend();
});

function enableSend() {
  var fieldIsEmpty = $userInput.val() === ''
  $('.send-button').attr('disabled', fieldIsEmpty)
};
