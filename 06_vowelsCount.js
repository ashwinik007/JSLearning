// A E I O U
function vowelCount(str){
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char); 
            count = count + 1;
        }
    }
    console.log(`Total number of vowels is: ${count}`);
}
vowelCount("I am very good UI Developer");

// WAP to get the sum of numbers from 0 to 20
let sum = function(){
    let totalSum = 0;
     for (let index = 1; index <=20; index++) {
         totalSum = totalSum + index;
     }
     console.log(`Sum of first 20 numbers is : ${totalSum}`);
 }
 sum();


 function oddPositionedChars(str) {
    for (let index = 0; index < str.length; index++) {
        const char = str.charAt(index);
        // Log only odd positioned chars on console and do not consider empty spaces
        if (index%2 !=0 && char != ' ') {
            
        }
    }

}
oddPositionedChars("hello");
oddPositionedChars("test");