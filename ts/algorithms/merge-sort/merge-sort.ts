const merge = (arr: number[], left: number, mid: number, right: number) => {
  const n1: number = mid - left + 1;
  const n2: number = right - mid;

  const L: number[] = new Array(n1).fill(0);
  const R: number[] = new Array(n2).fill(0);
  for (let i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }
  for (let i = 0; i < n2; i++) {
    R[i] = arr[mid + 1 + i];
  }

  //console.log(`R Arr: ${R}\nL Arr: ${L}\n-------\n`);

  let i = 0;
  let j = 0;
  let k = left;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Colpy the remaining elements of L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // copy the remaining elements of R[],  if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
};

const mergeSort = (arr: number[], left: number, right: number) => {
  if (left >= right) return;

  const mid: number = Math.floor((left + right) / 2);

  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
};

const arr: number[] = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 100));
//const arr: number[] = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log(arr);

mergeSort(arr, 0, arr.length - 1);
console.log(arr);

