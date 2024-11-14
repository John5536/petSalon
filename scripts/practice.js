var globalVariable = "I am global";

function myFunction(){
    var localVariable = "I am in local scope";
    //this function is global
    console.log(globalVariable);
    if(true){
        var blockVariable = "I am in a block scope";
        //THis is limited to the block(for,if)
        console.log(blockVariable);
    }
    console.log(localVariable);

}

myFunction();

//creating an object

//name,age,gender
let student1 = {
    name:"Kit",
    age:25,
    gender:"Female",
    address:{
        street:"Ave Palm",
        zip:"29800"
    },
    hobbies:["listen music","play nintendo","complete FSDI assignments"]
}

console.log(student1);

let pikachu = {
    type: "electric",
    level:"five",
    attack:"Thunder wave",
    height:12,
    color: "yellow"
}

console.log(pikachu);







let globalPractice = ["1","2"];
for(let i=0; i<globalPractice; i++){
        document.write(`
        <tr>
            <td>${}</td>
            <td>${}</td>
        </tr>
        
        `)



}