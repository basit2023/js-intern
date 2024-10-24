// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
// let car200="car1"
// let car1="car1"
// let car1="car1"
// let car1="car1"
//very dificult to find some specific ones so the fixed by array

//up to 300
//  const arr=[] //represent
//  const arr=new Array() // we can also initilized through this as well like the above
//  const arr1=new Array("car1","car2",3,undefined,null);
//  console.log("the array 1 is:",arr1)

const arr2=[1,2,3,4,5,6]
// console.log("the arr2 is:",arr2)
arr2[0]="car";    // updated the index value. 

// console.log(arr2)
// arr2[10]="asaad" //update opereation, the empty index will give us the undefined value
// console.log("the array dynamic size",arr2)
// console.log("the array length",arr2.length)
//find the index position
// console.log(arr2[6])
//push add element at the end of an array

const num1=["car",30, "name","apple"]
// console.log("the original array is:",num1)
// num1.push("Banana")
// console.log("the updated array is",num1)
// // pop() to remove element from the end of array
// num1.pop()
// console.log("Remove Elemnet from the end of an array:",num1)

// unshift() used to add element at the atart of an array
// num1.unshift("Banana")
// console.log("the updated array after unshift:", num1)

//shift to remove elemet from the start of an array
// num1.shift()
// console.log("updated array after removing element from the start:",num1)

// const num2=["this","is", "me"]
// console.log("the array 2 is:",num2)
// const num3=num1.concat(num2)
// console.log("the result after adding two array:",num3)

const sort1=[9,8,5,6,7,4,2,3,1]
// console.log(sort1.sort())  // to sort numbers
// console.log("reverse array:",sort1.reverse()) //to revers complete array
// for(let i=0; i<num1.length; i++){
//     console.log(`The index:${i} value is:${num1[i]}`)
// }


//for----of loop. itereate over the element not on the index
// for( let i of num1){
//     console.log("the element is:",i)
// }


//for in: loop is used to itereate over the index position
// for (let index in num1){
//     console.log(index, num1[index])
// }

// it takes three parameters
// 1 starting index from where you want to add or detele items
// 2 the number of element you want to delete.
// the rest is used to add items to array
// num1.splice(4,0, "item1","item2","item3")
// // num1.splice(0,3)
// console.log(num1)




//practice question

// function totaladdition(x){
//     console.log("the x is:",x)
//     let y=0;
//     for(let i = 0; i <x.length; i++){
//         y=y+x[i];
//         console.log(`The y is: ${y}`)
//     }
//     return y;

// }
// const array1 = [1,2,3,4,5,6,7,8,9,10,11,12]
// const result = totaladdition(array1)
// console.log("the total result is:",result)


// Question: Write a function to remove duplicate elements from the array const numbers = [1, 2, 2, 3, 4, 4, 5].
// Expected Output: [1, 2, 3, 4, 5]
numbers = [1, 2, 2, 3, 4, 4, 5]

function remove_duplicates(array1) {
    const arr=[]
    for(let i=0; i<array1.length; i++) {
       let isDuble=false;
        for(let j=0; j<array1.length; j++) {
        //   console.log(`the i is:${i} and the j is:${j}`)

            if(array1[i]===arr[j]){
                console.log("skip the douple:",array1[i],i)
             isDuble=true
            }
        }

        if(!isDuble){
            arr.push(array1[i])
        }
        console.log(arr)

    }
        return arr
}
console.log("the result array:",remove_duplicates(numbers))























