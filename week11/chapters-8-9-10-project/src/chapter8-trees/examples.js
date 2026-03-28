import BinarySearchTree from './binary-search-tree.js';
import AVLTree from './avl-tree.js';

const values = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6];
const bst = new BinarySearchTree();
values.forEach((value) => bst.insert(value));

const inOrder = [];
const preOrder = [];
const postOrder = [];
bst.inOrderTraverse((value) => inOrder.push(value));
bst.preOrderTraverse((value) => preOrder.push(value));
bst.postOrderTraverse((value) => postOrder.push(value));

console.log('BST in-order:', inOrder.join(' '));
console.log('BST pre-order:', preOrder.join(' '));
console.log('BST post-order:', postOrder.join(' '));
console.log('BST min/max:', bst.min(), bst.max());
console.log('BST search 8?', bst.search(8));
console.log('BST search 1?', bst.search(1));

bst.remove(6);
bst.remove(5);
const afterRemovals = [];
bst.inOrderTraverse((value) => afterRemovals.push(value));
console.log('BST after removals:', afterRemovals.join(' '));

const avl = new AVLTree();
[50, 30, 70, 10, 40, 60, 80, 5, 35, 75].forEach((value) => avl.insert(value));
const avlInOrder = [];
avl.inOrderTraverse((value) => avlInOrder.push(value));
console.log('AVL in-order:', avlInOrder.join(' '));
