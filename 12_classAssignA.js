console.log(`<-------------------------------------------1st-------------------------------------------`);
class Vehicle {
    constructor(name,color,engine,typeofVehicle,price){
        this.name= name;
        this.color= color;
        this.engine= engine;
        this.typeofVehicle=typeofVehicle;
        this.price=price;
    }
    show(){
        console.log(`Vehicle Name = ${this.name}, Vehicle Color = ${this.color}, Engine Name = ${this.engine}, Type of Vehicle = ${this.typeofVehicle}, Vehicle Price = ${this.price}`)
    }  
}
let vehicleFirst = new Vehicle("BMW", "Black", "B38", "Four Wheeler", "50 Lakh");
let vehicleSecond = new Vehicle("Mercedes-Benz", "Blue", "2925 cc", "Four Wheeler", "1.29 Crore");
let vehicleThird = new Vehicle("Honda Activa 7G", "White", "109.51 cc", "Two Wheeler", "1 Lakh");
let vehicleFourth = new Vehicle("Suzuki Access 125", "Grey", "124 cc", "Two Wheeler", "1 Lakh");
let vehicleFifth = new Vehicle("Mahindra Bolero Neo", "Napoli Black", "1493 cc", "Four Wheeler", "9.63 Lakh");


const array = [vehicleFirst, vehicleSecond, vehicleThird, vehicleFourth, vehicleFifth];
  console.log(`Traversing array`);
  for (const Vehicle of array) {
      Vehicle.show();
  }

console.log(`<-------------------------------------------2nd-------------------------------------------`);
  class College {
    constructor(name,location,city,pincode){
        this.name= name;
        this.location= location;
        this.city= city;
        this.pincode =pincode;
    }
       display(){
            console.log(`College Name = ${this.name}, Location = ${this.location}, City = ${this.city}, Pincode = ${this.pincode}`)
        }  
       
  }
  let college1 = new College("COEP College", "Shivaji Nagar", "Pune", 411001);
 
  let college2 = new College("MIT College", "Mumbai", "Boriwali", 423029);
  let college3 = new College("Shivali College", "Karad rd", "Karad", 521108);
  let college4 = new College("Shahu College", "Navi Peth", "Kolhapur", 410288);

 college1.display();
 college2.display();
 college3.display();
 college4.display();
    

 
console.log(`<-------------------------------------------3rd------------------------------------------`);
class College1 {
    constructor(name,location,city,pincode){
        this.name= name;
        this.location= location;
        this.city= city;
        this.pincode =pincode;
    }
}
function traverseObject(obj){
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(`${key} = ${element}`);
    }
   
}
console.log("................................");
}
  let collegeA= new College("COEP College", "Shivaji Nagar", "Pune", 411001);
  let collegeB = new College("MIT College", "Mumbai", "Boriwali", 423029);
  let collegeC = new College("Shivali College", "Karad rd", "Karad", 521108);
  let collegeD = new College("Shahu College", "Navi Peth", "Kolhapur", 410288);

  traverseObject(collegeA);
  traverseObject(collegeB);
  traverseObject(collegeC);
  traverseObject(collegeD);