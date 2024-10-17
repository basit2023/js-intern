// && (Logical AND)
// || (Logical OR)	
// ! (Logical NOT)


const a=10;
const b=10;
// if(a==10 && b==11){  //logical &&, if both condition is true then result true otherwise false
//     console.log("The a and b are equal ")
// }else{
//     console.log("a or b is not equal to 10")
// }

// if(a==11 || b==11){    // if both false the result will be false otherwise true
//     console.log("The a or b are equal to 10")
// }else{
//     console.log("a or b is not equal to 10")
// }



// Conditinal statements
// if(false){
//  console.log("Hello! Welcome to Js") // will not print becuse the if condition is false
// }else if(true){
//     console.log("The else if Condition")   // will print this result becuase else if contdion is true the if condition is false

// }
// else{
//     console.log("Else Condition") // the default condition if non of the above true then it will print

// }


const var1=61;
if(var1<=18){
    console.log("Your are under 18")
}else if(var1>18 && var1<=30){
     console.log("Your are under 30...")
}else if(var1>30 && var1<=60){
    console.log("Your are under 60...")
}else{
    console.log("Your are at the last stage")
}

// Ternary Operator
// condition ? "something":"something else"
true? console.log("Your are at  the last stage.."):console.log("still Young Enjoy") //when the condition is true then it give us the first condition other wise second condition
var1==31? console.log("Your are at  the last stage.."):console.log("still Young Enjoy")


