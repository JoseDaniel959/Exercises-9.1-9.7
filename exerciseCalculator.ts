import { mean } from "mathjs";
import { checkParameters } from "./utils";
//import { checkParameters } from "./utils";
export type exercisesResult = {
  isCorrect?: boolean;
  periodLength?: number;
  trainingDays?: number;
  success?: boolean;
  rating?: number;
  ratingDescription?: string;
  target?: number;
  average?: number;
};
export const exerciseCalculator = (targetValue:number, exerciseHours : number[]) : exercisesResult =>{
  
  let result: exercisesResult = {
    periodLength: 0,
    trainingDays: 0,
    success: true,
    rating: 2 ,
    ratingDescription: "",
    target: 0,
    average:0

  };   

  // checkParameters(
  //   process.argv[2],
  //   process.argv[3],
  //   process.argv[4],
  //   process.argv[5],
  //   process.argv[6],
  //   process.argv[7],
  //   process.argv[8],
  //   process.argv[9]);
  if(targetValue || exerciseHours ){
    try{
      checkParameters(targetValue);
      checkParameters(...exerciseHours);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch(e){
      return({ isCorrect:false});
    }
  } 
  
    
  console.log(exerciseHours.filter((e) => e > 0).length); 
  if(exerciseHours.filter((e) => e > 0).length>=5){
    console.log("entrooo");
    result = {...result,success:true,rating:3,ratingDescription:"Too good"};
  }
  else if(4>=exerciseHours.filter((e) => e > 0).length && exerciseHours.filter((e) => e > 0).length>=2){  
    result = {...result,success:true,rating:2,ratingDescription:"not too bad but could be better"};
  }
  else if(2>exerciseHours.filter((e) => e > 0).length){
    result = {...result,success:false,rating:2,ratingDescription:"Too bad, but i trust you can improve it"};


  }
  return(
     {
      ...result,
      periodLength: exerciseHours.length,
      trainingDays: exerciseHours.filter((e) => e > 0).length,
      average: mean(exerciseHours),
      target: targetValue
     }
    );

    
};

console.log(exerciseCalculator(5,[3, 0, 2, 4.5, 0, 3, 1]));
//console.log(exerciseCalculator(Number(process.argv[2]),process.argv.slice(3).map((e) => Number(e))));