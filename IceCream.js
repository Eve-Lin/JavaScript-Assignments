let N=4;
let K=120;
let difference;
let finalResult;
let zero=0;
let array=K.toString().split("");
for (let i=0;i<N;i++){
		if(array[i]=="0"){
			zero+=1;
}
		}
if(array.length-N<0){
	difference=array.length-N;
	difference=-1*difference;
		finalResult=difference+zero;
		console.log(finalResult);
	}

else if (array.length-N>=0 && zero>0){

	console.log(zero);
}else{
	console.log("0");
}
