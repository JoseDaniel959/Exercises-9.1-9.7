import { checkParameters } from "./utils";
export const calculateBmi = (mass:number,height:number):string => {
    const bmi : number =  mass / (height * height);   
    //checkParameters(process.argv[2],process.argv[3])
    //if(mass != undefined && height != undefined) checkParameters(mass,height)
    if(require.main === module){
        checkParameters(mass,height);
    }

    if(bmi< 18.4){ 
        return "Underweight";
    }
    else if( 18.4 <= bmi && bmi <= 24.9){ 
        return "Normal range";
    }
    else if(bmi > 24.9){
        return "Overweight";
    }
    return " ";
    
};

console.log(calculateBmi(Number(process.argv[2]),Number(process.argv[3])));
