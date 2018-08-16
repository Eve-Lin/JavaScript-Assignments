let array=[4,1,1,4,2,3,4,4,1,2,4,9,3];
let sortedArray=array.sort(function(a,b){return b-a;});
let x;
let arrayLength=1;
let maxLength=1;
let maxElement;
for (let i=0;i<array.length;i++){
	if(sortedArray[i]==sortedArray[i+1]){
       arrayLength+=1;
       
	}else{
		arrayLength=1;
	}
	if(arrayLength>=maxLength){
		maxLength=arrayLength;
		x=sortedArray[i];
}else{maxLength;}
}console.log(x +" (" +maxLength+" times)");
	