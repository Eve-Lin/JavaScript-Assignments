let N=13;
let primeNumber="";

for(let i=1;i<=N;i++){
  let maxDivider=Math.sqrt(i);
  let prime=true;
 for(let divider = 2;divider<=maxDivider;divider++){
    if(i % divider== 0){
 prime=false;
}
}
if(prime){
	primeNumber=i;
	
}
 else {
 	continue;
 }
}
console.log(primeNumber);