function displayRow() {
  let cardsSection = document.getElementById("pets");
  let result = "";

  for(let i=0; i<pets.length; i++){
    console.log("myForLoop");
    let pet = pets[i];

    result += ` 
    
        <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Gender</th>
          <th scope="col">Breed</th>
          <th scope="col">Service</th>
          
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">${i + 1}</th>
          <td>${pet.name}</td>
          <td>${pet.age}</td>
          <td>${pet.gender}</td>
          <td>${pet.breed}</td>
          <td>${pet.service}</td>
          <td>${pet.value=""}</td>
          
          
        </tr>
        
 
      </tbody>
      
    </table>
    
      
    `
  }

  cardsSection.innerHTML = result;
}

// login functionality (will only store the input into an array)

let btn_login = document.getElementById("button1")

btn_login.addEventListener("click", function(){
  let login_pw = document.getElementById("input1").value;
  let login_email = document.getElementById("input2").value;

  login_pw.innerHTML = "";
  




});

