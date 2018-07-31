let A=5;
let B=15;
let divider;
let dividersArray=[];
let maxString;
let maxDivider;

for(divider=1;divider<=A && divider<=B; divider++){
	if(A%divider==0 && B%divider==0){
     dividersArray+=divider+",";
	}
}
maxString=dividersArray.split(",").map(Number);
MaxDivider=maxString.sort(function(a, b){return b-a});
console.log(MaxDivider[0]);