let student = {
    rollNumber: 2233,
    state: "MH",
    city: "Pune",
    college: "COEP Pune"
}

let keysStudent = Object.keys(student);
console.log(keysStudent);
let valuesStudent = Object.values(student);
console.log(valuesStudent);

console.log(`----------Traversing an object ------------ `);
for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(`Key: ${key}, value : ${element}`); 
    }
}


let isAvailable= "college" in student;


student.city = "Mumbai";
console.log(student);

let person = {
    name: "abc",
    adhar: "XXXXXX"
}

// student = person; // Not allwed

const employee = {
    empNo: 2233,
    state: "MH",
    city: "Pune",
    company: "Infosys",
    designation: "Software Engineer"
}
Object.freeze(employee);
employee.empNo = 2345;
employee.company = "TCS";
console.log(employee);