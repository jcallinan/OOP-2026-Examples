const Deque = require('../deque');

const deque = new Deque();
deque.addRear('Task B');
deque.addFront('Urgent Task A');
deque.addRear('Task C');

console.log('front:', deque.peekFront());
console.log('rear:', deque.peekRear());
console.log('size:', deque.size());
console.log('removeFront:', deque.removeFront());
console.log('removeRear:', deque.removeRear());
console.log('remaining:', deque.toString());
