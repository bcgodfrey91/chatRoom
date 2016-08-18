const assert = require('assert')

describe ('webpage interaction', function(){
  it('should have a title', function(){
    browser.url('/');
    var title = browser.getTitle();
    assert.equal(title, 'Cat Chat')
  });
})

describe('attributes of our application', function(){
  it('should have an input field that we can type in', function(){
    browser.url('/');
    var userMessage = browser.element('.user-input')

    userMessage.setValue('generally terrible comment')

    assert.equal(userMessage.getValue(), 'generally terrible comment')
  })

  it('should have a button that lets us send that message', function(){

    browser.click('.send-button')
    var allIdeas = browser.element('.message')

    assert.equal(allIdeas.getText(), 'generally terrible comment')
  })

  it('should set input field back to blank', function(){
  var userMessage = browser.element('.user-input')

  assert.equal(userMessage.getValue(), '')
  })

  // it('should disable the send button if user has not typed anything', function(){
  //
  // })


})
