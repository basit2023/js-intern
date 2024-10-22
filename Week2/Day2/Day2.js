// Function Declaration
console.log("the add function before call:",add(10,50)) //Hoisting: is funtion that we call before initilization like this

//Function Decleration
// A Function Declaration is the most common way to define a function in JavaScript. It uses the function keyword followed by the function name and parameters.
function add(c,d){ //paramaters, when we assigned the variable in the function definition called function paramater
    // console.log(`the c is:${c} and the d value is:${d}`)
   console.log("the log inside the function:",c+d)
   return c+d
   console.log("the c+d is after returning...........")
//    will not execute the above like becuse return statement stop further execution

   
}
// console.log(c,d)
// add(10,15)
// console.log(add(10,15)) //when we pass the data in the function call its called argument
// console.log(add(11,12))
// console.log(add(14,11))
// console.log(add(15,16))

// Function Expression
// A Function Expression is when a function is assigned to a variable
console.log("The expression function before definition",functionexpression(10,15)) // this line will give is error becuse its not hoist function as above
const   functionexpression =function(a,b){
    return a+b
}


// console.log("the function expression result is:",functionexpression(10,15))


// console.log(add(3,5))
