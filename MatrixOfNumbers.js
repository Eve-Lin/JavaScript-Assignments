const N=7;
let result="";
for(var i=1; i<=N; i++){
	for(let j=i; j<=N+i-1; j++){
	result+=j + " ";
	}
	result+='\n';
}
console.log(result);