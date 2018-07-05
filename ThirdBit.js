var myArray=["11"];
var newArray=parseInt(myArray[0]);
function myBit(newArray){
  var binaryNum=newArray.toString(2);
  var binaryIndex=binaryNum.charAt(binaryNum.length-3);
  console.log(binaryIndex);
};

myBit(newArray);