 function rectangular(myRectangular){
  var area=myRectangular[0]*myRectangular[1];
  var perimeter=2*myRectangular[0]+2*myRectangular[1];

  console.log("The area is "+area.toFixed(2));
  console.log("The perimeter is: "+perimeter.toFixed(2));

};
rectangular(myRectangular=[2.5454,3.5343]);