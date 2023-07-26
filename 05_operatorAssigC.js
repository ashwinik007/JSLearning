console.log(`<=......................................................START.......................................................=>`);
console.log(`<=......................................................Assignment 1.......................................................=>`);
var graduation = function(gradScore,hscScore,sscScore,candidateName){
    
var result= (gradScore >=70 || hscScore>=80 || sscScore>90) ? console.log(`Congrats ${candidateName} You are eligible for TCS interview`): console.log(`Sorry ${candidateName},You are not legible for TCS interview`);

}

graduation(80,86,90,"Swarali");
console.log(`............................................`);
graduation(70,65,55,"Swaraj");
console.log(`............................................`);
graduation(60,79,88,"Swasti");

console.log(`<=......................................................END.......................................................=>`);