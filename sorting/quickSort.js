const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 287, 4, 0];

const quickSort = (array, left, right) => {
  if (array.length === 1) return array;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

const partition = (array, pivot, left, right) => {
  let pivotValue = array[pivot];
  let partitionIndex = left;
  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);