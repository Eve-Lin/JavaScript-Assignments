let text="12 ab 23 bc 2436 345 brg 3345.";
let array=text.split(" ");
let arrayNumber=[];
let numbers="";
let finalNumbers;
let maxNumber;
for(let i=0;i<array.length;i++){
	arrayNumber[i]=parseInt(array[i]);
	if(arrayNumber[i] && arrayNumber[i]%2!==1){
		numbers+=arrayNumber[i]+" ";
	}
	}
	finalNumbers=numbers.split(" ").map(Number);
	maxNumber=Math.max(...finalNumbers);
	console.log(maxNumber);
	



