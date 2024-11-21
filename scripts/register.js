let pets =[];


let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Palm Ave",
        zip:"22900"
    }
}

function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}


function isValid(pet){
    let validation = true; 
    let inputName = document.getElementById("txtName");
    let inputAge = document.getElementById("txtAge");

    if(pet.name == ""){
        validation = false;
        inputName.classList.add("error");
    }

    if(pet.age == "") {
        validation = false;
        inputAge.classList.add("error");
    }

    return validation; 
}


function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputService=document.getElementById("txtService").value;

    console.log(inputName,inputAge,inputGender,inputBreed,inputService);
    
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputService);
    console.log("newPet = ", newPet);

    if(isValid(newPet) == true) {
        pets.push(newPet);
        displayRow();
        console.log(pets);

        clearForm();
    }
    
}


function clearForm(){
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtGender").value = "";
    document.getElementById("txtBreed").value = "";
    document.getElementById("txtService").value = "";
}


function init(){
    let pet1 = new Pet("Scooby",99,"Male","Dane","Grooming");
    let pet2 = new Pet("Scrappy",98,"Female","Mixed","Vaccines");
    pets.push(pet1,pet2);

    displayRow();
}



window.onload=init;

document.getElementById("clearForm2").addEventListener("click", function() {
    document.getElementById("pets").innerHTML = "";
    pets.length = 0
});

