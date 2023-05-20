class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      console.log(node)
      return node;
    }
  }

  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  // Function to print the binary tree
  printTree() {
    this.inOrderTraversal(this.root);
  }
}

const binaryTree = new BinaryTree();

binaryTree.insert(10);
binaryTree.insert(20);
binaryTree.insert(30);
binaryTree.insert(25);
binaryTree.insert(50);
binaryTree.insert(5);
binaryTree.insert(2);
binaryTree.insert(13);
binaryTree.insert(52);

binaryTree.printTree();

binaryTree.search(30);