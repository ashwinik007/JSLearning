console.log(`<=-----------------------------------------Assignment 2----------------------------------=>`);
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
console.log(`------------------------------step1----------------------`);
for (const employee of arrayEmployee) {
    if (employee.emp_company=='TCS') {
        console.log(`Employee Name = ${employee.emp_name}, Company Name= ${employee.emp_company}`);
    }
}

console.log(`------------------------------step2----------------------`);
for (const employee of arrayEmployee) {
    if (employee.emp_dept=='Finance') {
        console.log(`Employee Name = ${employee.emp_name}, Dept Name= ${employee.emp_dept}`);
    }
}
console.log(`------------------------------step3----------------------`);

for (const employee of arrayEmployee) {
    if (employee.emp_name.startsWith("R")) {
        console.log(`Employee name = ${employee.emp_name} , Company Name = ${employee.emp_company} , Id =  ${employee.emp_id}, Salary = ${employee.emp_salary}`);
    }
}
console.log(`------------------------------step4----------------------`);
for (const employee of arrayEmployee) {
    if (employee.emp_salary >75000) {
        console.log(`Employee name = ${employee.emp_name} , Company Name = ${employee.emp_company} , Salary = ${employee.emp_salary}`);
    }
}
console.log(`--------------------------------step5------------------`);
for (const employee of arrayEmployee) {
    if (employee.emp_salary>=50000 && employee.emp_dept=="IT") {
        console.log(`Employee name = ${employee.emp_name} , Company Name = ${employee.emp_company} , Id =  ${employee.emp_id}, Salary = ${employee.emp_salary}`);
    }
}
console.log(`--------------------------------step 6------------------`);
for (const employee of arrayEmployee) {
    if (employee.emp_company=='Infy') {
        console.log(`Employee name = ${employee.emp_name} , Company Name = ${employee.emp_company} , Id =  ${employee.emp_id}, Salary = ${employee.emp_salary}`);
    }
}
 //arrayEmployee.forEach((employee) => {
    //if (employee.emp_company=='TCS') {
       // console.log(`Emplyee Name = ${employee.emp_name}, Company Name= ${employee.emp_company}`);
   // }
 //});