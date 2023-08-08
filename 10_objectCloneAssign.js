let personalDetails={
    Name:"Ram",
    Age: 20,
    Mobile:9586325412,
}

let College={
    collegeName:"SKN",
    City:"Pune",
    studentCount:2000,
}

let res=Object.assign({},personalDetails,College);
console.log(`Personal Details : Name : ${res.Name}, Age: ${res.Age}, Mobile No: ${res.Mobile}`);
console.log(`College Details: College Name: ${res.collegeName}, City: ${res.City}, Student Count: ${res.studentCount}`);
console.log("-----------------------------------------------------------------------------");

let array=["Ram","Sham","Datta","Uttam","Sharad"];
Object.freeze(array);
for (const res of array) {
    console.log(`Friends Name is: ${res}`);
}
console.log("-----------------------------------------------------------------------------")

let inputString = "Codemind Technology";
let words = inputString.split(' ');

for (let i = 0; i < words.length; i++) {
    if (words[i] === "Technology") {
        let reversedWord = words[i].split('').reverse().join('');
        console.log("Reverse Word is :",reversedWord);
        break;
    }
}