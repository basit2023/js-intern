const array=["arr",30,"number"] //array
const obj1={"name":"abc", "age":30} //object

//array of Object
const obj=[
    {
        "name":"fatma", "age":31,"address":"abc"
    },
    {
        "name":"Abdullah","age":22,"address":"cab"
    },
    {
        "name":"anosh","age":27, "address":"koch be ha"
    }
]
// access object
// console.log(obj[2].age)
//Adding Objects
obj.push({"name":"Waleed","age":28,"address":"isb"})
// console.log("updated object:",obj)
// Loop through object of array
// for(let i=0; i<obj.length; i++ ){
//     console.log(obj[i].name, obj[i].age)
// }

//Map method
// const map=obj.map(x=>x.name)
// console.log(map)
// filter mathod
// const filte=obj.filter(a=>a.age===31)
// console.log(filte)

//sort objects
// const sor=obj.sort((a,b)=>a.age-b.age)
// console.log(sor)




// https://jsonplaceholder.typicode.com/users


const data=[
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
]
const length=data[0].address.geo.lng;
console.log(length)