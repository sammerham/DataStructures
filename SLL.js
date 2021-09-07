class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    // if ll is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldTail = this.tail;
      oldTail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // a-b-c-s-  d
  pop() {
    // if LL is empty return undefined;
    if (!this.head) return undefined;
    // if there is only one node in LL
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let curr = this.head;
      let prev = null;
      while (curr.next !== null) {
        prev = curr;
        curr = curr.next;
      }
      this.tail = prev;
      this.tail.next = null;
      this.length--;
    }
    return this;
  }
  unshift(val) {
    const newNode = new Node(val);
    let oldHead = this.head;
    this.head = newNode;
    newNode.next = oldHead;
    this.length++;
    return this;
  }
  // a-   b-c-d
  shift() {
    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    this.length--;
    return this;
  }

    // a-b-c-d
  insert(idx, val) {
    let newNode = new Node(val);
    // if idx is out of bound
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) {
      return this.unshift(val);
    } else if (idx === this.length - 1) {
      return this.push(val);
    } else {
      let count = 0;
      let curr = this.head;
      let prev = null
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

    // a-b-c-d
  delete(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      let count = 0;
      let prev = null;
      let curr = this.head;
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
  }
  //a-b-c-d
  reverse() {
    if (!this.head) return false;
    let curr = this.head;

    // reverse head and tail
    this.head = this.tail;
    this.tail = curr;

    let prev = null;
    let next = null;
    
    while (curr) {
      // reverse
      next = curr.next;
      curr.next = prev;
      // traverse
      prev = curr;
      curr = next;
    }
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length - 1) return undefined;
    let count = 0;
    let curr = this.head;

    while (count !== idx) {
      count++;
      curr = curr.next;
    }
    return curr;
  }

  assign(idx, val) {
    if (idx < 0 || idx >= this.length - 1) return undefined;
    let target = this.get(idx);
    target.val = val;
    return this;
  }
  flip() {
    if (!this.head) return undefined;
    // reverse head and tail
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;

    let prev = null;
    let next = null;
    while (curr) {
      // reverse node
      next = curr.next;
      curr.next = prev;

      // traverse
      prev = curr;
      curr = next;
    }
    return this;
  }

}


const list = new SinglyLinkedList();
list.push('a');
list.push('b');
list.push('c');
list.push('d');
// console.log(list.pop());
// console.log(list.unshift('h'));
// console.log(list.shift());
// console.log(list.insert(2, 'j'));
// console.log(list.delete(3));
// console.log(list.reverse());
// console.log(list.assign(0, 'k'));
console.log(list.flip());
list.print();