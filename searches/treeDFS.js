class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(val) {
    const n = new Node(val);
    if (this.root === null) {
      this.root = n;
    } else {
      let currentNode = this.root;
      while (true) {
        if (val < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = n;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = n;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(val) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.value) {
        currentNode = currentNode.left;
      } else if (val > currentNode.value) {
        currentNode = currentNode.right;
      } else if (val === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }

  remove(val) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (val < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (val > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (val === currentNode.value) {
        // case 1: No right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = current.left;
            }
          }
        }
        // case 2: Right child which does not have a left child 
        else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = current.right;
            }
          }
        }
        // case 3: Right child that has a left child
        else {
          // find the right child's left most child
          let leftMost = currentNode.right.left;
          let leftMostParent = currentNode.right;
          while (leftMost.left !== null) {
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }

          leftMostParent.left = leftMost.right;
          leftMost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftMost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftMost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftMost;
            }
          }
        }
        return true;
      }
    }
  }

  DFSInorder() {
    return traverseInorder(this.root, []);
  }
  DFSPreorder() {
    return traversePreorder(this.root, []);
  }
  DFSPostorder() {
    return traversePostorder(this.root, []);
  }

}

function traverseInorder(node, list) {
  if (node.left) {
    traverseInorder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInorder(node.right, list);
  }
  return list;
}

function traversePreorder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreorder(node.left, list);
  }
  if (node.right) {
    traversePreorder(node.right, list);
  }
  return list;
}

function traversePostorder(node, list) {
  if (node.left) {
    traversePostorder(node.left, list);
  }
  if (node.right) {
    traversePostorder(node.right, list);
  }
  list.push(node.value);
  return list;
}

//          9
//       /     \
//      4       20  
//    /  \     /  \
//   1    6   15   170

// traversal return ways
// InOrder - [1, 4, 6, 9, 15, 20, 170]
// PreOrder - [9, 4, 1, 6, 20, 15, 170]
// PostOrder - [1, 6, 4, 15, 170, 20, 9]

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log('inOrder', tree.DFSInorder());
console.log('preOrder', tree.DFSPreorder());
console.log('postOrder', tree.DFSPostorder());