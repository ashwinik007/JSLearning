let bankSbi={
    name:"SBI Bank",
    code:2010,
    ifsc:"SBIN0021351",
    branch:"Sinhgad"    
}
let bankLocation={
    street:"Laxmi",
    city:"Pune",
    pinCode:413314
}

let rateOfIntrest={
    homeLoan:7.5,
    personalIntrest:8,
    duelIntrest:7
}

let res=Object.assign(bankSbi)
console.log(`SBI Bank Details: Name: ${res.name}, Code:${res.code}, IFSC Code: ${res.ifsc}, Branch: ${res.branch}`);
console.log("-------------------------------------------------------------------------------------");
let result = {...bankSbi};
console.log(`SBI Details Using Spread Name: ${result.name}, Code:${result.code}, IFSC Code: ${result.ifsc}, Branch: ${result.branch}`);
console.log("-------------------------------------------------------------------------------------");
let res1=Object.assign(bankLocation);
console.log(`Bank Location: Street: ${res1.street}, City: ${res1.city}, Pin Code: ${res1.pinCode}`);
console.log("-------------------------------------------------------------------------------------");
let location={...bankLocation};
console.log(`Bank Location using Spread Street: ${location.street}, City: ${location.city}, Pin Code: ${location.pinCode}`);
console.log("-------------------------------------------------------------------------------------");
let sbiDetails= Object.assign({},bankSbi,bankLocation,rateOfIntrest);
console.log(`Bank Detailes- Name: ${sbiDetails.name}, Code: ${sbiDetails.code}, Ifsc Code:${sbiDetails.ifsc}, Branch:${sbiDetails.branch}`);
console.log(`Bank Location- Street: ${sbiDetails.street}, City: ${sbiDetails.city}, Pin Code: ${sbiDetails.pinCode}`);
console.log(`Bank Intrest- Home Loan Intrest: ${sbiDetails.homeLoan}, Personal Intrest: ${sbiDetails.personalIntrest}, Duel Intrest: ${sbiDetails.duelIntrest}`);
console.log("-------------------------------------------------------------------------------------");

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}==>${element}`);
        console.log("--------------------------");
        
    }
}