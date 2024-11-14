let pets = [];
let  petSalon = {
    name:"THe fashion pet",
    address:{
        street:"Palm ave",
        zip:"22900"

    }
}

//creating pets
let pet1={
    name:"scooby",
    age:80,
    gender:"male"
}

let pet2={
    name:"scrappy",
    age:70,
    gender:"male"
}

//push the object into the array

pets.push(pet1,pet2);
function displayPetNames(){
//console.log(pets);//display array
console.log(pets[0].name);
console.log(pets[1].name);
console.log("we have:" + pets.length + "pets");
}