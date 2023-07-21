
console.log('.............................................START........................................................');
console.log( '<=..........................................Step 1 .....................................................=>');
function Hello(){
 console.log( 'Hello Function 1');
 console.log( 'Hello Function 2');
}
Hello();

console.log('..........................................................................................................');
console.log( '<=..........................................Step 2.....................................................=>');
function personalDetails(arg1, arg2, arg3){
 console.log('First Name=',arg1,'Last Name=',arg2,'College Name=',arg3);
}
var personal = personalDetails('Ashwini','Kurapatti','SP College');

console.log('..........................................................................................................');
console.log( '<=..........................................Step 3.....................................................=>');
function swapValues(arg1, arg2){
console.log('Before Swap=> value1', arg1, " value2", arg2);
var temp = arg1;
arg1 = arg2;
arg2 = temp
console.log('After Swap=> value1', arg1, "value2" , arg2 );
}
var name1 = "Virat";
var name2 = "Anushka";
swapValues(name1, name2);

var value1 = "1000";
var value2 = "2000";
swapValues(value1, value2);
console.log('..........................................................................................................');
console.log( '<=..........................................Step 4.....................................................=>');

function addThreeValues(arg1, arg2, arg3){
    var result = arg1 + arg2 + arg3;
    return result;
}
var res = addThreeValues(10.23,600,40);
console.log('Addition =', addThreeValues(10.23, 600,40));

var result = addThreeValues('Hello','Good','Morning');
console.log('Addition = ', result);

console.log('..........................................................................................................');
console.log( '<=..........................................Step 5.....................................................=>');

function bankDetails(BankName,AccountNumber, Location, pinCode){
console.log( 'Bank Name=', BankName, 'Account Number=',AccountNumber, 'Location=', Location, 'Pin Code=',pinCode);
}
console.log('Bank Name:-','CITI Bank','Account Number:-',3456782345,'Location:-','Pune','PinCode:-',431202);
console.log('Bank Name:-','Axis Bank','Account Number:-',7856782345,'Location:-','Mumbai','pinCode:-',441202);
console.log('Bank Name:-','HDFC Bank','Account NUmber:-',8956782345,'Location:-','Pune','PinCode:-',631202);
console.log('............................................END.......................................................');