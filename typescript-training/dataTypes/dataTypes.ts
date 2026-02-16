//Run code in typescript : npx tsx file-path
//Run code in javascript : node file-path


//Syntax to store data in Typescript

//variableDeclaration variable:dataType = value;

//Data types in TypeScript are divided into two different categories. 
// 1. Primitive datatypes (immutable)
// 2. Non-primitive  datatypes (mutable)

let num1: number = 10;
let num2: number = 10.5;
console.log(num1);
console.log(num2);

//2.string ==> The data type that we are going to use to store text or characters with the help of single quotes, double quotes or backticks. 
let name: string = "John Doe";
console.log(name);

//3.boolean ==> The data type that we are going to use to store true or false values.
let isStudent: boolean = false;
console.log(isStudent);

//4.null ==> The data type that we are going to use to store null values. It represents the intentional absence of any object value.
let nullValue: null = null;
console.log(nullValue);

//5.undefined ==> The data type that we are going to use to store undefined values. It represents a variable that has been declared but not assigned a value.
let undefinedValue: undefined = undefined;
console.log(undefinedValue);

//Union==>

let empAddress : string | number | boolean ="123 Main St";

console.log(empAddress);

empAddress=12345;

console.log(empAddress);

empAddress=true;

console.log(empAddress);


//any type ==> Any is a data type that is going to remove the type safety layer within the TypeScript. 
let data : any = "Hello World";
console.log(data);
data = 100;
console.log(data);
data = true;
console.log(data);

//object

interface personInfo {
    name: string,
   age :number,
   empID: number,
   visaStatus: boolean,
   address: 
   {
     city:string,
     state: string,
     country:string

}
}


let person: personInfo = {
   name: "madhu",
   age :30,
   empID: 1234,
   visaStatus: true,
   address: 
   {
     city:"bangalore",
     state: "Karnataka",
     country:"india"

}

}

//2.array ==> The data type that we are going to use to store multiple values in a single variable.

let fruits: string[] =["apple", " mangp", "grapes"];
console.log(fruits);
 
let price :number[] = [10,20,30];
console.log(price);

let fruitsAndPrice : (string | number)[] = ["apple", 10, "mango", 20, "grape", 30];
console.log(fruitsAndPrice);

//tupple The data type that we are going to use to store multiple values with different data types in a single variable in specific order.


let empInfo : [string,string,number,number] =["madhu","shree",30,1234];
console.log(empInfo);

//4.function ==> Function is a data type that is going to store a block of code or collection of statements together to complete specific tasks. 

function loginAndLogout(browserName :string) : void {
    console.log("launch "+browserName+" browser ");
    console.log("verify username and password login page displayed");
    console.log("enter UN and PSW");
    console.log("click on enter");

}

loginAndLogout ("chrome");


//Map ==> Map represents a collection of key-value pairs. 
let empInfoMap:Map<number,string> = new Map();
empInfoMap.set(123,"Bharath");
empInfoMap.set(124,"Sarath");

//Set ==> Set represents list of unique values. 
let empIds:Set<number> = new Set();
empIds.add(123);
empIds.add(124);

console.log(empInfoMap);
console.log(empIds);

//Date ==> Date represents a specific point in time.

let currentDate = new Date();
console.log(currentDate);