const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const sum =(arr) => arr.reduce((a,b)=> a+b, 0);
const divide = (arr, n) => {
  // Write your code here
	let result =[];
	let subArray =[];
	arr.forEach((item) =>{
		subArray.push(item);
		if(sum(subArray)>n){
			result.push(subArray.slice(0,-1));
			subArray=[item];
		}
	})
	if(subArray.length>0){
		result.push(subArray);
	}
	return result;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
