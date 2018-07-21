let N=27;
let row="";

for(let i=1;i<=N;i++){
  let maxDivider=Math.sqrt(i);
  let prime=true;
 for(let divider = 2;divider<=maxDivider;divider++){
    if(i % divider== 0){
 prime=false;
}
}
if(prime){
	row+="1";
	console.log(row);
}
 else {
 	row+="0";
 }
}

