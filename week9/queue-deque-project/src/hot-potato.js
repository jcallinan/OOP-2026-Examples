const CircularQueue = require('./circular-queue');

function hotPotato(players, numPasses) {
  const queue = new CircularQueue(players.length);

  for (const player of players) {
    queue.enqueue(player);
  }

  while (queue.size > 1) {
    for (let i = 0; i < numPasses; i++) {
      queue.enqueue(queue.dequeue());
    }
    console.log(`${queue.dequeue()} is eliminated!`);
  }

  return queue.dequeue();
}

module.exports = hotPotato;
