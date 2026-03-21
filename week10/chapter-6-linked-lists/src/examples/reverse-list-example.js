const reverseList = require('../reverse-list');

function node(val, next = null) {
  return { val, next };
}

const head = node(1, node(2, node(3, node(4, node(5)))));
const reversed = reverseList(head);

const values = [];
let current = reversed;
while (current) {
  values.push(current.val);
  current = current.next;
}

console.log('Reversed values:', values);
