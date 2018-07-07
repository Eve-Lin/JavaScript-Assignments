function myFunction(a,b){
if(a>-101 && b>-101 && a<101 && b <101){
  if(a>b){
  var a2=a;
  var b2=b;
  b=a2;
  a=b2;
  console.log(a,b);
}else{
  console.log(a,b);
}
}
else{
  console.log("a or b is not a number")}
};


myFunction(7,3);
myFunction("seven", "three");
myFunction("three", 7);
myFunction(3, "seven");
myFunction(3.5,7.5);
myFunction(-2, -3);