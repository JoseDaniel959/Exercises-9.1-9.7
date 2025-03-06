import express from "express";
import { calculateBmi } from "./bmiCalculators";
import bodyParser from "body-parser";
import { exerciseCalculator, type exercisesResult } from "./exerciseCalculator";
const app = express();
app.use(bodyParser.json());
app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi',(req,res)=>{ 
    const heightParameter = Number(req.query.height); 
    const weightParameter = Number(req.query.weight);
    console.log(heightParameter,weightParameter); 
    if(isNaN(heightParameter) || isNaN(weightParameter)) res.send({error: "malformatted parameters"});
    const result:string = calculateBmi(Number(weightParameter),Number(heightParameter));
    res.send({ weight:weightParameter , height: heightParameter, bmi:result  });


});
  
app.post('/exercises',(req,res)=>{
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises,target}= req.body;
  console.log(daily_exercises,target);
  // try{
  //   console.log("me imprimo");
  //   const hola = Number(target);
  //   console.log(hola)
  // }catch(e){
  //   console.log("soy el error",e)
  // }

  if(daily_exercises && target){
    const result:exercisesResult = exerciseCalculator(Number(target),daily_exercises as number[]);
    if(result.isCorrect === false){
      res.send( { error: "malformatted parameters"} );
    }
    res.send(result);
    // console.log("soy el resultado",result);
    // res.send(result);
  }
  else if(!daily_exercises || !target){
    res.send({error: "parameters missing"});
  }

});


  const PORT = 3003;
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });