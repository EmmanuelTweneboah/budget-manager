## JOURNEY TO MY BUDGET MANAGER PROJECT

### FACTS ABOUT FUNCTIONS 30/11/2018

 1. Functions are also object because is an instance of object type.

 2. Functions behave like objects

 3. Functions can be passed as arguement to another function

 4. We can store functions in a variable.

 5. Function can also return another function


## FUNCTION CONSTRUCTOR

### KEY NOTES 30/11/2018

 1. Function constructor is a template or blueprint where other objects are built base on the constructor
 
 2. When creating a function constructor be mindful of the arguements you passed in thus, they must be in order when instantiating it

 3. When an instantiated object is trying to access it's properties, first it will look up to it's parent thus from which it was created, if it did not find it, it will move to OBJECT and this process is call Prototype Chain

 4. Function constructor can take all properties example, functions

 5. "this" keyword refers to the windows object but when you use this in an object it refers to the properties of the object itself.

 6. It's advisable to create a prototype function if you the object will have many functions. Prototype functions can be access by it's children and this is call INHERITANCE !!!

 6. You can create any functions to manipulate your object

 7. Primitives varibles are independent thus when you change a value of a variable whithin a function it does not affect the original variable. While Objects are dependent thus whenever you change a value of a variable or you pass an object to a function it affects it's parent because objects are passed by reference.


### CODE EXAMPLES
 ```javascript
 //Passing functions as arguement

 const years = [1890, 1990, 2005, 1988];
 /*
 1.For this data we can determine the age of each
  2. We can determine if a certain age is above or below a certain age
 */

 function arrayCalc (arr,fn) {
     const arrayResults = [];
     for (let i = 0; i < arr.length; i++) {
      arrayResults.push(fn(arr[i]))
         
     }

     return arrayResults;
 }


//Calculate age function
function calculateAge (el){
    return 2018 - el;
}

//Function to determine if one is below 18 years
function isAboveEighteenYears (el){
    return el >= 18;
}

//Using the functions

let ages = arrayCalc(years, calculateAge);
const isFullAge = arrayCalc(ages, isAboveEighteenYears);

console.log(ages);
console.log(isFullAge);
 ```


### CODE EXAMPLES

```javascript
//Function constructor

const Person = function (firstName, lastName, yearOfBirth, job) {
this.firstName = firstName;
this.lastName = lastName;
this.yearOfBirth = yearOfBirth;
this.job = job;
}

//This function is available to it's child
Person.prototype.fullName = function(){
return `Your full name is ${this.firstName} ${this.lastName}`
}

//Another function to determine if your job is programming
Person.prototype.isYourJobProgrammer = function(){
   if (this.job == "Programmer") {
       alert("You are there");
   }

}

//Instantiating my object
const person1 = new Person("Emmanuel", "Tweneboah",1988,"Programmer");

//Calling my function Full name
const fullName = person1.fullName();
console.log(fullName);
 person1.isYourJobProgrammer();

```

# CHATTING WITH THE DOM
```javascript

//Btn eventListener function

document.querySelector("#calc-age").addEventListener("click", function (e) {
  e.preventDefault();
 
  //Selecting IDs
  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const display = document.querySelector("#display-fullName");
  const yearOfBirth = document.querySelector("#year-of-birth").value;
 
  function calculateAge(yearOfBirth) {
   
    //Pricing
    const price1 = "$20000.00";
    const price2 = "$30000.00";
    const price3 = "$40000.00"

    //Other variables
   const retirementAge = 60;
   const currentYear = 2018;
   
   //Calculations
   const age = currentYear-yearOfBirth;
   const retirementAgeRemaining = retirementAge - age;

   //Conditions

    if (firstName == "" || lastName == "" || yearOfBirth == "")  {
      alert(`Hi ${firstName} ${lastName} try to fill all the required fields`);

    } else if (retirementAgeRemaining >= 30){
      display.innerHTML = `Hi ${firstName} - ${lastName} your age as at 2018 is ${age} years, and your retiring years left is ${retirementAgeRemaining} because of that we are giving you ${price1} for your Daughters Education`;
    } else if (retirementAgeRemaining <= 20) {
       display.innerHTML = `Hi ${firstName} - ${lastName} your age as at 2018 is ${age}years, and your retiring years left is ${retirementAgeRemaining} because of that we are giving you ${price2} for your Daughters Education`;
    } else {
      alert("You don't qualify")
    }
  
  }
  
    calculateAge(yearOfBirth);

});




```
```javascript
//Functions

//Calculate age function
function calculateAge (yearOfBirth) {
 let age = 2018 - yearOfBirth;
 return age;
}

//Anytime we use a return keyword we need to assign a variable to it when we are executing it

let emmaAge = calculateAge(1988);
let tweneboahAge = calculateAge(1999);
console.log(`Emmanuel's age is ${emmaAge} years old`);
console.log(`Tweneboah's age is ${tweneboahAge} years old`);

//fubction to calculate area of a rectangle
function areaOfArectangle(length, width) {
    //Tip: whatever that must be passed as arguments must be defined inside or outside the function
    let area = length * width;
    return area;
}
let area = areaOfArectangle(10,6);
console.log(`The area of the rectangle is : ${area}m`);


//FUCTION CALLING ANOTHER FUNCTION
function calculateAge(yearOfBirth) {
    let age = 2018 - yearOfBirth;
    return age;
}

function yearsUntilRetirement (name, year) {
 let age = calculateAge(year);
 let retirement = 60 - age;
 return retirement;
}

let yearsToRetire = yearsUntilRetirement("Tweneboah", 1999);

console.log(yearsToRetire);

function yearsUntilRetirement (name, yearOfBirth){
    let age = 2018 - yearOfBirth;
    return `${name} your age is ${age}`
}

let yearsUntilRetirement1 = yearsUntilRetirement("Emmanuel", 1988);
console.log(yearsUntilRetirement1);
```
