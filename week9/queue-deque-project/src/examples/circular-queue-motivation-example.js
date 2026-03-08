const Queue = require('../queue');
const CircularQueue = require('../circular-queue');

function simulateArrayQueueWork(units) {
  const queue = new Queue();
  for (let i = 0; i < units; i++) queue.enqueue(i);

  // In array-backed queues, every shift can move many elements.
  let estimatedShifts = 0;
  for (let remaining = units; remaining > 0; remaining--) {
    queue.dequeue();
    estimatedShifts += remaining - 1;
  }

  return estimatedShifts;
}

function simulateCircularQueueWork(units, capacity = units) {
  const queue = new CircularQueue(capacity);
  for (let i = 0; i < units; i++) queue.enqueue(i);

  // Circular queue updates front/rear with modulo instead of shifting.
  let pointerUpdates = 0;
  while (!queue.isEmpty()) {
    queue.dequeue();
    pointerUpdates += 1;
  }

  return pointerUpdates;
}

const units = 10;
const arrayQueueCost = simulateArrayQueueWork(units);
const circularQueueCost = simulateCircularQueueWork(units);

console.log(`Array queue dequeue estimated shifts for ${units} items: ${arrayQueueCost}`);
console.log(`Circular queue dequeue pointer updates for ${units} items: ${circularQueueCost}`);
console.log('Key idea: circular queue avoids shifting by wrapping indices with modulo.');
console.log('Result: enqueue/dequeue are usually O(1) for circular queue operations.');
