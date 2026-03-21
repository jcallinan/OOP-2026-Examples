function reverseList(head) {
  // This mirrors the textbook's interview pattern:
  // walk the list once while rewiring each next pointer.
  let current = head;
  let newHead = null;
  let nextNode = null;
  while (current) {
    nextNode = current.next;
    current.next = newHead;
    newHead = current;
    current = nextNode;
  }
  return newHead;
}

module.exports = reverseList;
