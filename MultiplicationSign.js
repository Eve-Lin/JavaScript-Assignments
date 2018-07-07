
function myCalculation(a,b,c){

	if (a>0 && b>0 && c>0 || a<0 && b<0 && c>0 ||a>0 && b<0 && c<0 || a<0 && b>0 && c<0){
		console.log("+");
	}
	else if(a==0 || b==0 || c==0){
		console.log(0);
	}
else {
	console.log ("-");
}
	
};


myCalculation(-3,5,7);
myCalculation(-3,-5,7);
myCalculation(-3,-5,-7);
myCalculation(3,5,7);
myCalculation(0,5,7);
myCalculation(3,0,7);
myCalculation(3,5,0);