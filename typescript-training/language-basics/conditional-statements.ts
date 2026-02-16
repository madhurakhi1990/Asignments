//There are two different types of conditional statements that are available. 
//1. if else conditional statement ==> Will be used when we Don't know the result of condition before itself. 
//2. switch case conditional statement ==> Will be used when we know the result of condition. Now we want to choose one option among multiple. 

let percentage:number =30;

if(percentage>=80)
{
    console.log("distingtion");
 if(percentage >90)
 {
    console.log("eligible for gold medal");

 }else
    console.log("not eligible for gold medal ");

}else if(percentage>60){
    console.log("first class");

}else if(percentage>50)
{
    console.log("second class");

}else if(percentage>35)
{
    console.log("pass");

}else
{
    console.log("fail")
}

//Switch case

let env:string ="SIT";

switch(env){
    case "Dev":
        console.log("run the app in dev env");
        break;
    case "prod":
        console.log("run the app in prod env");
        break;
    case "QA":
        console.log("run the app in QA env");
        break;

default: console.log("please provide valid env");
}