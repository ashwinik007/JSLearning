const arrayNums = [20,3,4,56,90,400,49]
console.log(`Original Array = ${arrayNums}`);
console.log(`----------------------------------------------------`);
let array = arrayNums;
console.log(`Cloned Array = ${array}`);

console.log(`----------------------------------------------------`);

array.push(55,66);
console.log(`Add 55,66 with using push = ${array}`);

console.log(`----------------------------------------------------`);

let arrayRes = [...arrayNums]
console.log(`${arrayRes}`);

console.log(`----------------------------------------------------`);
arrayNums.push(10,25);
console.log(`Add 10,25 with using push = ${arrayNums}`);


console.log(`----------------------------------------------------`);
const arrayEven = [2,30,14,8]

let res= [...arrayEven,...arrayNums]
console.log(`${res}`);

console.log("-------------------------------------------------------------------------------------");

const employeeInfo = {
    id : 234,
    name : "Ashwini",
    salary : {
        july : 20000,
        aug : 50000,
        jun: 80000
    },
    address:{
        locality:{
            colony: "Nana peth",
            street: "phule rd pune",
        },
        city: "Pune",
        state: "Maharashtra",
        country:"India"
    },

    mob: ["12234444","245697790","23467899"]
    
}
console.log(`${employeeInfo.address.locality.colony}`);
console.log(`${employeeInfo.address.locality.street}`);
console.log(`${employeeInfo.address.city}`);
console.log(`${employeeInfo.address.state}`);
console.log(`${employeeInfo.address.country}`);
console.log(`${employeeInfo.mob}`);

let deepClone = JSON.parse(JSON.stringify(employeeInfo));
console.log(deepClone);
deepClone.july = "80000";
employeeInfo.address.country = "United Kingdom";
console.log(deepClone);
console.log(employeeInfo);
