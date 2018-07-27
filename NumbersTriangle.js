let N=7;
let row="";
let secondRow="";
let j;
let smallerRow;
let finalRow;

for(let i=1;i<=N;i++){   //2*N-1
  		row+=i;
	console.log(row);
}
	for(let j=0;j<N;j++){
	secondRow=row.toString().split("");
	smallerRow=secondRow.pop();
    finalRow=secondRow.join("");
    row=finalRow;
    console.log(finalRow);
}



 

