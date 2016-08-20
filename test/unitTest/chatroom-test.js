const assert = require('chai').assert;
const Chatroom = require('../../lib/chatroom')
const Message = require('../../lib/message')

describe ('Chatroom', function(){
  it('should create a function', function(){
    assert.isFunction(Chatroom)
  })

  it('should be an object', function(){
    var chatroom = new Chatroom({})

    assert.isObject(chatroom)
  })

  it('should have an array where it will store messages', function(){
    var chatroom = new Chatroom({});

    assert.deepEqual(chatroom.messages, []);
  })

  it('should have a function that places a message to the array', function(){
    var chatroom = new Chatroom({});
    var message = new Message({id: 'id', user: 'user', text: 'text'})

    chatroom.createMessage(message)

    assert.equal(chatroom.messages.length, 1)
  })

  it('should let a message maintain its properties once it is placed into the array', function(){
    var chatroom = new Chatroom({});
    var message = new Message({id: 'id', user: 'user', text: 'text'})

    chatroom.createMessage(message)

    assert.equal(chatroom.messages[0].id, 'id')
    assert.equal(chatroom.messages[0].user, 'user')
    assert.equal(chatroom.messages[0].text, 'text')
  })

  it('should be able to store messages in local storage', function(){
    var chatroom = new Chatroom({});
    var message = new Message({id: 'id', user: 'user', text: 'text'});

    chatroom.createMessage(message);
    chatroom.storeMessage(message);

    var storedMessages = JSON.parse(localStorage.getItem('messages'));

    assert.equal(chatroom.messages[0].id, storedMessages[0].id);
  })

  it('should be able to retreive messages from local storage', function(){
    var chatroom = new Chatroom({});
    var message = new Message({id: 'id', user: 'user', text: 'text'});

    chatroom.createMessage(message);
    chatroom.storeMessage(message);

    var storedMessages = chatroom.retrieveMessages();

    assert.equal(chatroom.messages[0].id, storedMessages[0].id);
  })

  
})
