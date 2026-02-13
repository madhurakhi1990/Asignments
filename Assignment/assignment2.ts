/*Credit Score:
If the credit score is above 750, the loan is automatically approved.
If the credit score is between 650 and 750, additional checks are performed.
If the credit score is below 650, the loan is denied.*/


let credScore:number =751;
if(credScore>750)
{
    console.log("Approve the loan");
}
else if(credScore>=650 && credScore<=750)
{
    console.log("perform additional checks");
}else if(credScore<650)
{
    console.log("loan is denied");
}

/*Income:
For credit scores between 650 and 750, the customer’s income must be at least $50,000
for the loan to be considered.*/

let credScoree:number =651;
let income:number =50000;
if(credScoree>=650 && credScoree<=750)
{
    if(income>=50000)
    {
console.log("eligible for loan");
    }else
    {
        console.log("not eligible for loan");
    }
 
}

/*Employment Status:
o If the customer’s income is at least 50,000, the system checks whether the customer is
employed.
o If the customer is unemployed, the loan is denied.*/

let custIncome:number =50000;

if(custIncome>=50000)
{
    console.log("customer is employed ");
}else
{
    console.log("customer is unemployed, the loan is denied");
}

/*Debt-to-Income Ratio:
o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
o If the DTI ratio is less than 40%, the loan is approved.
o If the DTI ratio is 40% or greater, the loan is denied.*/

let dti:number =39
let isEmployeed: boolean= true;
if(isEmployeed==true)
{
    if(dti<40)
    {
        console.log( "loan approved");
    }else
    {
        if(dti>=40)
        {
console.log("loan denied");
        }
    }
        
    }

/*Create common function and then based on below details, print whether user is eligible to get the loan
or not */
let customerName:string = "John Doe";
let creditScore: number = 720;
let incomee :number= 55000.0;
let isEmployed:boolean = true;
let debtToIncomeRatio:number = 35.0;

if (creditScore>750)
{
    console.log("Approve the loan")
}else if(creditScore>=650 && creditScore<=750)

    if(incomee>=50000)
    {
if(isEmployed == true)
{
    if(debtToIncomeRatio<40)
    {
let customerName:string = "John Doe";
        console.log(`${customerName} eligible for loan`);
    }else
        console.log("loan denied");
}
}






