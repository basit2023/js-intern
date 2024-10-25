const arr=[1,3,1,1];
// const add=function(array){
//     let y=0;
//     for(let i=0;i<arr.length;i++){
//         y=y+array[i]
//     }
//     return y
// }


// console.log("the result is:",add(arr))
// reducer mathod same the above with reducer
// const result=arr.reduce((a,b)=>a+b,10)
// console.log("the result is:",result)

//Find Mathod test if some specific value is present or not, if yes return the first existance of element value other wise return undefind
// Returns the value of the first element that satisfies the provided testing function. Otherwise, it returns undefined.

// const result=arr.find(a=>a%2===0)
// console.log("the result of th find method is:",result)

//some method check if the value is present give me the true other wise fase
// const numbers = [1, 3, 5, 7, 8];
// const hasEvenNumber = numbers.some(num => num % 2 === 0);
// console.log(hasEvenNumber); // Output: true

// every check each item of the array if all the element are true the result will be true otherwise false
// const numbers = [2, 4, 5];
// const areAllEven = numbers.every(num => num % 2 === 0);
// console.log(areAllEven); // Output: true

// const fruits = ['apple', 'banana', 'mango',5];
// const fruitString = fruits.join(', ');
// console.log(fruitString); // Output: 'apple, banana, mango'


// const result1=fruits.includes("banana")
// console.log(result1)

const nu=[1,2,3,4,[1,2,3,4,5,[4,4]],16]
console.log(nu[4][5][0])
