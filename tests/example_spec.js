describe('Protractor Demo App', () => {
  it('Navigate to Supe Calculator App', () => {
    browser.get('http://juliemr.github.io/protractor-demo/');
    expect(browser.getTitle()).toEqual('Super Calculator');  
  });

  
}); 