// var , let, const
// let name = "muideen"
// name = "Aptech"
//  console.log(name)


//  let kelvin
//  console.log(kelvin)
//  kelvin='John Doe'
//  console.log(kelvin)
//  kelvin= 'Steve Smith'
//  console.log(kelvin)

//  prompt ("enter your name")


 // Data type (number,boolean,string,array, object)

//  let a = 5
//  let b =6.7
//  let isRainToday = true
//  let college = "Aptech Osogbo"
//  let fruits = ["Apple","Pawpaw", "Mangoes","Orange","Cucumber"]
//  const person = {
//     name: "Kolawole Ridwan",
//     jobrole:  "Mathematician",
//     company: "Aptech Osogbo",
//     age: 56,
//     salary: 670000.00
//  }

//  console.log(a)
//  console.log(b)
//  console.log(isRainToday)
//  console.log(college)
//  console.log(fruits[3])
//  console.log(person.name)
//  let res = person.jobrole
//  console.log(res)
//  document.body.innerHTML = `
//  <h1>Details</h1>
//  <b>Name: </b>  ${person.name} <br>
//  <b>Jobrole: </b> ${person.jobrole} <br>
//  <b>Company: </b> ${person.company}  <br>-
//  <br>Age: </b> ${person.age} <br>
//  <b>salary:  </b> ${person.salary} <br> 
//  `



// casting

// let val = 5
// let a = "a"
// console.log(val)
//console.log(val+5)
// console.log(typeof val)
// Number to string

// val = String(5);

// console.log(val)
// console.log(val+5)
// console.log(val*5)
// console.log(val*a);
// console.log(val+a);
// console.log(typeof val)

let fruits = ["apple","Mango","Water Melon","Pawpaw"]
let numbers = [1,2,3,4,5,6,7,,8,9]
//fruits[0] = "Pineaple"
// Methods in Array
//push() - add to the back of an array
// fruits.push("Muideen")
// unshift() - Add to the front of the array
// fruits.unshift("Aptech")
//pop() - remove from the back
//fruits.pop()
//shift() - remove from the front
 // fruits.shift()


 // splice () - 
 //fruits.splice(1,2)
 //fruits.splice(2,0, "cucumber")
 //numbers.splice(2,7)
 // fruit.sort()
 // fruit.reverse()
 

//  console.log(fruits)
// numbers.splice(3,4)
// console.log(numbers)


//     string methods
const firstName = 'William'
const lastName = 'Johnson'
const str = 'Hello there my name is Brad'
const tags = 'Web design, web development,programming'


let val;
// concatenation
val = firstName + lastName;
val = firstName +" "+ lastName

// Append
val ='Brad ';
val += 'Traversy'   //  Meaning val = Brad + Traversy

// length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName),

// upper case
val = firstName.toUpperCase()
// lower case
val = firstName.toUpperCase()


// index of()
val = firstName.indexOf('a');
val = firstName.lastIndexOf('1');

// charAt()
val = firstName.charAt('2');

// substring()
val = firstName.substring(0, 4);

// split()
val = str.split(' ');
val = tags.split(',');
console.log(val)