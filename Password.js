let N=123456;
let K=4;
let reversedArray;
let ReversedString;
let reversedNumber;
 let division;
 let remainder;
 let number;
 let password;
if( N>99999 && N<1000000 && K>0 && K<1000){
reversedArray=N.toString().split("").reverse();
reversedNumber=parseInt(reversedArray.join(""));
remainder=reversedNumber%K;
number=reversedNumber-remainder;
division=number/K;
password=division+remainder;
}
console.log(password);




