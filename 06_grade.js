console.log(`<=......................................Assignment 3.............................................=>`);
function gradeCalculation(mark){
    if (mark === null || mark === undefined || isNaN(mark) || mark < 0 || mark > 100) {
        console.log(`Please provide a valid number`);
      }
     
     else if(mark>=90)
    {
        console.log(`Fantastic marks: ${mark} Your Grade is A+`);
    }
    else if(mark>=75 && mark<90)
    {
        console.log(`Excellent marks: ${mark} Your Grade is A`);
    }
    else  if(mark>=50 && mark<75)
    {
        console.log(`Good marks: ${mark} Your Grade is B`);
    }
    else if(mark>=35 && mark<50)
    {
        console.log(`Mark is: ${mark} Your Grade is c Need Implement`);
    }
    else {
        console.log(`Please provide the valid number`);
       }
       

}
gradeCalculation(98);
console.log(`..................................`);
gradeCalculation(80);
console.log(`..................................`);
gradeCalculation(90);
console.log(`..................................`);
gradeCalculation(0);
console.log(`..................................`);
gradeCalculation(150);
console.log(`..................................`);
gradeCalculation(-7);
console.log(`..................................`);
gradeCalculation(35);
console.log(`..................................`);
gradeCalculation(29);
console.log(`..................................`);
gradeCalculation(64);
console.log(`..................................`);
gradeCalculation(49);
console.log(`..................................`);
gradeCalculation("91");
console.log(`..................................`);
gradeCalculation("Eighty");
console.log(`..................................`);
gradeCalculation(undefined);
console.log(`..................................`);
gradeCalculation(null);