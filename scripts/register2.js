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
let cat2={
    name:"fgsdfgdfsg",
    age:70,
    gender:"male",
    service:"Nail trim",
    breed:"Calico"
}
let turtle2 = {
    name:"fgdgdfsg",
    age:100,
    gender:"Female",
    service:"Eye infection",
    breed:"Red eared slider"
}
pets.push(turtle2,cat2,turtle);
function displayPetNames(){
    for(let i=0; i<4; i++){
        document.getElementById("petlist").innerHTML += `<li> ${pets[i].name}</li>`;

    }
    document.getElementById("petlist").innerHTML += "we have:" + pets.length + "pets";




}