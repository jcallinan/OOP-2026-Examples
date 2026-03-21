const CircularLinkedList = require('../circular-linked-list');

const roundRobin = new CircularLinkedList();
roundRobin.append('Task A');
roundRobin.append('Task B');
roundRobin.prepend('Task 0');
roundRobin.append('Task C');

console.log('Circular list:', roundRobin.toString());
console.log('Removed tail:', roundRobin.removeAt(3));
console.log('After removal:', roundRobin.toString());
