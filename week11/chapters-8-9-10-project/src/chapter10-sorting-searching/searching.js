import { quickSort } from './sorting.js';

export const sequentialSearch = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) return i;
  }
  return -1;
};

export const binarySearch = (array, value) => {
  const sorted = quickSort(array);
  let low = 0;
  let high = sorted.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = sorted[mid];
    if (element < value) low = mid + 1;
    else if (element > value) high = mid - 1;
    else return { index: mid, sortedArray: sorted };
  }

  return { index: -1, sortedArray: sorted };
};
