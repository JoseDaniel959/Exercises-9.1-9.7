// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkParameters = (...argument: (any)[]): void =>{
    console.log("soy el argumento",argument);
    argument.forEach((element: number) => {
        if(isNaN(element)){
            throw new Error("Parameters given are not a number");            
        }
    });
};


  