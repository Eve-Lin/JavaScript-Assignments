function scores(number){

  if(number>0 && number<10){
    if(number<4){
      console.log(number*10);
    }
    else if(number>3 && number<7){
      console.log(number*100);
    }
    else{
      console.log(number*1000);
    }
  } else{
    console.log("Invalid score");
  }
}

scores(5);