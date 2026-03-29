import {
  bubbleSort,
  modifiedBubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort
} from './sorting.js';
import { sequentialSearch, binarySearch } from './searching.js';

const array = [5, 4, 3, 2, 1, 7, 9, 6, 8];

console.log('Original:', array.join(' '));
console.log('Bubble sort:', bubbleSort(array).join(' '));
console.log('Modified bubble sort:', modifiedBubbleSort(array).join(' '));
console.log('Selection sort:', selectionSort(array).join(' '));
console.log('Insertion sort:', insertionSort(array).join(' '));
console.log('Merge sort:', mergeSort(array).join(' '));
console.log('Quick sort:', quickSort(array).join(' '));

console.log('Sequential search 7:', sequentialSearch(array, 7));
console.log('Binary search 7:', binarySearch(array, 7));
