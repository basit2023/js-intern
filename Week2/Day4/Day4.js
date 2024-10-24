const a=[1,2,3,4,5,6,8,9,10];

// function mult(array){
//     const arr=[]
//       for(let i=0; i<array.length; i++){
//           arr.push(array[i]*2)
//       }
//       return arr
// }
// console.log("the result array:",mult(a))

//  repeat the above with the map mathod
// const result =a.map(x=>x*2)
// console.log("the map mathod result:",result)



//filter mathod

// function isEven(array){
//     const arr=[]
//       for(let i=0; i<array.length; i++){
//         if(array[i]%2==0){
//             arr.push(array[i])
//         }
          
//       }
//       return arr
// }
// console.log("the result array:",isEven(a))


// the same with filter mathod

// const isEven=a.filter(y=>y%2==0)
// console.log(isEven)



// foreach mathod

// function mult(array){
    
//       for(let i=0; i<array.length; i++){
//        console.log(array[i]*2)
          
//       }
    
// }
// // console.log("the result array:",)
// mult(a)


// same for the above
//  const fore1=a.forEach(z=>console.log(z*2))
//  console.log(fore1)


// slice    the slice method doesnot distub the original array wh
const fruits = ['apple', 'banana', 'mango', 'orange']
const result=fruits.slice(0,3)
console.log("the original array:",fruits)
console.log("the new array:",result)

const fruits1 = ['apple', 'banana', 'mango', 'orange']
//the splice method disturb the original array and give us a shallow copy of the original array.
const result1=fruits1.splice(0,1,"kochbe")
console.log("the originale array of fruits1 is:",fruits1)
console.log("the updated array of fruits1 is:",result1)
