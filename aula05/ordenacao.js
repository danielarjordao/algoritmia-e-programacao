function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[i]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
}

// Exemplo de uso:
let arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log(arr);
