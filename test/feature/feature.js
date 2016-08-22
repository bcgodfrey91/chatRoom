const assert = require('assert')

describe ('webpage interaction', function(){
  it('should have a title', function(){
    browser.url('/')
    var title = browser.getTitle()
    assert.equal(title, 'ChatBot')
  })
})

describe('attributes of our application', function(){
  it('should have an input field that we can type in', function(){
    browser.url('/')
    var userInput = browser.element('.user-input')

    userInput.setValue('generally terrible comment')

    assert.equal(userInput.getValue(), 'generally terrible comment')
  })

  it('should have a button that lets us send that message', function(){

    browser.click('.send-button')
    var userMessage = browser.element('.user-message')

    assert.equal(userMessage.getText(), 'generally terrible comment')
  })

  it('should set input field back to blank', function(){
  var userInput= browser.element('.user-input')

  assert.equal(userInput.getValue(), '')
  })

  it('should disable the send button if user input is empty', function(){
    var userInput= browser.element('.user-input')

    var sendButton =  browser.element('.send-button')

    assert.equal(userInput.getValue(), '')
    assert.equal(sendButton.isEnabled(), false)
  })

  it('should generate a delayed response to the users message', function(){
    var botMessage = browser.element('.bot-message')

    browser.timeoutsImplicitWait(1200)
    assert.equal(typeof botMessage.getText(), 'string')
  })
})
