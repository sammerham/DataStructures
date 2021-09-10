'use strict'

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
//  abcde   i 
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    let oldTail = this.tail;
    oldTail.next = newNode;
    newNode.prev = oldTail;
    this.tail = newNode;
    this.length++;
    return this;
  }
  //abcd  e
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    let poppedNode = this.tail;
    this.tail = poppedNode.prev;
    poppedNode.prev = null;
    this.tail.next = null;
    this.length--;
    return this;
  }
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
  // a bcd
  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    this.head.prev = null;
    this.length--;
    return this;
  }
  print() {
    let str = '';
    let curr = this.head;
    while (curr) {
      str += curr.val + ' ---> ';
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
      next = curr.next;
      curr.prev = next;
      curr.next = prev;

      // traverse
      prev = curr;
      curr = next;
    }
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
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
  // ab c d
  delete(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let deleltedNode = this.get(idx);
    let before = deleltedNode.prev;
    let after = deleltedNode.next;
    before.next = after;
    deleltedNode.prev = null;
    deleltedNode.next = null;
    this.length--;
    return this;
  }
  // 3
  // abc .f. d e
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    let newNode = new Node(val);
    let targetNode = this.get(idx);
    let before = targetNode.prev;
    // let after = targetNode.next;
    before.next = newNode;
    newNode.next = targetNode;
    this.length++
    return this;
  }
  update(idx, val) {
    if (idx < 0 || idx > this.length) return undefined;
    let targetNode = this.get(idx);
    targetNode.val = val;
    return this;
  }
}

const list = new DLL();
list.push('a');
list.push('b');
list.push('c');
list.push('d');
// console.log(list.pop());
// console.log(list.unshift('k'));
// console.log(list.shift());
// console.log(list.reverse());
console.log(list.insert(2, 'L'))
list.print();