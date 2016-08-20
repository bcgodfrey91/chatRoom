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

  it('should have a function that stores a message to the array', function(){
    var chatroom = new Chatroom({});
    var message = new Message({id: 'id', user: 'user', text: 'text'})

    chatroom.storeMessage(message);

    assert.equal(chatroom.messages.length, 1)
  })
})
