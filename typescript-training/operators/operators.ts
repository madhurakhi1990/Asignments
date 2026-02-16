

//3. Comparison operators==>The special characters used to compare two values. (==,===,!=,!==,>,<,>=,<=)
//== represents loose equality ==> It will just check only the value without considering the datatype. 
//=== represents strict equality ==> It will check Value as well as datatype
let x:number = 10;
let y:any = "10"; 
console.log("Loose Equality with == : "+(x==y));
console.log("Strict Equality with === : "+(x===y));
console.log("Loose Equality with != : "+(x!=y));
console.log("Strict Equality with !== : "+(x!==y));

//5. Ternary operator ==> The special character used to perform a conditional operation. 
// (condition ? valueIfTrue : valueIfFalse)
let age:number = 19;
let canVote:string = (age>=18) ? "Eligible to Vote" : "Not-eligible to Vote";
let eligible :boolean = (age>=18) ? true :false;
console.log(canVote);
console.log(eligible);