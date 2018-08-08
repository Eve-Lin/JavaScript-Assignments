let N=24;
let maxDivider;
let primes="";
for(let i=1;i<=N;i++){
	maxDivider=Math.sqrt(i);
let prime=true;
for(let divider=2;divider<=maxDivider;divider++){
	if(i%divider==0){
		prime=false;
	}

	}
	if(prime){
		primes+=i+" ";
		
	}}console.log(primes);
	