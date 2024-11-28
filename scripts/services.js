
window.onload = function() { displayInhtml(); };
class salonServices{
  constructor(userName, petName , serviceNeeded, appointmentDate){
    this.userName = userName;
    this.petName = petName;
    this.serviceNeeded = serviceNeeded;
    this.appointmentDate =appointmentDate;
  }
}

let servicesChosen = JSON.parse(localStorage.getItem('servicekey')) || [];

function sericesManager(){
  let personName = document.getElementById("userName").value;
  let animalName = document.getElementById("animalNameindex").value;
  let serviceName = document.getElementById("serviceDesired").value;
  let appointmentName = document.getElementById("aptDate").value;

  let newServiceslist = new salonServices(personName,animalName,serviceName,appointmentName);


  if (document.getElementById("userName").value === ''){
    alert("username is empty!")
  }
  else if (document.getElementById("animalNameindex").value === ''){
    alert("animal name is empty!")
  }
  else if (document.getElementById("serviceDesired").value === ''){
    alert("service is empty!")
  }
  else if (document.getElementById("aptDate").value === ''){
    alert("appointment is empty!")
  }

  servicesChosen.push(newServiceslist);

  let servicesString =JSON.stringify(servicesChosen);

  localStorage.setItem('servicekey',servicesString);

  console.log(servicesChosen);

  document.getElementById("userName").value = '';
  document.getElementById("animalNameindex").value = '';
  document.getElementById("serviceDesired").value = '';
  document.getElementById("aptDate").value = '';

}

function displayInhtml (){
  let storedServices = localStorage.getItem('servicekey');
  let parsedinfo = JSON.parse(storedServices);
  let servicesDisplay2 = document.getElementById("servicesDisplay");

  servicesDisplay2.innerHTML = parsedinfo;
}

let serviceButton = document.getElementById("servicesBtn");



serviceButton.addEventListener("click", function(){
  sericesManager();

})
