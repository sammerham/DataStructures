class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


// FIFO
// first in first out
// o(1)
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // add to the end of the queue
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode
    }
    this.size++;
    return this.size;
  }
  // remove from the front of the queue
// o(1)

  dequeue() {
    if (!this.first) return null;
    // if (this.first === this.last) {
    //   this.last = null;
    // }
    if (this.size === 1) {
      this.last = null;
    }
    let temp = this.first;
    this.first = temp.next;
    temp.next = null;
    this.size--;
    return temp;
  }
}

const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.enqueue('d');
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());