export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  static Node = class {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
    }
  };

  insert(key) {
    const newNode = new BinarySearchTree.Node(key);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    const insertNode = (node) => {
      if (key < node.key) {
        if (node.left === null) node.left = newNode;
        else insertNode(node.left);
      } else {
        if (node.right === null) node.right = newNode;
        else insertNode(node.right);
      }
    };
    insertNode(this.root);
  }

  inOrderTraverse(callback) {
    const walk = (node) => {
      if (!node) return;
      walk(node.left);
      callback(node.key);
      walk(node.right);
    };
    walk(this.root);
  }

  preOrderTraverse(callback) {
    const walk = (node) => {
      if (!node) return;
      callback(node.key);
      walk(node.left);
      walk(node.right);
    };
    walk(this.root);
  }

  postOrderTraverse(callback) {
    const walk = (node) => {
      if (!node) return;
      walk(node.left);
      walk(node.right);
      callback(node.key);
    };
    walk(this.root);
  }

  min() {
    let node = this.root;
    while (node?.left) node = node.left;
    return node?.key ?? null;
  }

  max() {
    let node = this.root;
    while (node?.right) node = node.right;
    return node?.key ?? null;
  }

  search(key) {
    const searchNode = (node) => {
      if (node === null) return false;
      if (key < node.key) return searchNode(node.left);
      if (key > node.key) return searchNode(node.right);
      return true;
    };
    return searchNode(this.root);
  }

  remove(key) {
    const findMinNode = (node) => {
      while (node?.left) node = node.left;
      return node;
    };

    const removeNode = (node, target) => {
      if (node === null) return null;
      if (target < node.key) {
        node.left = removeNode(node.left, target);
        return node;
      }
      if (target > node.key) {
        node.right = removeNode(node.right, target);
        return node;
      }

      if (node.left === null && node.right === null) return null;
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      const aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    };

    this.root = removeNode(this.root, key);
  }
}
