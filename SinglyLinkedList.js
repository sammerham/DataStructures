class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // a-b-c-d   l

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldTail = this.tail;
      oldTail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // a-b-c-d-   e
  pop() {
    if (!this.head) return false;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    let poppedNode = this.tail;
    let curr = this.head;
    let prev = null;
    while (curr.next !== null) {
      prev = curr;
      curr = curr.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    // return poppedNode;
    return this;
  }
  // n abcd
  unshift(val) {
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    const newNode = new Node(val);
    let oldHead = this.head;
    newNode.next = oldHead;
    this.head = newNode;
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return false;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    let shifttedNode = this.head;
    this.head = shifttedNode.next;
    shifttedNode.next = null;
    this.length--;
    return this;
  }
  print() {
    if (!this.head) return false;
    let str = '';
    let curr = this.head;
    while (curr) {
      str += curr.val + ' --->> ';
      curr = curr.next;
    }
    console.log(str);
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    let count = 0;
    let curr = this.head;
    while (count !== idx) {
      count++;
      curr = curr.next;
    }
    return curr;
  }
  reverse() {
    if (!this.head) return false;
    // reverse head and tail
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;

    let prev = null;
    let next;
    while (curr) {
      // reverse rest of nodes
      next = curr.next;
      curr.next = prev;

      // traverse
      prev = curr;
      curr = next;
    }
    return this;
  }
  // ab c d
  delete(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    let count = 0;
    let curr = this.head;
    let prev = null;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    while (count !== idx) {
      count++;
      prev = curr;
      curr = curr.next;
    }
    prev.next = curr.next;
    curr.next = null;
    this.length--;
    return this;
  }
  // abcde
  insert(idx, val) {
    const newNode = new Node(val);
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    let count = 0;
    let curr = this.head;
    let prev = null;
    while (count !== idx) {
      count++;
      prev = curr;
      curr = curr.next;
    }
    prev.next = newNode;
    newNode.next = curr;
    this.length++;
    return this;
  }
  update(idx, val) {
    if (idx < 0 || idx >= this.length) return undefined;
    let count = 0;
    let curr = this.head;
    while (count !== idx) {
      count++;
      curr = curr.next;
    }
    curr.val = val;
    return this;
  }
}

const list = new SLL();
list.push('a');
list.push('b');
list.push('c');
list.push('d');
// console.log(list.pop());
// console.log(list.unshift('g'));
// console.log(list.shift());
// console.log(list.get(1));
// console.log(list.reverse());
// console.log(list.delete(3));
console.log(list.insert(4, 'o'));
list.print();