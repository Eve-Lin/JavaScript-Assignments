let array=[-26,-28,31,2,27];
let largerNumber;
for(let i=1; i<array.length-1;i++){
	if(array[i]>array[i-1] && array[i]>array[i+1]){
		largerNumber=i;
		break;
	} 
}
if(largerNumber){
console.log(largerNumber);
}else{
		console.log("-1");
	}
