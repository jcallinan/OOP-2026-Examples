const Queue = require('../queue');
const CircularQueue = require('../circular-queue');

console.log('Common Mistake 1: Confusing front/rear semantics');
const q1 = new Queue();
q1.enqueue('first');
q1.enqueue('second');
console.log('front() should be "first":', q1.front());
console.log('dequeue() should remove "first":', q1.dequeue());

console.log('\nCommon Mistake 2: Using stack behavior for a queue');
const q2 = new Queue();
q2.enqueue('A');
q2.enqueue('B');
q2.enqueue('C');
console.log('Queue order (FIFO):', q2.dequeue(), q2.dequeue(), q2.dequeue());
console.log('If this were stack (LIFO), order would be C, B, A (wrong for queue use-cases).');

console.log('\nCommon Mistake 3: Ignoring empty-state checks');
const empty = new Queue();
console.log('dequeue() on empty queue returns:', empty.dequeue());
console.log('front() on empty queue returns:', empty.front());

console.log('\nCommon Mistake 4: Forgetting circular queue capacity handling');
const cq = new CircularQueue(2);
cq.enqueue('X');
cq.enqueue('Y');
try {
  cq.enqueue('Z');
} catch (error) {
  console.log('enqueue beyond capacity throws:', error.message);
}
