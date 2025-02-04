function isSymmetrical(num) {
	let arr = num.toString().split("");
	let i = 0;
	let j = arr.length-1;
	S
	while(i <= j){
		if(arr[i] !== arr[j]){
			return false;
		}
		i++;
		j--;
	}
	return true;
}
