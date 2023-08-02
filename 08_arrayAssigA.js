const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`.........First ELement............`);
let element1 = arrayFruits;
console.log(`First element is : ${element1[0]}`);

console.log(`.........Last ELement............`);
let arrayFruitsLength = arrayFruits.length;
let elementLast =arrayFruits[arrayFruitsLength-1];
console.log(`Last element is : ${elementLast}`);

console.log(`.........Add Papaya............`);
console.log(arrayFruits);
arrayFruits.unshift("Papaya");
console.log(arrayFruits);

console.log(`.........Remove Mango............`);
console.log(arrayFruits);
arrayFruits.splice(arrayFruits.indexOf("Mango"),1);
console.log(arrayFruits);

console.log(`.........Add element Pineapple at the last position............`);
console.log(arrayFruits);
arrayFruits.push("Pineapple");
console.log(arrayFruits);

console.log(`.........Add element Dragon fruit before Water melon............`); 
console.log(arrayFruits);
arrayFruits.splice(4,0,"Dragon Fruit");
console.log(arrayFruits);

console.log(`.........Replace element Orange with Kiwi ............`); 
console.log(arrayFruits);
arrayFruits.splice(arrayFruits.indexOf("Orange"), 1, "Kiwi");
console.log(arrayFruits);
console.log(`.........Elements starting from index 1 to 4 ............`);
console.log(arrayFruits);
for (let i = 1; i <= 4; i++) {
    console.log(arrayFruits[i]);
  }
  console.log(`.........Only last 3 elements ............`);
  
  const lastThreeElements = arrayFruits.slice(-3);
console.log(lastThreeElements);
console.log(`.........END............`);
