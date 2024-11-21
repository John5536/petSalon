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



