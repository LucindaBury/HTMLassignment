/* console.log("Hello World!")

var age = 10
let age2 = 30

const name = "Lucinda"
const lastname = "Bury"
//let fullname= name + lastname
console.log(`I think ${name} ${lastname} is the best!`)

let firstname = "code"
let surname = "Lancashire"

console.log(`I think ${firstname} ${surname} is the best!`)

/* let namesarray = ("Lucinda" ,  "Luce" ,  "Lloyd")

let person1 = {
name:"Lucinda", 
age: 34
}

let person2 = {
    name:"Luce" ,
    age:20
    }

    let person3 = {
        name:"Lloyd" ,
        age:33
        }  

 let people=[person1, person2, person3]    */

 /*function addition (){
    let a = 10
    let b = 30

    let sum = a + b
    return sum
 }
    let additionvalue = addition ()
    console.log (addition())
 

//console.log(people)

//age = 20

let numbers = [10,20,30,40,50,60,70,80,90,100]

for(let i=0; i<numbers.length; i++)
{
console.log(numbers[i])
}

console.log("loop finished")

let sumOfages = age + age2

console.log(sumOfages) */

// const numbers = [1,2,3,4,5,6,7,8,9]

// const squares = numbers.map((number, index)=>
// {return number * number})

// console.log ("numbers",numbers)
// console.log("squares",squares)

// const evenNumbers = numbers.filter((number, index)=>{
// return number % 2 == 0})
// console.log("evenNumbers",evenNumbers)

// const sum = numbers.reduce((previousValue, currentValue)=>{
//     previousValue = previousValue + currentValue
//     return previousValue
// }, 0)

// console.log("sum",sum)

let form
window.addEventListener('load' , ()=>{
form = document.querySelector("#form")
form.addEventListener("submit" , (event)=>{

 
 //   console.log("submit event", event)

    event.preventDefault()
    const formData = new FormData (form)
    console.log("formdata", formData)
    const data = Object.fromEntries(formData)
    console.log("data", data)
    fetch(`https://api.github.com/users/${data.username}`)
    .then((Response)=>{
        return Response.json()
    })

    .then((data)=>{
        console.log("response", data)
    })


})


})

// https://api.github.com/users/{username}