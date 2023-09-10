
console.log(`-----------------------------------------------Assignment 1--------------------------------------------------`);
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  let arrayEmps = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi,];
  console.log(`----------------------------------------All Employees are from Wipro----------------------------------`);
  const employeeWipro = arrayEmps.filter((employee)=> {
    return employee.emp_company==='Wipro';
  });
  for (const employee of employeeWipro) {
    console.log(`Company Name: ${employee.emp_company} , Employee Name: ${employee.emp_name}`);
    
  }
  console.log(`----------------------------------------All Employees are from IT or HR dept------------------------------------`);
  const arrayOfItandHRDept = arrayEmps.filter(employee=>{
    return employee.emp_dept==="IT" || employee.emp_dept==="HR";
  });
  for (const employee of arrayOfItandHRDept) {
    console.log(`Department Name  : ${employee.emp_dept}, Employee name : ${employee.emp_name} `);
  }
  
  console.log(`----------------------------------------All Employees id's are greater than 50 ----------------------------------`);
  const gretarThan50 = arrayEmps.filter((employee)=>{
    return employee.emp_id>50;

  }); for (const employee of gretarThan50) {
    console.log(`Employee name : ${employee.emp_name} 's id is greater than 50  = ${employee.emp_id}`);
  }
  
  console.log(`------------------------------------All Employees names with starts with letter A,V,M----------------------------------`);
  const employeeNamesStarts = arrayEmps.filter((employee)=>{
    return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M")
});
for (const employee of employeeNamesStarts) {
console.log(`${employee.emp_name}`);
}
  console.log(`--------------------------------------- Average salary of the Employee for all Dept -----------------------------------`);
  const sumSalary  = arrayEmps.reduce((total , employee)=>{
    return total + employee.emp_salary;
  })
  let salarySum = 0;
  for (const employee of arrayEmps) {
    salarySum= salarySum + employee.emp_salary;
  }
  console.log(`Average Salary of the Employee : ${salarySum/arrayEmps.length}`);
  console.log(`---------------------------------------Average salary for IT dept------------------------------------`);
  const itDepartment  = arrayEmps.filter((employee)=>{
    return employee.emp_dept=="IT";
  })
  let averageSalary = 0;
  for (const employee of itDepartment) {
    averageSalary = averageSalary + employee.emp_salary;

    // console.log(`The Employee of IT department is : ${employee.emp_dept} `);
    
  }
  console.log(`Average salary of IT Department is : ${averageSalary/itDepartment.length} `);
 