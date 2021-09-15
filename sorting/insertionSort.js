const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 287, 4, 0];

const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j-1]) {
        let temp = array[j-1];
        array[j-1] = array[j];
        array[j] = temp;
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);