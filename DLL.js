class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
// a-b-c-d   p
  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldTail = this.tail;
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
// a-b-c-d-p
  pop() {
    let poppedNode = this.tail;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
// g    a-b-c-d-p
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    let oldHead = this.head;
    oldHead.prev = newNode;
    newNode.next = oldHead;
    this.head = newNode;
    this.length++;
    return this;
  }
  //a-   b-c-d-p
  shift() {
    let shifttedNode = this.head;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifttedNode.next;
      shifttedNode.next = null;
      this.head.prev = null;
    }
    this.length--;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length - 1) return undefined;
    let count, curr;
    if (idx <= this.length / 2) {
      count = 0;
      curr = this.head;

      while (count !== idx) {
        count++;
        curr = curr.next;
      } 
    } else {
      count = this.length - 1;
      curr = this.tail;

      while (count !== idx) {
        count--;
        curr = curr.prev;
      }
    }
    return curr;
  }

   //a-   b-c  N   d-p
  insert(idx, val) {
    if (idx < 0 || idx >= this.length - 1) return undefined;
    if (idx === 0) {
      return this.unshift(val);
    } else if (idx === this.length - 1) {
      return this.push(val);
    }

    let newNode = new Node(val);
    let targetNode = this.get(idx);
    let prev = targetNode.prev;
    let after = targetNode.next;


    prev.next = newNode;
    newNode.next = after;
    this.length++;
    return this;
  }
  //a-   b-c-D-p
  delete(idx) {
    if (idx < 0 || idx >= this.length - 1) return undefined;
    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    }

    let targetNode = this.get(idx);
    let prev = targetNode.prev;
    let after = targetNode.next;


    prev.next = after;
    targetNode.prev = null;
    targetNode.next = null;
    this.length--;
    return this;
  }
  print() {
    let str = '';
    let curr = this.head;
    while (curr) {
      str += curr.val + " ---->> ";
      curr = curr.next;
    }
    console.log(str);
  }
  reverse() {
    if (!this.head) return undefined;
    // reverse head and tail
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;

    let prev = null;
    let next;

    while (curr) {
      // reverse nodes
      next = curr.next;
      curr.prev = next;
      curr.next = prev;

      //traverse
      prev = curr;
      curr = next;
    }
    return this;
  }
}

const list = new DoublyLinkedList();
list.push('a');
list.push('b');
list.push('c');
list.push('d');
// console.log(list.unshift('k'));
// console.log(list.shift());
// console.log(list.insert(1, 'j'));
// console.log(list.delete(1));
console.log(list.reverse())
list.print()