require('./styles')
const $ = require('jquery')
const Message = require('./message')
const Chatroom = require('./chatroom');
var $userInput = $('.user-input')

var chatroom = new Chatroom();

var deleteMessage = function() {
  $('.delete-button').on('click', function() {
    var messageToDeleteId = $(this).data('id')
    chatroom.removeMessageFromStorage(messageToDeleteId)
    $('.chat').empty()
    onLoad()
  })
}

var onLoad = function() {
  if (chatroom.messages.length > 0) {
    chatroom.messages.forEach(function(message, index) {
      if (typeof message === 'object') {
        $('.chat').append(`<section class="message-container"><p class="user-message" data-id=${index} contenteditable="true">${message.text}</p><button class="
        delete-button" data-id=${index}>Delete</button></section>`);
      } else if (typeof message === 'string') {
        $('.chat').append(`<p class="bot-message">${message}</p>`)
      }
    })
  }
  deleteMessage()
}

onLoad()

$('.send-button').on('click', function(){
  var userMessage = $userInput.val();
  addUserMessage();
  $userInput.val('');
  disableSend();
  setTimeout(function(){
    addBotMessage();
    var id = chatroom.messages.length
    var messagesLength = $('.chat').children().length
    var botMessage = $($('.chat').children()[messagesLength - 1]).text()
    chatroom.storeMessages(id, 'USER1', userMessage, botMessage);
    $('.chat').empty()
    onLoad()
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
  $('.chat').append(
    `<section class="message-container"><p class="user-message" data-id=${id} contenteditable="true">${$userInput.val()}</p><button class="delete-button" data-id=${id}>Delete</button></section>`
  );
};

function addBotMessage(){
  var botMessage = randomBotResponse()
  $('.chat').append(`<p class="bot-message">${botMessage}</p>`)
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

$('.chat').on('focusout', '.user-message', function() {
  var newText = $(this).text()
  var currentId = $(this).data('id')
  var message = new Message({id: currentId, user: 'bob', text: newText})
  chatroom.editMessage(message)
});

$userInput.on('keyup', function(){
  var inputLength = $(this).val().length
  $('.character-counter').text(`Counter: ${inputLength}`)
})
