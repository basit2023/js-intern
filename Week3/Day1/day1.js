const a=[2,4,"ok","kochbe", undefined]
// const car=["black", "fast"]
// const car=["break","acce","start"]
// const obj={};
// const obj1=new Object()
// console.log(typeof(obj1), typeof(obj))

const obj2={"name":"zaid",
    "age":30,
    "address":31,
    start:function(){
        console.log("welcome to the first object")
    }}
    // console.log(obj2)
// console.log(obj2.age) // taking property thorugh dot method
// console.log("taking thorugh index",obj2["age"])
// obj2.name="basit" //update object
// obj2["name"]="basit"
//adding object
obj2.gender="Male"

//deleting element from the object
delete obj2.address;

// console.log(obj2)

const person = {
    name: "Alice",
    age: 25,
    greet: function() {
    //   console.log("Hello, " + this.age);
    return ("Hello, " + this.age)
    }
  };
  person.person
  console.log(person.greet())
//   console.log(obj2.length)
  for(let i in obj2) {
    console.log(obj2[i])
  }
//   for(let j of obj2){
//     console.log(j)
//   }