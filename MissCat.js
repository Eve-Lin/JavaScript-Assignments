let N=4;
let array=[1,2,3,1,2];
let sortedArray=array.sort(function(a,b){return b-a;});
let x;
let finalWinner=10;
let arrayLength=1;
let maxLength=0;
for (let i=0;i<array.length;i++){
	if(sortedArray[i]==sortedArray[i+1]){
       arrayLength+=1;
       
	}else{
		arrayLength=1;
	}
	if(arrayLength>=maxLength){
		maxLength=arrayLength;
		x=sortedArray[i];
		if(x<finalWinner){
			finalWinner=x;
		}else{
			finalWinner;
		}
}
}

console.log(finalWinner);
