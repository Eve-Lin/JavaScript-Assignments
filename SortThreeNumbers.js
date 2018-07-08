const a= -5;
const b= 3;
const c= -5;

	if(a> -1001 && b> -1001 && c> -1001 && a <1001 && b<1001 && c<1001){
		if (a>=b && a>=c && b>=c){
		console.log(a+" "+b+" "+c);
	} else if(a>=b && a>=c && c>=b){
		console.log(a+" "+c+" "+b);
	} else if(b>=a && b>=c && a>=c){
		 console.log(b+" "+a+" "+c);
} else if(b>=a && b>=c && c>=a){
		console.log(b+" "+c+" "+a);
	}else if(c>=b && c>=a && b>=a){
		console.log(c+" "+b+" "+a);
	} else if(c>=b && c>=a && a>=b) {
		console.log(c+" "+a+" "+b);
	}
};

