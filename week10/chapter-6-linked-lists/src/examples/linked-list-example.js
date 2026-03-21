const LinkedList = require('../linked-list');

const readingList = new LinkedList();
readingList.append('Arrays');
readingList.append('Stacks');
readingList.prepend('Big O Notation');
readingList.insert('Linked Lists', 2);

console.log('Linked list:', readingList.toString());
console.log('Index of Linked Lists:', readingList.indexOf('Linked Lists'));
console.log('Removed item:', readingList.remove('Stacks'));
console.log('After removal:', readingList.toString());
