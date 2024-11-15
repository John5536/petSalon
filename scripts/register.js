
let  petSalon = {
    name:"THe fashion pet",
    address:{
        street:"Palm ave",
        zip:"22900"

    }
}

//creating pets
let dog={
    name:"Brutus",
    age:80,
    gender:"male",
    service:"Dental work",
    breed:"staffordshire terrier"
}
let cat={
    name:"scrappy",
    age:70,
    gender:"male",
    service:"Nail trim",
    breed:"Calico"
}
let turtle = {
    name:"Donatello",
    age:100,
    gender:"Female",
    service:"Eye infection",
    breed:"Red eared slider"
}



let pets = [dog,cat,turtle];

function displayPetNames(){
    let output = document.getElementById("animal_output");
    let namesList = "";

    for (let i = 0; i < pets.length; i++) {
        namesList += pets[i].name + "<br>"; 
    }

    output.innerHTML = namesList;

}
displayPetNames();