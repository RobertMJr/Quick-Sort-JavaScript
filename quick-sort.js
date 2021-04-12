// Quick Sort Pseudocode

// Call the pivot helper function on the array
// When the helper returns the updated pivot index, recursively
// call the pivot helper on the subarray to the left of that index,
// and the subarray to the right of that index
// Base case ocurrs when you consider an array with less than 2 elements

function pivot(arr, start = 0, end = arr.length - 1) {
	// We are assuming the pivot is always the first element
	let pivot = arr[start];
	// Keep track of where we are going to swap at the end
	let swapIndex = start;
	// Loop through the array from start until the end
	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIndex++;
			// Swap the current element with the element at the pivot index
			[ arr[i], arr[swapIndex] ] = [ arr[swapIndex], arr[i] ];
		}
	}
	// Swap the pivot from the start to the swapIndex
	[ arr[start], arr[swapIndex] ] = [ arr[swapIndex], arr[start] ];
	return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		// left
		quickSort(arr, left, pivotIndex - 1);
		// right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

console.log(quickSort([ 4, 6, 9, 1, -3, 2, 5, 7 ]));
