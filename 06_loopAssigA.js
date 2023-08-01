console.log(`<============================Assignment 1=======================================>`);
console.log("-------------------------------------------------------------------------------");

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
vowelCount("I am very good IT Developer");
console.log("-------------------------------------------------------------------------------");
let cube=function(){
    let cubeTotal=0;
    for(let i=1;i<=5;i++)
    {
        let a=i*i*i;
        cubeTotal=cubeTotal+a;
    }
    console.log(`Cube Total= ${cubeTotal}`);

}
cube();
console.log("-------------------------------------------------------------------------------");

let oddPosition = function(str) {
    let output = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 !== 0 && str.charAt(i) !== " ") {
            output += str.charAt(i);
        }
    }
    console.log(output);
    console.log("------------------------------------");
};

oddPosition("Hard work always pays back");
oddPosition("Soon i will be angular it champ");


console.log(`<============================Assignment 2=======================================>`);

let reverseString = function(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== " ") {
            res += str.charAt(i);
        }
    }
    console.log("Reverse String=",res);
}

reverseString("Hard work always pays back");
reverseString("Soon i will be angular it champ");