console.log(` <.........................................Assignment 2..............................................>`);

console.log(` <..............................................START................................................>`);

console.log(`<...............................................Step 1...............................................>`);
function stringHandsOn(){
    var greet = `    Hey you are doing good, keep it up       `;
    console.log(`Given String is:   ${greet}`);

console.log(`<...............................................Step 2...............................................>`);
 
    var lengthGreet= greet.length;
    console.log('Length of String is:   ', lengthGreet);

console.log(`<...............................................Step 3...............................................>`);

var result = greet.trim();
console.log(`After Trim string is ${result} and it's length is ${result.length}`);

console.log(`<...............................................Step 4...............................................>`);

var resultTrimStart = greet.trimStart();
var trimStartLength = resultTrimStart.length;
var startSpaces = greet.length - trimStartLength;
console.log(` End Spaces is : ${startSpaces} `);

var resultTrimEnd = greet.trimEnd();
var trimEndLength = resultTrimEnd.length; 
var endSpaces = greet.length - trimEndLength;
console.log(` End Spaces is : ${endSpaces} `);

var extraSpaces = endSpaces + startSpaces;
console.log( ` Total Number of Extra Spaces is = ${extraSpaces}`);

console.log(`<...............................................Step 5...............................................>`);

var charAt0 = result.charAt(0);

console.log(` After trim first Character of string is = ${charAt0}`);

var charAtLastIndex = result.charAt(result.length-1);
console.log(` After trim last Character of string is = ${charAtLastIndex}`);


console.log(`<...............................................Step 6...............................................>`);

var String = result.split(' ');
var words = String.length;
console.log(`Total words after trim is: ${words}`);

console.log(`<...............................................Step 7...............................................>`);


var aftertrim = result.indexOf('good');
console.log(`Index of word ${aftertrim}`);

console.log(`<...............................................Step 8...............................................>`);

var resulttrim = result.slice(22);
console.log(`Slice from index 22  is : ${resulttrim}`);

console.log(`<...............................................Step 9...............................................>`);

var endswith = result.endsWith(`up`);
console.log(`String End with up word : ${endswith}`);

console.log(`<...............................................Step 10...............................................>`);

var startwith = result.startsWith(`Hey`);
 console.log(`String Starts with Hey word : ${startwith}`);

}

stringHandsOn();

console.log(` <...............................................END..................................................>`);