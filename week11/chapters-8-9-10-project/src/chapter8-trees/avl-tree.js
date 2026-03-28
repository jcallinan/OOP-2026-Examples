import BinarySearchTree from './binary-search-tree.js';

export default class AVLTree extends BinarySearchTree {
  insert(key) {
    const heightNode = (node) => {
      if (node === null) return -1;
      return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
    };

    const rotationLL = (node) => {
      const tmp = node.left;
      node.left = tmp.right;
      tmp.right = node;
      return tmp;
    };

    const rotationRR = (node) => {
      const tmp = node.right;
      node.right = tmp.left;
      tmp.left = node;
      return tmp;
    };

    const rotationLR = (node) => {
      node.left = rotationRR(node.left);
      return rotationLL(node);
    };

    const rotationRL = (node) => {
      node.right = rotationLL(node.right);
      return rotationRR(node);
    };

    const insertNode = (node, element) => {
      if (node === null) return new BinarySearchTree.Node(element);
      if (element < node.key) {
        node.left = insertNode(node.left, element);
        if (heightNode(node.left) - heightNode(node.right) > 1) {
          node = element < node.left.key ? rotationLL(node) : rotationLR(node);
        }
      } else if (element > node.key) {
        node.right = insertNode(node.right, element);
        if (heightNode(node.right) - heightNode(node.left) > 1) {
          node = element > node.right.key ? rotationRR(node) : rotationRL(node);
        }
      }
      return node;
    };

    this.root = insertNode(this.root, key);
  }
}
