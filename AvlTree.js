class AVLNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AvlTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    return node ? node.height : 0;
  }
  getBalance(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  rotateRight(y) {
    const x = y.left;
    const t2 = x.right;
    x.right = y;
    y.left = t2;
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
    return x;
  }
  //   rotateLeft(x) {
  //     const y = x.right;
  //     const t2 = y.left;
  //      x.left = t2;
  //     y.right = x;

  //     x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
  //     y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
  //     return y;
  //   }
  rotateLeft(x) {
    const y = x.left;

    const t2 = y.right;

    y.right = x;

    x.left = t2;

    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));

    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

    return y;
  }

  insert(node, value) {
    if (!node) return new AVLNode(value);

    if (value < node.value) {
      node.left = this.insert(node.left, value);
    } else if (value > node.value) {
      node.right = this.insert(node.right, value);
    } else {
      return node;
    }

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    const balance = this.getBalance(node);

    if (balance > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }

    if (balance > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);

      return this.rotateRight(node);
    }

    if (balance < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);

      return this.rotateLeft(node);
    }

    return node;
  }
  insertValue(value) {
    this.root = this.insert(this.root, value);
  }

  inOrder(node) {
    if (node) {
      this.inOrder(node.left);

      console.log(node.value);

      this.inOrder(node.right);
    }
  }
}
const avl = new AvlTree();

[30, 20, 40, 10, 50, 5].forEach((val) => avl.insertValue(val));

console.log("In-order traversal of Balanced AVL Tree:");

avl.inOrder(avl.root);
