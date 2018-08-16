let ocenki=[3,2,4,5,5,5,5];
let stars="";
let nagrada=false;
let poorMark=true;
for(let i=0;i<ocenki.length;i++){
   if(ocenki[i]==6){
stars+="*";
nagrada=true;
   }else if(ocenki[i]==2){
     nagrada=false;
     poorMark=true;
     console.log("No");
     break;
   }else if(ocenki[0]!=6&&ocenki[0]!=2&&ocenki[1]!=6&&ocenki[1]!=2&&ocenki[2]!=6&&ocenki[2]!=2&&ocenki[3]!=6&&ocenki[3]!=2&&ocenki[4]!=6&&ocenki[4]!=2&&ocenki[5]!=6&&ocenki[5]!=2&&ocenki[6]!=6&&ocenki[6]!=2){
     nagrada=false;
     poorMark=false;
   }
   }
   if(nagrada){
console.log(stars);
   }else if(!nagrada && !poorMark){
console.log("No");
   }

