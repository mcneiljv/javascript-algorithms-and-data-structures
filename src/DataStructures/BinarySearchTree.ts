class DataNode {
  value: number;
  left: DataNode | null;
  right: DataNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: DataNode | null;

  constructor() {
    this.root = null;
  }

  isEmpty() {
    return !this.root;
  }

  insertNode(root: DataNode, newNode: DataNode) {
    if (newNode.value < root.value) {
      // insert new node after root on left (if left node doesn't exist)
      if (!root.left) {
        root.left = newNode;
      } else {
        // look at the left node rescursively
        this.insertNode(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  insert(value: number) {
    const node = new DataNode(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root!!, node);
    }
  }

  search(root: DataNode | null, value: number): boolean {
    if (!root) {
      return false;
    } else {
      if (value === root?.value) {
        return true;
      } else if (value < root?.value) {
        return this.search(root?.left!!, value);
      } else {
        return this.search(root?.right!!, value);
      }
    }
  }

  preOrder(root: DataNode | null) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root: DataNode | null) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root: DataNode | null) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  // O(n)
  levelOrder() {
    // TODO: Use the QueueOptimized func
    const queue: DataNode[] = [];
    if (this.root) {
      queue.push(this.root);
      // queue = [10]
      while (queue.length) {
        let curr = queue.shift();
        console.log(curr?.value);
        if (curr?.left) {
          queue.push(curr.left);
        }
        if (curr?.right) {
          queue.push(curr.right);
        }
      }
    }
  }

  min(root: DataNode | null) {
    if (this.isEmpty()) {
      return null;
    }
    let curr = root;
    while (curr?.left) {
      curr = curr.left;
    }
    return curr?.value;
  }

  max() {
    if (this.isEmpty()) {
      return null;
    }
    let curr = this.root;
    while (curr?.right) {
      curr = curr.right;
    }
    return curr?.value;
  }

  deleteNode(root: DataNode | null, value: number) {
    if (!root) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // The node to be deleted is a leaf node
      if (!root.left && !root.right) {
        return null;
      }
      // The node to be deleted has one child node
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      // The node has two child nodes
      // @ts-ignore
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, value);
    }
    return root;
  }

  delete(value: number) {
    this.root = this.deleteNode(this.root, value);
  }
}

const tree = new BinarySearchTree();

console.log('Is tree empty? ', tree.isEmpty());
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
console.log('search', tree.search(tree.root, 25));
// tree.preOrder(tree.root);
// tree.inOrder(tree.root);
// tree.postOrder(tree.root);
tree.delete(15);
tree.levelOrder();
console.log('min val: ', tree.min(tree.root));
console.log('max val: ', tree.max());
