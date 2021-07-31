function binarySearch(arr, val) {
  let left = 0
  let right = arr.length-1

  while(left<right) {
		let middle = Math.round((right+left)/2)
		if(arr[left]===val) return left
		if(arr[right]===val) return right
		if(arr[middle]===val) return middle
		if(arr[middle]>val){
			right = middle
		} else {
			left = middle
		}
  }
  return -1
}

let ans = binarySearch([1,3,4,5,6,7,8,9,11,12,13,14,15,16], 15) //returns 12
console.log(ans);