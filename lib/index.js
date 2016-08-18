const $ = require('jquery')
var $userInput = $('.user-input')
var chats = []

loadUserChats();
// loadBotChats();

$('.send-button').on('click', function(){
  var userMessage = $('.user-input').val();
  addUserMessage();
  $userInput.val('');
  disableSend();
  setTimeout(function(){
    addBotMessage();
    var botMessage = $('.bot-message').text();
    storeChats(userMessage, botMessage);
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
  $('.chat').prepend(`<p class="user-message" style="color:red";>${$userInput.val()}<p>`);
};

function addBotMessage(){
  $('.chat').prepend(`<p class="bot-message" style="color:blue";>Hello<p>`)
};


function storeChats(userMessage, botMessage){
  chats.push(['user',userMessage], ['bot',botMessage]);
  localStorage.setItem('chats', JSON.stringify(chats));
};
//
// function loadUserChats(){
//   var i = 0
//   var chats = localStorage.getItem('chats');
//   var loadedChats = JSON.parse(chats);
//   if (loadedChats !== null){
//     for(var i = 0; i < loadedChats.length; i++) {
//       var user = loadedChats[i][0];
//       var message = loadedChats[i][1];
//       $('.chat').prepend(`<p class="${user}" style="color:red";>${message}<p>`);
//     }
//   }
// }

// function loadBotChats(){
//   var i = 0
//   var chats = localStorage.getItem('chats');
//   var loadedChats = JSON.parse(chats);
//     for(var i = 0; i < loadedChats.length; i++) {
//       $('.chat').prepend(`<p class="bot-message" style="color:blue";>Hello<p>`);
//   }
// }
