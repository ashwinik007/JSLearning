const a=[23,2,4,6,8,9];
console.log(a);
a.push(99,34);
console.log(a);
a.unshift(22);
console.log(a);
a.pop();
console.log(a);
a.splice(1,0,4);
console.log(a);
a.splice(3,9)
console.log(a);
a.shift();
console.log(a);
let a2=[2,4,6,7,8]
console.log(a2);
//console.log(...a2);
let j=a2.join( " |");
console.log(j);
let  merge=[...a,...a2];
console.log(merge);
for (let index = a2.length-1; index >= 0; index--) {
    const element = a2[index];
    console.log(element);
    
}
console.log(`----------------`);
let i=a2.indexOf(4);
console.log(i);
let a5=[1,3,5,6,7,8];
let a3=a5.slice(0,5);
console.log(a3);
for (const element of a5) {
    console.log(element);

    
}
console.log(`-----------------`);
let index=0;
while (index<=a5) {
    //index<=a5.length;
    //console.log(index);
    index++;
   // console.log(index);
    
}    console.log(index);




function sum(callback) {
    console.log(`Take two values`);
    callback();

}
let add=function(){
    console.log(`Add two value`);
    console.log(`get output`);
}
sum(add);