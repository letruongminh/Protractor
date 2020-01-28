var homepage = function() {
  var firstNumber_input = element(by.model('first')); 
  var secondNumber_input = element(by.model('second')); 
  var goButton = element(by.id('gobutton')); 
  var latestRes = element(by.binding('latest')); 

  this.get = (url) => {
    browser.get(url);
  }

  this.enterFirstNumber = (firstNumber) => {
    firstNumber_input.sendKeys(firstNumber); 
  }

  this.enterSecondNumber = (secondNumber) => {
    secondNumber_input.sendKeys(secondNumber); 
  }

  this.clickGo = () => {
      goButton.click(); 
  }

  this.verifyResult = () => {
      
    expect( latestRes.getText() )
      .toEqual('11'); 

  }
}

module.exports = new homepage(); 