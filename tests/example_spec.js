describe('Protractor Demo App', () => {
  it('Navigate to Super Calculator App', () => {
    browser.get('http://juliemr.github.io/protractor-demo/');
    expect('Super Calculator').toEqual(browser.getTitle());  
  });

  it('one plus two', () => {
    element(by.model('first')).sendKeys(1); 
    element(by.model('second')).sendKeys(2); 
    element(by.id('gobutton')).click();
    
    expect(element(by.binding('latest')).getText()).toEqual(5); 
  });
  
}); 