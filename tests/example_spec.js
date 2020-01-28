var homepage = require('../pages/homepage'); 
describe('Protractor Demo App', () => {
  var url = 'http://juliemr.github.io/protractor-demo/'; 

  // Open the homepage url 
  homepage.get(url); 

  it('Verify the web\'s title', () => {
    var webTitle = browser.getTitle(); 
    expect( webTitle ).toEqual('Super Calculator'); 
  }); 

  it('one plus two', () => {
    homepage.enterFirstNumber(5); 
    homepage.enterSecondNumber(6); 
    homepage.clickGo(); 
    
    homepage.verifyResult(); 
  });
  
  it('Verify the history', () => {
    
  });
}); 

describe('Verify the history of the app', () => {
  var firstNumber = element(by.model('first')); 
  var secondNumber = element(by.model('second')); 
  var goButton = element(by.id('gobutton')); 
  var history = element.all(by.repeater('result in memory')); 

  beforeEach(() => {
    browser.get('http://juliemr.github.io/protractor-demo/');
  }); 
  
  function add(a, b){
    firstNumber.sendKeys(a); 
    secondNumber.sendKeys(b); 
    goButton.click(); 
  }

  it('Verify the history', () => {
    add(1, 2); 
    add(5, 6); 

    expect(history.count()).toEqual(2); 

    add(5, 6); 
    expect(history.count()).toEqual(3); 
  });
}); 