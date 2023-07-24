console.log(` <=........................................STEP 1.................................................=>`);
var square = function(num){
var result = num*num;
console.log(`Square of the number is: ${result} `);
}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);

console.log(` <=........................................STEP 2.................................................=>`);

console.log(`Type of function name : ${ typeof square}`);

console.log(` <=........................................STEP 3.................................................=>`);

var area = function( length,width){
var arearesult = length*width;
console.log(` Area of Rectangle plot: ${arearesult}`);
}
area(499,917);

console.log(` <=........................................STEP 4.................................................=>`);

var swapValues = function(Value1,Value2){
    
    console.log( `Before Swap = ${Value1}  and  ${Value2}`);
   
    var temp = Value1;
   var Value1 = Value2;
   var Value2 = temp;

   
   console.log( `After Swap = ${Value1}  and  ${Value2}`);
}

swapValues("Mahi","Raina");

var swapValues = function(Value1,Value2){
    
    console.log( `Before Swap = ${Value1}  and  ${Value2}`);
   
    var temp = Value1;
   var Value1 = Value2;
   var Value2 = temp;

   
   console.log( `After Swap = ${Value1}  and  ${Value2}`);
}

swapValues("55","77");



console.log(` <=........................................STEP 5.................................................=>`);

var strOperation = function(word){
      var wordCount  = word.length;
      console.log(`Total number of character in the string: ${wordCount}`);
      

      var charAt6 = word.charAt(6);
      console.log(` Character at Index 6 is : " " ${charAt6}`);

      var charAt11 = word.charAt(11);
      console.log(` Character at Index 11 is : " " ${charAt11}`);

      var charAtLastIndex = word.charAt(word.length-1);
      console.log(` Last Character of string is : ${charAtLastIndex}`);

      var charAt0 = word.charAt(0);
      console.log(` First Character of string is : ${charAt0}`);

      var charAtIndex = word.charAt(word.length-3);
      console.log(` Last Character of string is : ${charAtIndex}`);

      var String = word.split(' ');
      var words = String.length;
      console.log(` Total number of words : ${words}`);

      var wordsqare = words*words;
      console.log(` Sqaure of the total number of words: ${wordsqare}`);

}
strOperation("JS the most popular language of internet");


