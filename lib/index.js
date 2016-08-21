require('./styles')
const $ = require('jquery')
const Message = require('./message')
const Chatroom = require('./chatroom');
var $userInput = $('.user-input')
var chats = []

var chatroom = new Chatroom();

var onLoad = function() {
  if (chatroom.messages.length > 0) {
    chatroom.messages.forEach(function(message, index) {
      if (index % 2 === 0) {
        $('.chat').prepend(`<p class="user-message" data-id=${index} contenteditable="true">${message.text}<p><button>Delete</button>`);
      } else {
        $('.chat').prepend(`<p class="bot-message">${message}<p>`)
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
    var botMessage = $($('.chat').children()[0]).text()
    var id = chatroom.messages.length
    chatroom.storeMessages(id, 'bob', userMessage, botMessage);
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
  if (localStorage.getItem('messages')) {
    var id = localStorage.getItem('messages').length
  } else {
    var id = 0
  }
  $('.chat').prepend(
    `
      <p class="user-message" data-id=${id} contenteditable="true">${$userInput.val()}<p><button>Delete</button>
    `
  );
};

function addBotMessage(){
  var botMessage = randomBotResponse()
  $('.chat').prepend(`<p class="bot-message">${botMessage}<p>`)
};

function randomBotResponse() {
  var words1 = ["Hey, ", "OMG! ", "Suh Dude? ", "WTF?! ", "Uhh.. ", "Dude.. ", "Son-of-a *&%$#! "]
  var words2 = ["What time is it? ", "I'm confused. ", "How are you doing? ", "I know where you live. ", "This chat is kinda lonely. ", "By the way.. "]
  var words3 = ["Can I come over?", "Are you getting hungry?", "Are the Olympics over?", "Sike, I've been in your closet for a week.", "Cake and grief counseling will be available after class.", "I need a nap."]

  var rand1 = Math.floor(Math.random() * words1.length)
  var rand2 = Math.floor(Math.random() * words2.length)
  var rand3 = Math.floor(Math.random() * words3.length)

  var phrase = words1[rand1] + words2[rand2] + words3[rand3]

  return phrase
}

// $('.chat').on('focusout', '.user-message', function() {
//     var newText = $(this).text()
//     var currentId = $(this).data('id')
//     var message = new Message({id: currentId, user: 'bob', text: newText})
//     chatroom.editMessage(message)
// });
