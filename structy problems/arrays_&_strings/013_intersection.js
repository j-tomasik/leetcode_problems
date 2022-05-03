const intersection = (arr1, arr2) => {
	let first = new Set(arr1);
	let both = [];

	for (let num of arr2) {
		if (first.has(num)) both.push(num);
		}

return both;
}