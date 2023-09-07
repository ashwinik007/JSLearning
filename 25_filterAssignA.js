
console.log(`==============================Assignement 1=============================================`);

const arrayNumbers =[20,11,40,25,37,49,9,90,60,2,19];

console.log(arrayNumbers);
console.log(`------------------------ Numbers are greater than 50 ----------------------------`);

const array = arrayNumbers.filter((currentValue)=>{

    return currentValue > 50;
})

console.log(array);

console.log(`------------------------ All Even numbers in array ----------------------------`);
const arrayEvenNumbers = arrayNumbers.filter((currentValue)=>{
    return currentValue%2==0;
});

console.log(arrayEvenNumbers);
console.log(`------------------------ All Odd numbers in array ----------------------------`);
const arrayOddNumbers = arrayNumbers.filter((currentValue)=>{
    return currentValue%2==1;
});
console.log(arrayOddNumbers);

console.log(`------------------------ All numbers are multiple of 5 ----------------------------`);

const arrayMultiple = arrayNumbers.filter((currentValue)=>{
    return currentValue%5 ==0;
});

console.log(arrayMultiple);

console.log(`------------------------ All numbers between 20 and 50 ----------------------------`);

const arr = arrayNumbers.filter((currentValue)=>{

    return currentValue >20 && currentValue <50;
});

console.log(arr);

// console.log(`==============================Assignement 2=============================================`);

class Employess{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employess(22, "Anil", "IT",50000, "TCS");
const emp_radha = new Employess(33, "Radha", "HR",74000, "Wipro");
const emp_rishi = new Employess(55, "Rishi", "Finance",47000, "TCS");
const emp_sonali = new Employess(66, "Sonali", "Finance",45000, "Infy");
const emp_monika = new Employess(77, "Monika", "IT",40000, "Wipro");
const emp_viny = new Employess(88, "Vinayak", "IT",75000, "TCS");
const emp_mahi = new Employess(99, "Mahesh", "HR",85000, "Infy");

const arrayEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
// console.log(`------------------------------List of all EmployeeNames----------------------`);

// const arrayDept = arrayEmployee.filter((employee)=>{
    // return employee.emp_dept == "TCS";
// })
// console.log(arrayDept);