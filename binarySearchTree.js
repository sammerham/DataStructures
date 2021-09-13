class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // creates a new node and insert in the right position in the BST
  insert(val) {
    const newNode = new Node(val);
    // if BST is empty
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let curr = this.root;
    // traverse to find the right location for the new node;
    while (true) {
      // if the new val is eqal to curr val, return undefined;
      if (val === curr.val) return undefined;
      // if smaller traverse left
      if (val < curr.val) {
        // if no left
        if (!curr.left) {
          curr.left = newNode;
          return this;
        }
        // traverse
        curr = curr.left;
      } else {
        // if bigger move right
        // if no right
        if (!curr.right) {
          curr.right = newNode;
          return this;
        }
        // traverse
        curr = curr.right;
      }
    }
  }
  find(val) {
    // if BSt is empty
    if (!this.root) return undefined;
    let curr = this.root;
    let found = false;
    // loop until tree is empty or you find node
    while (curr && !found) {
      // if greater
      if (val > curr.val) {
        // traverse right
        curr = curr.right;
        // if smaller
      } else if (val < curr.val) {
        // traverse left
        curr = curr.right;
      } else {
        // else node is found change found boolean to true;
        found = true;
      }
    }
    // if finished traversing the entire tree and node is n't found, return undefined;
    if (!found) return undefined;
    // return found node
    return curr;
  }

  contains(val) {
    // if BSt is empty
    if (!this.root) return undefined;
    let curr = this.root;
    let found = false;
    // loop until tree is empty or you find node
    while (curr && !found) {
      // if greater
      if (val > curr.val) {
        // traverse right
        curr = curr.right;
        // if smaller
      } else if (val < curr.val) {
        // traverse left
        curr = curr.right;
      } else {
        // node is found return true;
        return true;
      }
    }
    // if finished traversing the entire tree and node is n't found, return false;
    return false;
    // return found node
   
  }
};
//      10
//   5     13
// 2  7  11  16

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
// console.log(tree);
// console.log(tree.find(16));
console.log(tree.contains(100));
