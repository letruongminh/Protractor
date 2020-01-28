describe('Protractor Demo App', () => {
  var firstNumber = element(by.model('first')); 
  var secondNumber = element(by.model('second')); 
  var goButton = element(by.id('gobutton')); 
  var latestRes = element(by.binding('latest')); 

  beforeEach(() => {
    browser.get('http://juliemr.github.io/protractor-demo/');
  }); 

  it('Verify the web\'s title', () => {
    var webTitle = browser.getTitle(); 
    expect( webTitle ).toEqual('Super Calculator'); 
  }); 

  it('one plus two', () => {
    firstNumber.sendKeys(1); 
    secondNumber.sendKeys(2); 
    goButton.click();
    
    expect( latestRes.getText()).toEqual('3'); 
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