const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 287, 4, 0];

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }
    let temp = array[i];
    array[i] = array[smallest];
    array[smallest] = temp;
  }
}

selectionSort(numbers);
console.log(numbers);