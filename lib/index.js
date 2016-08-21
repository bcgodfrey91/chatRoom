require('./styles')
const $ = require('jquery')
const Chatroom = require('./chatroom');
var $userInput = $('.user-input')
var chats = []

var chatroom = new Chatroom();

var onLoad = function() {
  if (chatroom.messages.length > 0) {
    chatroom.messages.forEach(function(message, index) {
      if (index % 2 === 0) {
        $('.chat').prepend(`<p class="user-message">${message}<p>`);
      } else {
        $('.chat').prepend(`<p class="bot-message">Hello<p>`)
      }
    })
  }
}

onLoad()

$('.send-button').on('click', function(){
  var userMessage = $('.user-input').val();
  addUserMessage();
  $userInput.val('');
  disableSend();
  setTimeout(function(){
    addBotMessage();
    var botMessage = 'Hello';
    chatroom.storeMessages(userMessage, botMessage);
  }, 1000);
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
  $('.chat').prepend(`<p class="user-message">${$userInput.val()}<p>`);
};

function addBotMessage(){
  $('.chat').prepend(`<p class="bot-message">Hello<p>`)
};
