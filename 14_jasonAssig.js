let jsonEmployeeInfo =`{

    "name": "Alex Melon",
    "id":"E00245",
    "role":["Dev","DBA"],
    "age": 23,
    "doj":"11-12-2019",
    "married":false,
    "address":{
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "refferred-by": "E0012"
}`;
console.log(`--------------before conversion-----------------------`);
console.log(`Type Of jsonEmployeeInfo = ${typeof jsonEmployeeInfo}`);
const employee = JSON.parse(jsonEmployeeInfo);
console.log(`--------------after conversion-----------------------`);
console.log(`Type Of jsonEmployeeInfo = ${typeof employee}`);
console.log(employee);
console.log(`------------------------------------------------------`);

const arrayRole = employee.role;
for (const role of arrayRole){
    if (role=='Dev') {
        console.log(`Role is = ${role}`);
   }
}
console.log(`------------------------------------------------------`);

const employeeName = employee.name.split(" ");
console.log(employeeName);
const lastName = employeeName[1];
console.log(` Last Name is = ${lastName}`);
console.log(`------------------------------------------------------`);

//const employeeDoj = employee.doj.split("-");
let date = new Date(employee.doj);
let year = date.getFullYear();
console.log(`Year is ${year}`);
//const eeDoj = employeeDoj[2];
//console.log(`Only year of joining = ${eeDoj}`);





     

