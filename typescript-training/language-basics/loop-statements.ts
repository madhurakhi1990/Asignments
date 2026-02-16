//loop statements

//For loop==when we know the total num of iteration befor itself
//while loop ==when we dont know the total num of iteration before itself

let empName :string ="madhu";

for(let i:number =1 ;i<=10 ; i++)
{
console.log(empName);
}

//while

let i:number =1;
let isPageLoad:boolean =false;
while(i>0)
{
    if(isPageLoad || i==5)
    {
        break;
    }
 console.log("refresh the page");
 i++;
}

//for .. of -array
//for ..in -obj

let empNames:string[] = ["madhu", "megha","rakhi"];
for (let i:number =0 ; i<empNames.length ; i++)
{
    console.log(empNames[i]);
}

//for in

interface personInfo {
 Name: string,
 age:number,
 empID:number,
 phNum:number
address:
{
    city: string,
    state: string
}
}

 let person: personInfo = {
    Name: "Madhu",
    age:30,
    empID:1234,
    phNum:123456778,
 address:{
    city: "bangalore" ,
    state: "Karnataka"
 }
}

for(let val in person){
   // console.log(val);
    console.log(person[val as keyof personInfo]);
}