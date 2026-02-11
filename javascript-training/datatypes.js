//immutable- original value not changing

let a=10;
a+10;
console.log(a);


//mutable - original value changes

let empDetails=
{
    "Name": "madhu",
    "ID":123

}
empDetails.age=30;
console.log(empDetails);


//Datatypes

let num1=10;
let num2=20.5;

let name="rakesh";
let location='sira';

let greeting='I told him "good morning" ';
let newGreeting="I told him 'Hi' " ;
 let updatedGreet= "i said 'hi' and also \"hello\" ";
 let newGreetings='i said "Hi " and also \'hello\' ';

 //Backtick

 let message = ` employee name is ${name}  , and location is ${location}`;
console.log(message);

//undefinded

let age;
console.log(age);

//null
let salary=10000;

salary=null;
console.log(salary);

//Non premetive datatypes:
//objects
let person={
    name: "Madhu",
    age: 30,
    visaStatus: true,
    empId: 1234,
    address :{
           city: "bangalore",
           country:"india",
           state:"karnataka"
    }

}
 console.log(person.age);
 console.log(person["age"]);
 console.log(person.address.state);
 console.log(person.address["country"]);

 //Arrays

 let fruits =["apple","grapes"];
 let price=[10,20];

 let fruitsAndPrice=["apple",10,"mango",20,"grapes",30,"orange",40]

console.log(fruits);
console.log(price);
console.log(fruitsAndPrice[3]);

//Set()
let empIDS = new Set();
empIDS.add(123);
empIDS.add(123);
empIDS.add(124);
empIDS.add(125);
empIDS.add(126);

console.log(empIDS);
console.log(empIDS.size);

//Map

let empMap =new Map();
 empMap.set(121,"madhu");
  empMap.set(122,"madhushree");
   empMap.set(123,"Megha");
    empMap.set(124,"Rakesh");
     empMap.set(121,"rekha");
      
     console.log(empMap);
      console.log(empMap.size);
       console.log(empMap.get(122));
     
     
//Date

let currentDate = new Date();

console.log(currentDate);

console.log(currentDate.getFullYear());
console.log(currentDate.getDate());
console.log(currentDate.getMonth()+1);//0 to11
console.log(currentDate.getHours());
console.log(currentDate.getSeconds());
console.log(currentDate.getMinutes());