const $ = require('jquery')
var $userInput = $('.user-input')


$('.send-button').on('click', function(){
  //prepending user message in input field
  addUserMessage();
  //clearing out input field for new message
  $userInput.val('');
  disableSend();
  addBotMessage();
  // setTimeout(function(){
  //   addBotMessage();
  // }, 1000);

});

$userInput.on('keyup', function() {
    enableSend();
});

function enableSend() {
  var fieldIsEmpty = $userInput.val() === ''
  $('.send-button').attr('disabled', fieldIsEmpty)
};

function disableSend(){
  $('.send-button').attr('disabled', true);
};

function addUserMessage(){
  $('.chat').prepend(`<p class="user-message" style="color:red";>${$userInput.val()}<p>`);
};

function addBotMessage(){
  $('.chat').prepend(`<p class="bot-message" style="color:blue";>Hello<p>`)
};
