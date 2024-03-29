console.log(`==============================Assignement 1=============================================`);

class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT",50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR",74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance",47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance",45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT",40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT",75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR",85000, "Infy");

const arrayEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

 console.log(`------------------------------List of all EmployeeNames ----------------------`);


const arrayTcs = arrayEmployee.filter((employee)=>{
    return employee.emp_company === "TCS";
 })
console.log(arrayTcs);
for (const employee of arrayTcs) {
    console.log(`Company Name:${employee.emp_company},Employee Name: ${employee.emp_name}`);
}


console.log("===== Find the TCS employees and get the list of employee names only ======");

  const tcsEmployees = arrayEmployee.filter((employee)=> {

    return employee.emp_company==='TCS';

  });

  const employeeTcsNames = tcsEmployees.map((employee)=> {

    return employee.emp_name;

  });

  console.log(employeeTcsNames);

 

  console.log(`***************************`);

  arrayEmployee.filter(employee=> employee.emp_company==='TCS')

  .map(employee =>  employee.emp_name)

  .forEach(empName => console.log(empName));

  console.log(`----------------------2 Find the avrage salaray of Employee from Wipro.-----------------------------`);
  const wiprolEmployess = arrayEmployee.filter((employee)=>{
    return employee.emp_company==="Wipro";
  });
    let salarySum = 0;
  for (const employee of wiprolEmployess) {
    salarySum = salarySum + employee.emp_salary;
  }
  console.log(`Average Salary from Wipro : ${salarySum/wiprolEmployess.length}`);

  const avgEmployess = arrayEmployee.filter((employee)=>{
    return employee.emp_company==="Wipro" || employee.emp_company ==="Infy";
  });
    let sum = 0;
  for (const employee of avgEmployess) {
    sum = sum + employee.emp_salary;
  }
  console.log(`Average Salary from Wipro and Infy : ${sum/avgEmployess.length}`);