//1.Temperature of a city in degrees Celsius: 25.5

let Temperature:Number =25.5;
console.log("Temperature of a city in degrees Celsius: " + Temperature)

//2.Whether a customer has placed an order: true or false

let order:boolean =true;
console.log("Whether a customer has placed an order: " + order);

//3.Person's phone number: "123-456-7890"

let phNum:string = "1234-567-890";
console.log("Person's phone number:" + phNum);

//4.Amount of money in a customer's bank account: 1000.50
let balAmount:number =1000.50;
console.log("Amount of money in a customer's bank account:" + balAmount);

//5.Person's email address: "john.doe@example.com"
let email: string ="john.doe@example.com";
console.log("Person's email address: " + email);

//6.Coordinates of a location (latitude, longitude): 37.7749, -122.4194

let latitude:number = 37.7749;
let longitude:number = -122.4194;

console.log("coordinates of a location (latitude, longitude):" + latitude +" , " + longitude);

//7.Person's marital status: true or false
let maritalStatus: boolean= true;
console.log(maritalStatus);

//8.Person's occupation: "Software Engineer"
//9.Person's favourite colour: "Blue"

interface personInfo {
occupation: string,
maritalStatus:boolean,
favouriteColour : string
}


let Person: personInfo={
    occupation: "Software Engineer",
    maritalStatus: false,
    favouriteColour: "Blue"
}

console.log("Person's occupation: " + Person.occupation);
console.log("Person's favourite colour: "+ Person.favouriteColour);
console.log("Person's marital status: true or false"+ Person.maritalStatus);

//10.Current year: 2023

let currentYear :number  =2023;
console.log("Curreny year: " + currentYear);

//11.Number of followers on a social media platform: 1,000,000

let numOfFollowers:string ="1,000,000";

console.log("Number of followers on a social media platform: " + numOfFollowers);

//12.Rating of a movie: 7.5

let movieRating:number =7.5;
console.log("Rating of a movie:" + movieRating )

//13.Person's blood type: 'A'

let bloodType:string ='A';
console.log("Person's blood type:" + bloodType );

//14.Title of a book: "To Kill a Mockingbird"
let tittleOfBook:string ="To Kill a Mockingbird";
console.log("Title of a book: " + tittleOfBook);

//15.Number of employees in a company: 500
let numOfEmp:number = 500;
console.log("Number of employees in a company: " + numOfEmp);

/*
//16.Time of an event: 2:30 PM
let eventTime:Date=  new Date();
eventTime.setHours(14, 30, 0, 0);
console.log("Time of an event:" + eventTime);
*/

let eventTime: string="2:30 PM" ;
console.log("Time of an event: " + eventTime);

//17.Name of a country: "United States"

let countryName: string = "United States";
console.log("Name of a country: " +  countryName);

//18.Person's eye color: "Brown"
let eyeClr: string ="Brown";
console.log("Person's eye color: " + eyeClr);

//19.Person's birthplace: "New York City"
let birthPlace: string ="New York City";
console.log("Person's birthplace: " + birthPlace);

//20. Distance between two cities: 200.5
let distOfCities: number =200.5;
console.log("Distance between two cities: " + distOfCities);