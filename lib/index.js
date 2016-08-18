const $ = require('jquery')
var $userInput = $('.user-input')
var chats = []


loadUserChats();
// loadBotChats();

$('.send-button').on('click', function(){
  var userMessage = $('.user-input').val();
  storeUserChats(userMessage);
  addUserMessage();
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


function storeUserChats(userMessage){
  chats.push(userMessage);
  localStorage.setItem('chats', JSON.stringify(chats));
};

function loadUserChats(){
  var i = 0
  var chats = localStorage.getItem('chats');
  var loadedChats = JSON.parse(chats);
    for(var i = 0; i < loadedChats.length; i++) {
      $('.chat').prepend(`<p class="user-message" style="color:red";>${loadedChats[i]}<p>`);
  }
}
