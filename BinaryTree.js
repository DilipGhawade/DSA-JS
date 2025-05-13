class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insertLevelOrder(values) {
    if (!values.length) return;
    this.root = new TreeNode(values[0]);
    let queue = [this.root];
    let i = 1;

    while (i < values.length) {
      let current = queue.shift();
      if (values[i] != null) {
        current.left = new TreeNode(values[i]);
        queue.push(current.left);
      }
      i++;
      if (i < values.length && values[i] != null) {
        current.right = new TreeNode(values[i]);
        queue.push(current.right);
      }
      i++;
    }
  }

  inOrder(node) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (node) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.insertLevelOrder([1, 2, 3, 4, 5, 6, 7]);

console.log("In-Order Traveral");
binaryTree.inOrder(binaryTree.root);

console.log("Pre-Order Traveral");
binaryTree.preOrder(binaryTree.root);

console.log("Post-Order Traveral");
binaryTree.postOrder(binaryTree.root);
