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

  preorder(root: DataNode | null) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  inorder(root: DataNode | null) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }

  postorder(root: DataNode | null) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.value);
    }
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
// tree.preorder(tree.root);
// tree.inorder(tree.root);
tree.postorder(tree.root);
