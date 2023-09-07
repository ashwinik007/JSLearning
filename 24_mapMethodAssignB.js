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
console.log(`------------------------------List of all EmployeeNames----------------------`);

const employeeNames = arrayEmployee.map((employee)=>{
    return employee.emp_name;
})
console.log(employeeNames);

console.log(`------------------------------List of Departments----------------------`);

const employeeDept = arrayEmployee.map((employee)=>{
    return employee.emp_dept;
})
console.log(employeeDept);

console.log(`------------------------------List of Employee Id's----------------------`);

const employeeId = arrayEmployee.map((employee)=>{
   return employee.emp_id;
})
console.log(employeeId);