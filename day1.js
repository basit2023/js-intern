var a=15;
console.log("the result of a:",a)
var a=10;
console.log("the result of updated a:",a)
var a=30;
console.log("the result of again updated a:",a)

if(true){
    var b=10;
}
console.log("the var b is:",b)
// this will give me the result of the b which is 10 this is becuse the var is global scop
// and we can access from any where
// var variable can be redicler or updated
let b=15;
b=20;
console.log("the result of b:",b) //will give us result
if(true){
    let let_b=10
    console.log("the let_b is:",let_b)//will give us result
}
console.log("the result of let_b:",let_b)
/* let varible is block scop and we can update but can't redecler  
let varible can't access out side of the block scope
it means let is local/functional scope */
const c=3;
// const c=50
// console.log("the result of c:",c) //error message can't rediclare const var
c=5;
console.log("the result of c:",c) //error message cant update a value

if(true){
   const m=60  
   console.log("the result of internal m is:",m)//will give the m result

}
console.log("outer m:",m) //error message m is not defined

/* const varible is block scop and we can't update or can't redecler  
const varible can't access out side of the block scope
it means const is local/functional scope */