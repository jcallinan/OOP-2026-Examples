const Queue = require('../queue');

const queue = new Queue();
console.log('isEmpty:', queue.isEmpty());
queue.enqueue({ document: 'Chapter05.docx', pages: 20 });
queue.enqueue({ document: 'JavaScript.pdf', pages: 60 });
queue.enqueue({ document: 'TypeScript.pdf', pages: 80 });
console.log('front:', queue.front());
console.log('size:', queue.size);

while (!queue.isEmpty()) {
  console.log('dequeue:', queue.dequeue());
}
