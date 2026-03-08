# Chapter 5: Queues and Deques
## Week 9 Teaching Slides (Instructor Content)

---

## Slide 1 — Title
**Chapter 5: Queues and Deques**  
CIST 0265 OOP • Week 9

**Today’s goals:**
- Understand queue and deque behavior
- Connect operations to real systems
- Implement and test core methods
- Apply structures to interview-style problems

---

## Slide 2 — Learning Outcomes
By the end of class, students should be able to:
- Explain FIFO and double-ended behavior
- Implement Queue, Deque, and CircularQueue in JavaScript
- Analyze time complexity tradeoffs
- Solve Hot Potato and palindrome problems using these structures
- Recognize queue/deque modeling in real products

---

## Slide 3 — Quick Recall: Stack vs Queue vs Deque
- **Stack**: LIFO (last in, first out)
- **Queue**: FIFO (first in, first out)
- **Deque**: Insert/remove at both ends

**Prompt to class:**
- "Where do you see each one in software you use daily?"

---

## Slide 4 — Queue Fundamentals (FIFO)
A queue supports:
- `enqueue(item)` → add to rear
- `dequeue()` → remove from front
- `front()` → inspect front item
- `isEmpty()`, `size`, `clear()`, `toString()`

**Mental model:** line at a store / print queue.

---

## Slide 5 — Queue JS Implementation (Array-backed)
```js
class Queue {
  #items = [];
  enqueue(item) { this.#items.push(item); }
  dequeue() { return this.#items.shift(); }
  front() { return this.#items[0]; }
  isEmpty() { return this.#items.length === 0; }
  get size() { return this.#items.length; }
  clear() { this.#items = []; }
}
```

**Teaching point:** simple and readable; `dequeue` cost is the key drawback.

---

## Slide 6 — Queue Complexity Review
- `enqueue` → **O(1)** average
- `front` → **O(1)**
- `isEmpty`/`size` → **O(1)**
- `dequeue` (`Array.shift`) → **O(n)** in array-backed queue

**Discussion:** Why does shifting hurt performance?

---

## Slide 7 — Deque Fundamentals
Deque (double-ended queue):
- `addFront`, `addRear`
- `removeFront`, `removeRear`
- `peekFront`, `peekRear`

**Use cases:**
- Undo/redo systems
- Task prioritization (urgent front, normal rear)
- Palindrome checking

---

## Slide 8 — Deque JS Implementation (Array-backed)
```js
class Deque {
  #items = [];
  addFront(item) { this.#items.unshift(item); }
  addRear(item) { this.#items.push(item); }
  removeFront() { return this.#items.shift(); }
  removeRear() { return this.#items.pop(); }
  peekFront() { return this.#items[0]; }
  peekRear() { return this.#items[this.#items.length - 1]; }
}
```

**Teaching point:** hybrid behavior combines queue + stack style operations.

---

## Slide 9 — Circular Queue Motivation
Problem with array queue:
- Front removals can trigger shifting

Circular queue idea:
- Fixed-capacity array
- Track `front`, `rear`, `size`
- Wrap indexes with modulo (`% capacity`)

**Result:** enqueue/dequeue are typically **O(1)**.

---

## Slide 10 — CircularQueue Core Logic
```js
this.#rear = (this.#rear + 1) % this.#capacity;
this.#items[this.#rear] = item;

const item = this.#items[this.#front];
this.#front = (this.#front + 1) % this.#capacity;
```

**Prompt:**
- "What happens when `rear` reaches the end of the array?"

---

## Slide 11 — Problem Demo: Hot Potato
Algorithm idea:
1. Enqueue all players
2. Rotate by dequeuing/enqueuing `numPasses` times
3. Dequeue one eliminated player
4. Repeat until one winner remains

**Concept tie-in:** cyclic movement maps naturally to circular queue.

---

## Slide 12 — Problem Demo: Palindrome with Deque
Algorithm:
1. Normalize string (`lowercase`, remove spaces)
2. Add chars to deque rear
3. Compare `removeFront()` and `removeRear()` repeatedly
4. If all pairs match → palindrome

**Why deque?** Two-end comparison is direct and elegant.

---

## Slide 13 — Interview Exercise: countStudents
LeetCode 1700: Number of Students Unable to Eat Lunch

Teaching emphasis:
- Simulation with queue behavior (`shift` + `push`)
- Early stop optimization with `includes`
- Complexity conversation: practicality vs ideal asymptotics

---

## Slide 14 — Live Demo Plan (in class)
1. Run CLI examples:
   - `npm start --prefix week9/queue-deque-project`
2. Open queue visualizer:
   - `week9/queue-visualizer.html`
3. Open deque visualizer:
   - `week9/deque-visualizer.html`

**Interactive checks:**
- Ask students to predict next front/rear before each click.

---

## Slide 15 — Visualizer Teaching Script (Queue)
Try this sequence:
1. Seed printer queue
2. Ask: "Which document prints first?"
3. Dequeue repeatedly and verify FIFO
4. Add custom jobs and inspect front/rear

**Expected insight:** insertion order controls service order.

---

## Slide 16 — Visualizer Teaching Script (Deque)
Try this sequence:
1. Seed support desk deque
2. Add urgent issue to front
3. Add routine ticket to rear
4. Remove front and rear; inspect changing priorities

**Expected insight:** deques model mixed-priority workflows cleanly.

---

## Slide 17 — Common Mistakes
- Confusing front/rear semantics
- Using stack operations when queue behavior is needed
- Ignoring edge cases (empty structure)
- Not checking capacity in circular queue
- Overlooking complexity impacts of `shift`/`unshift`

---

## Slide 18 — Mini In-Class Activity (10–12 min)
**Task A:** Add `peekRear()` to queue visualizer queue class (or justify why not needed).  
**Task B:** Modify palindrome logic to ignore punctuation.  
**Task C:** Explain when circular queue is better than linked list queue.

Deliverable: short pair explanation + quick demo.

---

## Slide 19 — Exit Ticket
1. One sentence: FIFO vs deque difference.
2. One real-world system better modeled by deque than queue.
3. Which operation was most expensive in array-backed queue and why?

---

## Slide 20 — References in this repo
- Chapter source docs:  
  - `week9/5 Queues and Deques.pdf`  
  - `week9/5 Queues and Deques.docx`
- Example project:  
  - `week9/queue-deque-project/`
- Interactive demos:  
  - `week9/queue-visualizer.html`  
  - `week9/deque-visualizer.html`

---

## Optional Speaker Notes (Instructor)
- Keep code walkthroughs short; spend more time on operation tracing.
- Always ask students to predict outputs before running demos.
- Use whiteboard pointer diagrams for circular queue wrap-around.
- Emphasize that DS choice is a modeling decision first, coding decision second.
