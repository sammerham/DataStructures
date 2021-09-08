class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
   //FILO
  // first in last out
  //  f  a-b-c-d
  // o(1) constant time
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    let temp = this.first;
    this.first = newNode;
    this.first.next = temp;
    this.size++;
    return this.size;
  }
//  a-b-c-d
  // o(1) constant time
  pop() {
    if (!this.first) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    let temp = this.first;
    this.first = temp.next;
    temp.next = null;
    this.size--;
    return temp;
  }
}

const stack = new Stack();
stack.push('a');
stack.push('b');
stack.push('c');
stack.push('d');
stack.push('e');
console.log(stack);
console.log(stack.pop());