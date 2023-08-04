let sbiBank={
    bankName: "SBI Bank",
    location: "Tilak Rd Pune",
    accountNo: "123456789",
    ifsc: "sbi0004123",
    interestRate:"7.6%",
    showDetails:function(){
        console.log(`${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }
    
}


let axisBank={
    bankName: "Axis Bank",
    location: "Shivaji Nagar Pune",
    accountNo: "5789064317",
    ifsc: "axis0007654",
    interestRate:"8.6%",
    showDetails:function(){
        console.log(`${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }

}
let hdfcBank={
    bankName: "HDFC Bank",
    location: "Wadgaon Sheri Pune",
    accountNo: "000987654321",
    ifsc: "hdfc00083456",
    interestRate:"8.2%",
    showDetails:function(){
        console.log(`${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }

}

let yesBank={
    bankName: "Yes Bank",
    location: "Hadapsar Pune",
    accountNo: "236548769970",
    ifsc: "yes000786",
    interestRate:"7.2%",
    showDetails:function(){
        console.log(`${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }
   
}

sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();