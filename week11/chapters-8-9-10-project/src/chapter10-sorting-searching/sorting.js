export const bubbleSort = (array) => {
  const a = [...array];
  for (let i = 0; i < a.length; i += 1) {
    for (let j = 0; j < a.length - 1 - i; j += 1) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
};

export const modifiedBubbleSort = (array) => {
  const a = [...array];
  for (let i = 0; i < a.length; i += 1) {
    let swapped = false;
    for (let j = 0; j < a.length - 1 - i; j += 1) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return a;
};

export const selectionSort = (array) => {
  const a = [...array];
  for (let i = 0; i < a.length - 1; i += 1) {
    let indexMin = i;
    for (let j = i + 1; j < a.length; j += 1) {
      if (a[j] < a[indexMin]) indexMin = j;
    }
    if (i !== indexMin) [a[i], a[indexMin]] = [a[indexMin], a[i]];
  }
  return a;
};

export const insertionSort = (array) => {
  const a = [...array];
  for (let i = 1; i < a.length; i += 1) {
    let j = i;
    const temp = a[i];
    while (j > 0 && a[j - 1] > temp) {
      a[j] = a[j - 1];
      j -= 1;
    }
    a[j] = temp;
  }
  return a;
};

const merge = (left, right) => {
  const result = [];
  let il = 0;
  let ir = 0;
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) result.push(left[il++]);
    else result.push(right[ir++]);
  }
  return result.concat(left.slice(il)).concat(right.slice(ir));
};

export const mergeSort = (array) => {
  if (array.length <= 1) return [...array];
  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));
  return merge(left, right);
};

const partition = (a, left, right) => {
  const pivot = a[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (a[i] < pivot) i += 1;
    while (a[j] > pivot) j -= 1;
    if (i <= j) {
      [a[i], a[j]] = [a[j], a[i]];
      i += 1;
      j -= 1;
    }
  }
  return i;
};

const quick = (a, left, right) => {
  if (a.length > 1) {
    const index = partition(a, left, right);
    if (left < index - 1) quick(a, left, index - 1);
    if (index < right) quick(a, index, right);
  }
  return a;
};

export const quickSort = (array) => quick([...array], 0, array.length - 1);
