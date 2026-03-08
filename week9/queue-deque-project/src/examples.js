const Queue = require('./queue');
const BrowserHistory = require('./browser-history');
const hotPotato = require('./hot-potato');
const isPalindrome = require('./palindrome');

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue({ document: 'Chapter05.docx', pages: 20 });
queue.enqueue({ document: 'JavaScript.pdf', pages: 60 });
queue.enqueue({ document: 'TypeScript.pdf', pages: 80 });
console.log(queue.front());
console.log(queue.size);
while (!queue.isEmpty()) {
  console.log(queue.dequeue());
}

const browser = new BrowserHistory();
browser.visit('loiane.com');
browser.visit('https://loiane.com/about');
browser.goBack();
console.log(browser.currentPage);
browser.goForward();
console.log(browser.currentPage);

const players = ['Violet', 'Feyre', 'Poppy', 'Oraya', 'Aelin'];
const winner = hotPotato(players, 7);
console.log(`The winner is: ${winner}!`);

console.log(isPalindrome('racecar'));
