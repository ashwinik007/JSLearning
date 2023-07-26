console.log("Hello Word");
console.log("My name is Ashwini");

function maleMarriageEligibility(gender, age, boyNames){
 
    var result = (gender >= "Male" && age >= 21)? console.log(`${boyNames} you are age ${age} is so you are elible for Marriage`) : console.log(`${boyNames} your age ${age} is so you are not elible for Marriage`);
    var Name1 = maleMarriageEligibility("Male",25,"Billgates");
    var Name2 = maleMarriageEligibility("Male",17,"Stew Jobs"); 
    }
    maleMarriageEligibility("Male",25,"Billgates");
 
    maleMarriageEligibility("Male",17,"Stew Jobs"); 
    
    function femaleMarrigeEligibilty(gender, age, girlName){
        var result = (gender >= "female" && age >= 18)? console.log(` ${girlName} your age ${age} is so you are eligible for marriage `) : console.log(` ${girlName} your age ${age} is so you are not legible for marriage`);
    }
    femaleMarrigeEligibilty("Female",16,"Jennifer");
    console.log(`--------------------****-------------------`);
    femaleMarrigeEligibilty("Female",27,"Malinda Gates");
    