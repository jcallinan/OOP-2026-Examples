const BrowserHistory = require('../browser-history');

const browser = new BrowserHistory();
browser.visit('loiane.com');
browser.visit('https://loiane.com/about');
browser.goBack();
console.log('after goBack:', browser.currentPage);
browser.goForward();
console.log('after goForward:', browser.currentPage);
