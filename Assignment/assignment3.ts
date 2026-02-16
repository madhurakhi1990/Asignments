/*1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students

Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0 */

let students:string []=["Suresh","Mahesh","Naresh"];
let marks:number[] =[75,80,82];


let UpdatedMarks:number []=[];
let total: number=0;

for(let i:number =0; i<marks.length; i++)
{
UpdatedMarks[i]= marks[i]+ 10;
total =total+ UpdatedMarks[i];

}
let average:number =total/UpdatedMarks.length;
console.log("Updated Marks:")
for(let i:number=0;i<students.length; i++)
{
    console.log(`${students[i]}: ${UpdatedMarks[i]}`);
}

console.log("Average Marks:" +average);
